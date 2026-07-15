import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Create SMTP transporter using AWS SES
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'email-smtp.ca-central-1.amazonaws.com',
  port: parseInt(process.env.MAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

function formatMontrealTime(date: Date) {
  return date.toLocaleString('fr-CA', {
    timeZone: 'America/Montreal',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }) + ' (Montréal)';
}

function wrapHtml(content: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  ${content}
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    const {
      firstName,
      lastName,
      email,
      phone,
      availability,
      motivation,
      honeypot,
      formStartTime,
      submitTime,
    } = body;

    // Honeypot check
    if (honeypot && honeypot.trim() !== '') {
      console.log('Bot detected via honeypot:', clientIp);
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Rate limiting
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    // Time-based validation
    const timeTaken = submitTime - formStartTime;
    if (timeTaken < 3000) {
      console.log('Form submitted too quickly:', timeTaken, 'ms');
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !availability?.length || !motivation) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedFirstName = firstName.trim().slice(0, 50);
    const sanitizedLastName = lastName.trim().slice(0, 50);
    const sanitizedEmail = email.trim().slice(0, 100);
    const sanitizedPhone = phone?.trim().slice(0, 20) || 'Non fourni';
    const sanitizedAvailability = (availability as string[])
      .slice(0, 10)
      .map(a => String(a).trim().slice(0, 60));
    const sanitizedMotivation = motivation.trim().slice(0, 2000);

    const formattedAvailability = sanitizedAvailability.join(', ');

    const submissionTime = new Date();
    const fullName = `${sanitizedFirstName} ${sanitizedLastName}`;

    // Email to organization - HTML
    const emailContentHtml = `
      <h2>Nouvelle candidature bénévole</h2>

      <h3>Informations du candidat</h3>
      <ul>
        <li><strong>Nom:</strong> ${fullName}</li>
        <li><strong>Courriel:</strong> ${sanitizedEmail}</li>
        <li><strong>Téléphone:</strong> ${sanitizedPhone}</li>
        <li><strong>Disponibilités:</strong> ${formattedAvailability}</li>
      </ul>

      <h3>Motivation</h3>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${sanitizedMotivation}</p>

      <hr />
      <p><small>
        Envoyé le ${formatMontrealTime(submissionTime)}<br />
        IP: ${clientIp}
      </small></p>
    `;

    // Email to organization - Plain text
    const emailContentText = `NOUVELLE CANDIDATURE BÉNÉVOLE

Informations du candidat
------------------------
Nom: ${fullName}
Courriel: ${sanitizedEmail}
Téléphone: ${sanitizedPhone}
Disponibilités: ${formattedAvailability}

Motivation
----------
${sanitizedMotivation}

---
Envoyé le ${formatMontrealTime(submissionTime)}
IP: ${clientIp}`;

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError);
      return NextResponse.json(
        { error: 'Erreur de configuration du service de courriel.' },
        { status: 500 }
      );
    }

    // Send notification to organization
    await transporter.sendMail({
      from: `L'Œuvre des Samaritains <${process.env.MAIL_FROM_ADDRESS || 'webform@lessamaritains.nordiq.app'}>`,
      to: process.env.VOLUNTEER_EMAIL || 'ldsbenevolat@hotmail.com',
      subject: `[Bénévolat] Nouvelle candidature - ${fullName}`,
      html: wrapHtml(emailContentHtml),
      text: emailContentText,
    });

    // Send confirmation to volunteer
    const confirmationHtml = `
        <h2>Merci pour votre intérêt!</h2>

        <p>Bonjour ${sanitizedFirstName},</p>

        <p>Nous avons bien reçu votre candidature pour devenir bénévole à L'Œuvre des Samaritains.
        Nous sommes touchés par votre désir de contribuer à notre mission d'aide alimentaire.</p>

        <p>Un membre de notre équipe vous contactera prochainement pour discuter des prochaines étapes.</p>

        <h3>Récapitulatif de votre candidature:</h3>
        <p><strong>Disponibilités:</strong> ${formattedAvailability}</p>
        <p><strong>Votre motivation:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${sanitizedMotivation}</p>

        <p>Cordialement,<br />
        L'équipe de L'Œuvre des Samaritains</p>

        <hr />
        <p><small>
          <em>Ceci est un message automatique. Veuillez ne pas répondre à ce courriel.</em><br />
          <em>Pour nous contacter: <a href="mailto:lds@live.ca">lds@live.ca</a></em><br /><br />
          9300 Rue Lajeunesse, Montréal, QC H2M 1S4<br />
          Téléphone: 514 388 4095<br />
          <a href="https://lessamaritains.net">lessamaritains.net</a>
        </small></p>
      `;

    const confirmationText = `MERCI POUR VOTRE INTÉRÊT!

Bonjour ${sanitizedFirstName},

Nous avons bien reçu votre candidature pour devenir bénévole à L'Œuvre des Samaritains.
Nous sommes touchés par votre désir de contribuer à notre mission d'aide alimentaire.

Un membre de notre équipe vous contactera prochainement pour discuter des prochaines étapes.

Récapitulatif de votre candidature:
-----------------------------------
Disponibilités: ${formattedAvailability}

Votre motivation:
${sanitizedMotivation}

Cordialement,
L'équipe de L'Œuvre des Samaritains

---
Ceci est un message automatique. Veuillez ne pas répondre à ce courriel.
Pour nous contacter: lds@live.ca

9300 Rue Lajeunesse, Montréal, QC H2M 1S4
Téléphone: 514 388 4095
https://lessamaritains.net`;

    await transporter.sendMail({
      from: `L'Œuvre des Samaritains <no-reply@lessamaritains.nordiq.app>`,
      to: sanitizedEmail,
      subject: 'Confirmation de votre candidature bénévole - L\'Œuvre des Samaritains',
      html: wrapHtml(confirmationHtml),
      text: confirmationText,
    });

    return NextResponse.json(
      { success: true, message: 'Candidature envoyée avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing volunteer form:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
