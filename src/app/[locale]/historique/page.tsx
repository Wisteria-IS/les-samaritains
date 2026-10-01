'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Link } from '@/i18n/routing';
import { DONATION_URL } from '@/lib/constants';

const historyImages = [
  '/images/history/hist-1B.jpg',
  '/images/history/hist-2.jpg',
  '/images/history/hist-3.jpg',
  '/images/history/hist-7.jpg',
  '/images/history/hist-14.jpg',
  '/images/history/hist-16.jpg',
  '/images/history/hist-17.jpg',
];

export default function HistoriquePage() {
  const t = useTranslations('history');
  const chapters = t.raw('chapters') as Array<{ year: string; title: string; content: string }>;

  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/food-sorting.jpg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              {t('intro')}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 bg-background-alt">
        <Container>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24 last:mb-0 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                </div>

                {/* Year badge - mobile */}
                <div className="md:hidden ml-10 mb-4">
                  <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    {chapter.year}
                  </span>
                </div>

                {/* Image */}
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src={historyImages[index] || historyImages[0]}
                      alt={chapter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:col-start-1 md:row-start-1'}`}>
                  {/* Year badge - desktop */}
                  <span className="hidden md:inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full mb-4">
                    {chapter.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                    {index + 1}. {chapter.title}
                  </h3>
                  <div className="text-text-muted leading-relaxed">
                    {chapter.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                {t('cta.volunteer')}
              </Link>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {t('cta.donate')}
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
