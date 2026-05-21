'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

export function DistributionSection() {
  const { theme } = useTheme();
  const t = useTranslations('distribution');
  const documents = t.raw('documents.items') as string[];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background-alt">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <span className="text-secondary font-medium text-base md:text-lg mb-3 md:mb-4 block">
            {t('subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 md:mb-6 leading-tight px-4">
            {t('title')}
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-2xl mx-auto px-4">
            {t('description')}
          </p>
        </FadeIn>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Left - Image */}
          <FadeIn className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/homepage/arrange.jpg"
                alt={t('altCenter')}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right - Info */}
          <div className="lg:col-span-3 space-y-8">
            {/* Schedule */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-3">{t('schedule.title')}</h3>
                  <div className="space-y-2 text-text-muted">
                    <p>{t('schedule.tuesday')}: <span className="text-text font-medium">{t('schedule.hours')}</span></p>
                    <p>{t('schedule.thursday')}: <span className="text-text font-medium">{t('schedule.hours')}</span></p>
                    <p>{t('schedule.friday')}: <span className="text-text font-medium">{t('schedule.hours')}</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Address */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">{t('address.title')}</h3>
                  <p className="text-text-muted">
                    {t('address.street')}<br />
                    {t('address.city')}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Who */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">{t('who.title')}</h3>
                  <p className="text-text-muted">
                    {t('who.description')}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Frequency */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">{t('frequency.title')}</h3>
                  <p className="text-text-muted">
                    {t('frequency.description')}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Documents needed */}
            <FadeIn>
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-lg font-bold text-text mb-3">{t('documents.title')}</h3>
                <ul className="space-y-2 text-text-muted">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" href="/pour-qui">
                  {t('learnMore')}
                </Button>
                <Button variant="outline" size="lg" href="/contact">
                  {t('contactUs')}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
