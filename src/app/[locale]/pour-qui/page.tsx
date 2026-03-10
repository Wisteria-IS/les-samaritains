'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, MapPin, FileText, Users, Calendar, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

export default function PourQuiPage() {
  const t = useTranslations('forWho');
  const whoWeServeList = t.raw('whoWeServe.list') as string[];

  const requirements = [
    {
      icon: FileText,
      title: t('requirements.id.title'),
      description: t('requirements.id.description'),
    },
    {
      icon: MapPin,
      title: t('requirements.proof.title'),
      description: t('requirements.proof.description'),
    },
    {
      icon: Users,
      title: t('requirements.family.title'),
      description: t('requirements.family.description'),
    },
  ];
  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/helping.jpg"
      />

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/groceries.jpg"
                  alt={t('title')}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('whoWeServe.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('whoWeServe.title')}
              </h2>
              <p className="text-lg text-text-muted mb-8">
                {t('whoWeServe.description')}
              </p>

              <ul className="space-y-3">
                {whoWeServeList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('requirements.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('requirements.title')}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {t('requirements.description')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <req.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{req.title}</h3>
                <p className="text-text-muted">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule & Location */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <FadeIn>
              <div className="bg-primary rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('schedule.title')}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">{t('schedule.tuesday')}</span>
                    <span className="text-white font-semibold">{t('schedule.hours')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">{t('schedule.thursday')}</span>
                    <span className="text-white font-semibold">{t('schedule.hours')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">{t('schedule.friday')}</span>
                    <span className="text-white font-semibold">{t('schedule.hours')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t('schedule.frequency')}</p>
                    <p className="text-white/70">{t('schedule.frequencyText')}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Location */}
            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">{t('location.title')}</h3>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-text mb-2">{t('location.address')}</p>
                  <p className="text-lg text-text mb-4">{t('location.city')}</p>
                  <p className="text-text-muted">
                    {t('location.accessibility')}
                  </p>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8!2d-73.6548!3d45.5582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bc93c5d3e45%3A0x5e8f4b3c2d1a7f9e!2s9300%20Rue%20Lajeunesse%2C%20Montr%C3%A9al%2C%20QC%20H2M%201S4!5e0!3m2!1sfr!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location map"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Button href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              {t('cta.contact')}
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
