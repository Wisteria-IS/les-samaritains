'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Download, Users, Package, Calendar, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/animations/CountUp';
import { BeneficiaryChart } from '@/components/charts/BeneficiaryChart';
import { DONATION_URL } from '@/lib/constants';

export default function RapportPage() {
  const t = useTranslations('report');

  const yearlyStats = [
    { icon: Users, value: 15900, suffix: '', label: t('stats.totalVisits') },
    { icon: Package, value: 15000, suffix: '', label: t('stats.groceryVisits') },
    { icon: Calendar, value: 900, suffix: '', label: t('stats.emergencies') },
    { icon: Heart, value: 800, suffix: '', label: t('stats.christmasFamilies') },
  ];

  const valeurs = t.raw('mission.values') as string[];

  const communityList = t.raw('services.communityList') as string[];

  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/food-sorting.jpg"
      />

      {/* Stats Overview */}
      <section className="py-12 md:py-16 bg-primary">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {yearlyStats.map((stat, index) => (
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
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission et valeurs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('mission.sectionTitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-text-muted mb-6">
                {t('mission.description')}
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6">
                  {t('mission.valuesTitle')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {valeurs.map((valeur, index) => (
                    <motion.div
                      key={valeur}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-text">{valeur}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Centre de distribution */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('overview.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('overview.title')}
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6">
                  {t('overview.sectionTitle')}
                </h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t('overview.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t('overview.point2')}</span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
                  <h4 className="font-bold text-secondary mb-2">{t('overview.christmasTitle')}</h4>
                  <p className="text-text-muted">
                    {t('overview.christmasText')}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/carousel/souhait-noel.png"
                  alt="Christmas Grocery"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Profil des participants */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BeneficiaryChart />

            <FadeIn>
              <h3 className="text-2xl font-bold text-text mb-6">
                {t('profile.title')}
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{t('profile.point1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{t('profile.point2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{t('profile.point3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{t('profile.point4')}</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Les Services */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('services.title')}
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {/* Service A */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                {t('services.distributionTitle')}
              </h3>
              <p className="text-text-muted">
                {t('services.distributionText')}
              </p>
            </motion.div>

            {/* Service B */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                {t('services.wasteTitle')}
              </h3>
              <p className="text-text-muted">
                {t('services.wasteText')}
              </p>
            </motion.div>

            {/* Service C */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                {t('services.christmasTitle')}
              </h3>
              <p className="text-text-muted">
                {t('services.christmasText1')}
              </p>
              <p className="text-text-muted mt-4">
                {t('services.christmasText2')}
              </p>
            </motion.div>

            {/* Service D */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                {t('services.communityTitle')}
              </h3>
              <p className="text-text-muted mb-4">
                {t('services.communityIntro')}
              </p>
              <ul className="space-y-2 text-text-muted">
                {communityList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary font-bold">o</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Images */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/homepage/rapport-distribution.jpg"
                alt="Centre de distribution"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/homepage/rapport-pantry.jpg"
                alt="Garde-manger approvisionné"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/homepage/rapport-sorting.jpg"
                alt="Tri des dons alimentaires"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Download Report */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{t('download.title')}</h3>
                <p className="text-text-muted mb-6">{t('download.description')}</p>
                <Button href="#" className="w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  {t('download.button')}
                </Button>
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
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={DONATION_URL} external size="lg" className="bg-white text-secondary hover:bg-white/90">
                {t('cta.donate')}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {t('cta.contact')}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
