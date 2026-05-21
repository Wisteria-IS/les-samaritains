'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Clock, Users, Award, Send, CheckCircle, Star, Target, ShoppingBasket, Megaphone, FileText, ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type DayKey = 'mardi' | 'jeudi' | 'vendredi';
type DaySlot = { enabled: boolean; startTime: string; endTime: string };

const DAYS: { key: DayKey; label: string }[] = [
  { key: 'mardi', label: 'Mardi' },
  { key: 'jeudi', label: 'Jeudi' },
  { key: 'vendredi', label: 'Vendredi' },
];

const START_TIMES = ['8h00', '8h30'];
const END_TIMES = ['12h00', '14h00', '15h00', '17h00'];

export default function BenevolePage() {
  const t = useTranslations('volunteer');
  const roles = t.raw('roles.list') as Array<{ title: string; description: string }>;

  const benefits = [
    {
      icon: Heart,
      title: t('benefits.makeDifference.title'),
      description: t('benefits.makeDifference.description'),
    },
    {
      icon: Users,
      title: t('benefits.joinCommunity.title'),
      description: t('benefits.joinCommunity.description'),
    },
    {
      icon: Clock,
      title: t('benefits.flexibleHours.title'),
      description: t('benefits.flexibleHours.description'),
    },
    {
      icon: Award,
      title: t('benefits.developSkills.title'),
      description: t('benefits.developSkills.description'),
    },
  ];
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    availability: {
      mardi: { enabled: false, startTime: '8h00', endTime: '17h00' } as DaySlot,
      jeudi: { enabled: false, startTime: '8h00', endTime: '17h00' } as DaySlot,
      vendredi: { enabled: false, startTime: '8h00', endTime: '17h00' } as DaySlot,
    },
    motivation: '',
    honeypot: '',
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

    const availabilityList = DAYS
      .filter(({ key }) => formState.availability[key].enabled)
      .map(({ key, label }) => {
        const slot = formState.availability[key];
        return `${label} ${slot.startTime}-${slot.endTime}`;
      });

    if (availabilityList.length === 0) {
      setError('Veuillez sélectionner au moins une disponibilité.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          availability: availabilityList,
          formStartTime,
          submitTime: Date.now(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDayToggle = (day: DayKey) => {
    setFormState(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], enabled: !prev.availability[day].enabled },
      },
    }));
  };

  const handleSlotTimeChange = (day: DayKey, field: 'startTime' | 'endTime', value: string) => {
    setFormState(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], [field]: value },
      },
    }));
  };

  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/hero/hands-hd.jpg"
      />

      {/* Promotional Call-to-Action — kept at the very top */}
      <section className="py-12 md:py-16 bg-background-alt">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary shadow-2xl">
              {/* Decorative orbs */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-yellow-300/20 blur-3xl" />

              <div className="relative px-6 py-12 md:px-12 md:py-16 lg:py-20 text-white">
                {/* Blessing on top */}
                <p className="text-center italic text-xl md:text-2xl mb-8 tracking-wide">
                  <Star className="inline-block w-5 h-5 fill-yellow-300 text-yellow-300 mr-2 -mt-1" />
                  <span className="text-white/95">{t('promo.blessing')}</span>
                  <Star className="inline-block w-5 h-5 fill-yellow-300 text-yellow-300 ml-2 -mt-1" />
                </p>

                {/* Tagline pill */}
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
                    <Megaphone className="w-4 h-4" />
                    {t('promo.tagline')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight">
                  {t('promo.title')}
                </h2>

                {/* Milestone headline */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Target className="w-8 h-8 md:w-9 md:h-9 text-yellow-300 flex-shrink-0" />
                  <p className="text-2xl md:text-3xl font-bold">{t('promo.hoursMilestone')}</p>
                </div>

                {/* 3 benefit cards */}
                <div className="grid sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                    <Award className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                    <p className="font-bold text-base md:text-lg">{t('promo.benefit1')}</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                    <FileText className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                    <p className="font-bold text-base md:text-lg">{t('promo.benefit2')}</p>
                  </div>
                  <div className="bg-yellow-300/25 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-yellow-300/60 ring-2 ring-yellow-300/30 ring-offset-2 ring-offset-transparent shadow-lg shadow-yellow-300/20 sm:scale-105">
                    <ShoppingBasket className="w-12 h-12 text-yellow-200 mx-auto mb-3" />
                    <p className="font-extrabold text-base md:text-lg">{t('promo.freeGroceries')}</p>
                  </div>
                </div>

                {/* Form CTA */}
                <div className="text-center mt-10">
                  <a
                    href="#form-section"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {t('form.title')}
                    <ArrowDown className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-alt rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('roles.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('roles.title')}
              </h2>
              <p className="text-lg text-text-muted mb-8">
                {t('roles.description')}
              </p>

              <div className="space-y-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text">{role.title}</h3>
                      <p className="text-text-muted text-sm">{role.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/homepage/hero-center-team.jpg"
                  alt="Bénévoles en action"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section id="form-section" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('form.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                {t('form.title')}
              </h2>
              <p className="text-lg text-text-muted">
                {t('form.description')}
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-6 md:p-8">
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
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                          {t('form.firstName')} {t('form.required')}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.firstNamePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                          {t('form.lastName')} {t('form.required')}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formState.lastName}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.lastNamePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.emailPlaceholder')}
                        />
                      </div>
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
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder={t('form.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-3">
                        {t('form.availability')} {t('form.required')}
                      </label>
                      <p className="text-sm text-text-muted mb-4">
                        {t('form.availabilityHelp')}
                      </p>
                      <div className="space-y-3">
                        {DAYS.map(({ key, label }) => {
                          const slot = formState.availability[key];
                          return (
                            <div
                              key={key}
                              className={cn(
                                'rounded-xl border transition-all',
                                slot.enabled
                                  ? 'bg-primary/5 border-primary'
                                  : 'bg-white border-border'
                              )}
                            >
                              <label className="flex items-center gap-3 px-4 py-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={slot.enabled}
                                  onChange={() => handleDayToggle(key)}
                                  className="w-5 h-5 rounded text-primary focus:ring-primary"
                                />
                                <span className="font-medium text-text flex-1">{label}</span>
                              </label>
                              {slot.enabled && (
                                <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                                  <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">
                                      {t('form.startTime')}
                                    </label>
                                    <select
                                      value={slot.startTime}
                                      onChange={(e) => handleSlotTimeChange(key, 'startTime', e.target.value)}
                                      className="w-full px-3 py-2 rounded-lg bg-white border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    >
                                      {START_TIMES.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">
                                      {t('form.endTime')}
                                    </label>
                                    <select
                                      value={slot.endTime}
                                      onChange={(e) => handleSlotTimeChange(key, 'endTime', e.target.value)}
                                      className="w-full px-3 py-2 rounded-lg bg-white border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    >
                                      {END_TIMES.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-text mb-2">
                        {t('form.motivation')} {t('form.required')}
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        required
                        rows={4}
                        value={formState.motivation}
                        onChange={handleChange}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl resize-none',
                          'bg-white border border-border',
                          'text-text placeholder:text-text-muted',
                          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                          'transition-all duration-200'
                        )}
                        placeholder={t('form.motivationPlaceholder')}
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
