'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

const mainPartners = [
  { name: 'Jean Fortin et associés', logo: '/images/partners/jean-fortin-logo.jpeg' },
  { name: 'Moisson Montréal', logo: '/images/partners/moisson-montreal.webp' },
  { name: 'Croix Rouge', logo: '/images/partners/croix-rouge.webp' },
  { name: 'Ahuntsic', logo: '/images/partners/donateur-ahuntsic.webp' },
];

const otherPartners = [
  { name: 'Tablee des Chefs', logo: '/images/partners/partn-tablee-des-chefs.webp' },
  { name: 'Groupe Beaudry', logo: '/images/partners/partn-groupe-beaudry.webp' },
  { name: 'Lantic', logo: '/images/partners/part-lantic.webp' },
  { name: 'Rechaud Bus', logo: '/images/partners/donateur-rechaud-bus.webp' },
  { name: 'Bouthillette', logo: '/images/partners/donateur-bouthillette.webp' },
  { name: 'ODS 4', logo: '/images/partners/ods-4.webp' },
  { name: 'ODS 5', logo: '/images/partners/ods-5.webp' },
];

const compensatoryPartners = [
  { name: 'YMCA', logo: '/images/partners/ymca.jpeg', hasLogo: true },
  { name: "L'OPEX", logo: '/images/partners/opex.png', hasLogo: true, description: "Conseillers en orientation pour ex-détenus" },
  { name: 'CCC Martineau', logo: null, hasLogo: false, description: 'Centre de transition' },
  { name: 'Centre de réinsertion Saucier', logo: null, hasLogo: false, description: 'Centre de transition' },
];

export function PartnersSection() {
  const { theme } = useTheme();
  const t = useTranslations('partnersHome');

  return (
    <section className="py-20 lg:py-28 bg-background-alt">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium text-lg mb-4 block">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {t('description')}
          </p>
        </FadeIn>

        {/* Main Partners */}
        <FadeIn className="mb-16">
          <p className="text-center text-sm uppercase tracking-wider text-text-muted mb-8">
            {t('mainPartners')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {mainPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative w-32 h-20 lg:w-40 lg:h-24 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Other Partners Grid */}
        <FadeIn className="mb-16">
          <p className="text-center text-sm uppercase tracking-wider text-text-muted mb-8">
            {t('otherPartners')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {otherPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="relative w-20 h-14 lg:w-28 lg:h-18 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Compensatory Work Partners */}
        <FadeIn>
          <p className="text-center text-sm uppercase tracking-wider text-text-muted mb-8">
            {t('compensatoryPartners')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {compensatoryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] shadow-sm"
              >
                {partner.hasLogo && partner.logo ? (
                  <div className="relative w-full h-16 mb-2">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <span className="text-base font-bold text-text">{partner.name}</span>
                  </div>
                )}
                {partner.description && (
                  <p className="text-xs text-text-muted">{partner.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center mt-16">
          <p className="text-text-muted mb-6">
            {t('becomePartner')}
          </p>
          <Button size="lg" href="/contact">
            {t('becomePartnerButton')}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
