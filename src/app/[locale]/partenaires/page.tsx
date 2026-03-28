'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Heart, Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

const mainPartners = [
  { name: 'Moisson Montréal', logo: '/images/partners/moisson-montreal.webp' },
  { name: 'Croix-Rouge', logo: '/images/partners/croix-rouge.webp' },
  { name: 'La Tablée des Chefs', logo: '/images/partners/partn-tablee-des-chefs.webp' },
];

const partners = [
  { name: 'Jean Fortin', logo: '/images/partners/donateur-jean-fortin-2_edited.webp' },
  { name: 'Régent', logo: '/images/partners/LOGO-REGENT.webp' },
  { name: 'Papillon', logo: '/images/partners/ODS-PAPILLON.webp' },
  { name: 'Ahuntsic', logo: '/images/partners/donateur-ahuntsic.webp' },
  { name: 'Bouthillette', logo: '/images/partners/donateur-bouthillette.webp' },
  { name: 'Réchaud-Bus', logo: '/images/partners/donateur-rechaud-bus.webp' },
  { name: 'Lantic', logo: '/images/partners/part-lantic.webp' },
  { name: 'Groupe Beaudry', logo: '/images/partners/partn-groupe-beaudry.webp' },
  { name: 'Partenaire 1', logo: '/images/partners/ods-2.webp' },
  { name: 'Partenaire 2', logo: '/images/partners/ods-3.webp' },
  { name: 'Partenaire 3', logo: '/images/partners/ods-4.webp' },
  { name: 'Partenaire 4', logo: '/images/partners/ods-5.webp' },
];

export default function PartenairesPage() {
  const t = useTranslations('partners');

  const partnershipBenefits = [
    {
      icon: Heart,
      title: t('benefits.community'),
      description: t('benefits.communityDesc'),
    },
    {
      icon: Building2,
      title: t('benefits.social'),
      description: t('benefits.socialDesc'),
    },
    {
      icon: Handshake,
      title: t('benefits.partnership'),
      description: t('benefits.partnershipDesc'),
    },
  ];
  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/groceries.jpg"
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

      {/* Main Partners */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('mainPartners')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t('mainPartnersTitle')}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-[3/2]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Partners Grid */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('allPartners')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('allPartnersTitle')}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {t('allPartnersDesc')}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background-alt rounded-xl p-6 flex items-center justify-center aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-white/70 font-medium text-lg mb-4 block">
              {t('whyPartner')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('benefitsTitle')}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <FadeIn className="text-center">
            <Button href="/contact" size="lg" className="bg-white text-primary hover:bg-white/90">
              {t('becomePartner')}
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <FadeIn>
              <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                {t('interested')}
              </h2>
              <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                {t('interestedDesc')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg">
                  {t('contactUs')}
                </Button>
                <Button href="tel:+15143884095" variant="outline" size="lg">
                  514 388 4095
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
