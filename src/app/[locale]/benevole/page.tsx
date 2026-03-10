'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Clock, Users, Award, Send, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function BenevolePage() {
  const t = useTranslations('volunteer');
  const roles = t.raw('roles.list') as Array<{ title: string; description: string }>;
  const availabilityOptions = t.raw('form.availabilityOptions') as Array<{ value: string; label: string }>;

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
    availability: [] as string[],
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAvailabilityChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter(v => v !== value)
        : [...prev.availability, value],
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
                  src="/images/gallery/food-sorting.jpg"
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
      <section className="py-16 md:py-24 bg-white">
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
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availabilityOptions.map((option) => (
                          <label
                            key={option.value}
                            className={cn(
                              'flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all',
                              formState.availability.includes(option.value)
                                ? 'bg-primary text-white'
                                : 'bg-white border border-border hover:border-primary'
                            )}
                          >
                            <input
                              type="checkbox"
                              checked={formState.availability.includes(option.value)}
                              onChange={() => handleAvailabilityChange(option.value)}
                              className="sr-only"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
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
