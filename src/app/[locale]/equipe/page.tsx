'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

const administratorImages: (string | null)[] = [
  '/images/administrateurs/CHANTAL.png',
  '/images/administrateurs/KHAD.png',
  '/images/administrateurs/taoufiq.png',
  '/images/administrateurs/miguel-arevalo.png',
  '/images/administrateurs/julien-gob.png',
  null,
];

function initialsOf(name: string): string {
  return name
    .split(/[\s-]+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const volunteerImages: { src: string; zoom?: boolean }[] = [
  { src: '/images/benevoles/chantal.webp' },
  { src: '/images/benevoles/benevole-2.png' },
  { src: '/images/homepage/donation-family.jpg' },
  { src: '/images/homepage/equipe-families.jpg', zoom: true },
];

export default function EquipePage() {
  const t = useTranslations('team');
  const administrators = t.raw('administrators') as Array<{ name: string; role: string }>;
  const volunteerTasks = t.raw('volunteers.tasks') as string[];
  const ctaReasons = t.raw('cta.reasons') as string[];

  const stats = [
    { icon: Users, value: '50+', label: t('stats.volunteers') },
    { icon: Clock, value: '1000+', label: t('stats.hours') },
    { icon: Heart, value: '22', label: t('stats.years') },
    { icon: Award, value: '17000+', label: t('stats.families') },
  ];
  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/homepage/14-selfie-team.jpeg"
      />

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-white/70 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Administration */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('administration.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('administration.title')}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {t('administration.description')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {administrators.map((admin, index) => (
              <motion.div
                key={admin.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  {administratorImages[index] ? (
                    <Image
                      src={administratorImages[index]!}
                      alt={admin.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15">
                      <span className="text-5xl md:text-6xl font-bold text-primary/70">
                        {initialsOf(admin.name)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-text">{admin.name}</h3>
                <p className="text-text-muted">{admin.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteers */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('volunteers.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('volunteers.title')}
              </h2>
              <p className="text-lg text-text-muted mb-6">
                {t('volunteers.description1')}
              </p>
              <p className="text-lg text-text-muted mb-8">
                {t('volunteers.description2')}
              </p>

              <div className="space-y-4">
                {volunteerTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text">{task}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {volunteerImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      alt={`${t('volunteers.subtitle')} ${index + 1}`}
                      fill
                      className={image.zoom ? 'object-cover scale-[1.3]' : 'object-cover'}
                    />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t('cta.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg" className="bg-white text-secondary hover:bg-white/90">
                  {t('cta.volunteer')}
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {t('cta.learnMore')}
                </Button>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('cta.whyVolunteer')}
                </h3>
                <ul className="space-y-4">
                  {ctaReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
