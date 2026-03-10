'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: MapPin,
      title: t('address'),
      content: '9300 Rue Lajeunesse\nMontréal, QC H2M 1S4',
      link: 'https://maps.google.com/?q=9300+Rue+Lajeunesse+Montreal',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '514 388 4095',
      link: 'tel:+15143884095',
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'lds@live.ca',
      link: 'mailto:lds@live.ca',
    },
    {
      icon: Clock,
      title: t('hours'),
      content: t('hoursValue'),
    },
    {
      icon: Facebook,
      title: t('facebook'),
      content: t('followUs'),
      link: 'https://www.facebook.com/Oeuvredessamaritains',
    },
  ];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden field for bot detection
  });
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          formStartTime,
          submitTime: Date.now(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t('subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-text-muted">
              {t('description')}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  'p-6 rounded-2xl text-center',
                  'bg-background border border-border',
                  'hover:shadow-lg hover:border-primary/30',
                  'transition-all duration-300'
                )}
              >
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4",
                    info.title === 'Facebook' ? 'bg-[#1877F2]' : 'bg-primary/10'
                  )}>
                  <info.icon className={cn(
                    "w-7 h-7",
                    info.title === 'Facebook' ? 'text-white' : 'text-primary'
                  )} />
                </div>
                <h3 className="font-semibold text-lg text-text mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-text-muted hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-text-muted whitespace-pre-line">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map & Form Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <FadeIn direction="right">
              <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8!2d-73.6548!3d45.5582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bc93c5d3e45%3A0x5e8f4b3c2d1a7f9e!2s9300%20Rue%20Lajeunesse%2C%20Montr%C3%A9al%2C%20QC%20H2M%201S4!5e0!3m2!1sfr!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-surface rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-text mb-6">
                  {t('sendMessage')}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {t('form.success')}
                    </h3>
                    <p className="text-text-muted">
                      {t('form.successMessage')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formState.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-error/10 text-error"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                      </motion.div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                          {t('form.name')} {t('form.required')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-background border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                          {t('form.email')} {t('form.required')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-background border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.emailPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                          {t('form.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-background border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.phonePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                          {t('form.subject')} {t('form.required')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-background border border-border',
                            'text-text',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                        >
                          <option value="">{t('form.subjectPlaceholder')}</option>
                          <option value="general">{t('form.subjectGeneral')}</option>
                          <option value="volunteer">{t('form.subjectVolunteer')}</option>
                          <option value="donation">{t('form.subjectDonation')}</option>
                          <option value="partnership">{t('form.subjectPartnership')}</option>
                          <option value="other">{t('form.subjectOther')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        {t('form.message')} {t('form.required')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl resize-none',
                          'bg-background border border-border',
                          'text-text placeholder:text-text-muted',
                          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                          'transition-all duration-200'
                        )}
                        placeholder={t('form.messagePlaceholder')}
                      />
                    </div>

                    <Button type="submit" size="lg" loading={isSubmitting} className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      {t('form.submit')}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
