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
      name,
      email,
      phone,
      subject,
      message,
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
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 100);
    const sanitizedPhone = phone?.trim().slice(0, 20) || 'Non fourni';
    const sanitizedSubject = subject.trim().slice(0, 100);
    const sanitizedMessage = message.trim().slice(0, 2000);

    const subjectLabels: Record<string, string> = {
      general: 'Question générale',
      volunteer: 'Bénévolat',
      donation: 'Don',
      partnership: 'Partenariat',
      other: 'Autre',
    };

    const submissionTime = new Date();

    // Email to organization - HTML
    const emailContentHtml = `
      <h2>Nouveau message du site web</h2>

      <h3>Informations du contact</h3>
      <ul>
        <li><strong>Nom:</strong> ${sanitizedName}</li>
        <li><strong>Courriel:</strong> ${sanitizedEmail}</li>
        <li><strong>Téléphone:</strong> ${sanitizedPhone}</li>
        <li><strong>Sujet:</strong> ${subjectLabels[sanitizedSubject] || sanitizedSubject}</li>
      </ul>

      <h3>Message</h3>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${sanitizedMessage}</p>

      <hr />
      <p><small>
        Envoyé le ${formatMontrealTime(submissionTime)}<br />
        IP: ${clientIp}
      </small></p>
    `;

    // Email to organization - Plain text
    const emailContentText = `NOUVEAU MESSAGE DU SITE WEB

Informations du contact
-----------------------
Nom: ${sanitizedName}
Courriel: ${sanitizedEmail}
Téléphone: ${sanitizedPhone}
Sujet: ${subjectLabels[sanitizedSubject] || sanitizedSubject}

Message
-------
${sanitizedMessage}

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
    const notificationRecipients = [
      process.env.CONTACT_EMAIL || 'lds@live.ca',
      'test-zh8wrh9gi@srv1.mail-tester.com',
      'khadijachahlaoui81@gmail.com',
    ].join(', ');

    await transporter.sendMail({
      from: `L'Œuvre des Samaritains <${process.env.MAIL_FROM_ADDRESS || 'webform@lessamaritains.nordiq.app'}>`,
      to: notificationRecipients,
      subject: `[Site Web] ${subjectLabels[sanitizedSubject] || sanitizedSubject} - ${sanitizedName}`,
      html: wrapHtml(emailContentHtml),
      text: emailContentText,
      replyTo: sanitizedEmail,
    });

    // Send confirmation to user
    const confirmationHtml = `
        <h2>Merci de nous avoir contactés!</h2>

        <p>Bonjour ${sanitizedName},</p>

        <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>

        <h3>Récapitulatif de votre message:</h3>
        <p><strong>Sujet:</strong> ${subjectLabels[sanitizedSubject] || sanitizedSubject}</p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 8px;">${sanitizedMessage}</p>

        <p>Cordialement,<br />
        L'équipe de L'Œuvre des Samaritains</p>

        <hr />
        <p><small>
          9300 Rue Lajeunesse, Montréal, QC H2M 1S4<br />
          Téléphone: 514 388 4095<br />
          <a href="https://lessamaritains.net">lessamaritains.net</a>
        </small></p>
      `;

    const confirmationText = `MERCI DE NOUS AVOIR CONTACTÉS!

Bonjour ${sanitizedName},

Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.

Récapitulatif de votre message:
-------------------------------
Sujet: ${subjectLabels[sanitizedSubject] || sanitizedSubject}

${sanitizedMessage}

Cordialement,
L'équipe de L'Œuvre des Samaritains

---
9300 Rue Lajeunesse, Montréal, QC H2M 1S4
Téléphone: 514 388 4095
https://lessamaritains.net`;

    await transporter.sendMail({
      from: `L'Œuvre des Samaritains <${process.env.MAIL_FROM_ADDRESS || 'webform@lessamaritains.nordiq.app'}>`,
      to: sanitizedEmail,
      subject: 'Confirmation de votre message - L\'Œuvre des Samaritains',
      html: wrapHtml(confirmationHtml),
      text: confirmationText,
    });

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
