'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';

export default function PresidentPage() {
  const t = useTranslations('president');

  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/hero/community.jpg"
      />

      {/* President Message Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* President Image */}
            <FadeIn className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/benevoles/chantal.webp"
                    alt="Chantal Plouffe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text">Chantal Plouffe</h3>
                  <p className="text-text-muted">{t('role')}</p>
                </div>
              </div>
            </FadeIn>

            {/* Message Content */}
            <FadeIn className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-text-muted leading-relaxed mb-8">
                  {t('greeting')}
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  {t('paragraph1')}
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  {t('paragraph2')}
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  {t('paragraph3')}
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  {t('paragraph4')}
                </p>

                <p className="text-text-muted leading-relaxed mb-8">
                  {t('paragraph5')}
                </p>

                <p className="text-text-muted leading-relaxed mb-2">
                  {t('closing')}
                </p>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-xl font-semibold text-text italic mb-1">
                    Chantal Plouffe
                  </p>
                  <p className="text-text-muted">
                    {t('role')}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn className="text-center max-w-4xl mx-auto">
            <svg className="w-16 h-16 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed mb-8">
              &quot;{t('quote')}&quot;
            </blockquote>
            <p className="text-white/70 text-lg">- Chantal Plouffe</p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
