'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

export function MissionSection() {
  const { theme } = useTheme();
  const t = useTranslations('mission');
  const values = t.raw('values') as string[];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <span className="text-secondary font-medium text-base md:text-lg mb-3 md:mb-4 block">
            {t('subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 md:mb-6 leading-tight px-4">
            {t('title')}
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-3xl mx-auto px-4">
            {t('description')}
          </p>
        </FadeIn>

        {/* Two column layout with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/images/homepage/07-main-hall.jpeg"
                  alt={t('altFounders')}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Small overlapping image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-40 md:h-40 rounded-lg md:rounded-xl overflow-hidden border-4 border-white shadow-xl hidden sm:block"
              >
                <Image
                  src="/images/homepage/13-prix-moisson.jpeg"
                  alt={t('altHistory')}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-4 md:mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-6 md:mb-8">
              {t('paragraph2')}
            </p>

            {/* Values list */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2 md:gap-3">
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-text font-medium">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image gallery row - photos from our activities */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
            {[
              { src: '/images/homepage/06-team-christmas.jpeg', alt: t('altCommunity') },
              { src: '/images/homepage/14-selfie-team.jpeg', alt: t('altTeam') },
              { src: '/images/homepage/15-certificat-benevolat.jpeg', alt: t('altVolunteers') },
              { src: '/images/homepage/05-warehouse-view.jpeg', alt: t('altLocation') },
              { src: '/images/homepage/09-warehouse-wide.jpeg', alt: t('altLocation') },
              { src: '/images/homepage/10-warehouse-rows.jpeg', alt: t('altLocation') },
              { src: '/images/homepage/08-responsable-shelves.jpeg', alt: t('altVolunteers') },
              { src: '/images/homepage/11-donation-boxes.jpeg', alt: t('altCommunity') },
              { src: '/images/homepage/12-preparing-baskets.jpeg', alt: t('altTeam') },
            ].map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  'relative aspect-square rounded-lg md:rounded-xl overflow-hidden',
                  index >= 6 && 'hidden lg:block'
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
