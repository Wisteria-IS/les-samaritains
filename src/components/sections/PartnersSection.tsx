'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

const mainPartners = [
  { name: 'Moisson Montreal', logo: '/images/partners/moisson-montreal.webp' },
  { name: 'Croix Rouge', logo: '/images/partners/croix-rouge.webp' },
  { name: 'Centraide', logo: '/images/partners/donateur-centraide.webp' },
  { name: 'Ahuntsic', logo: '/images/partners/donateur-ahuntsic.webp' },
];

const otherPartners = [
  { name: 'Tablee des Chefs', logo: '/images/partners/partn-tablee-des-chefs.webp' },
  { name: 'Groupe Beaudry', logo: '/images/partners/partn-groupe-beaudry.webp' },
  { name: 'Lantic', logo: '/images/partners/part-lantic.webp' },
  { name: 'Rechaud Bus', logo: '/images/partners/donateur-rechaud-bus.webp' },
  { name: 'Jean Fortin', logo: '/images/partners/donateur-jean-fortin-2_edited.webp' },
  { name: 'Bouthillette', logo: '/images/partners/donateur-bouthillette.webp' },
  { name: 'ODS 4', logo: '/images/partners/ods-4.webp' },
  { name: 'ODS 5', logo: '/images/partners/ods-5.webp' },
];

export function PartnersSection() {
  const { theme } = useTheme();

  return (
    <section className="py-20 lg:py-28 bg-background-alt">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium text-lg mb-4 block">
            Partenaires
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
            Ensemble, nous sommes plus forts
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Nos partenaires jouent un role essentiel dans notre mission.
          </p>
        </FadeIn>

        {/* Main Partners */}
        <FadeIn className="mb-16">
          <p className="text-center text-sm uppercase tracking-wider text-text-muted mb-8">
            Partenaires Principaux
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
        <FadeIn>
          <p className="text-center text-sm uppercase tracking-wider text-text-muted mb-8">
            Autres Partenaires
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

        {/* CTA */}
        <FadeIn className="text-center mt-16">
          <p className="text-text-muted mb-6">
            Vous souhaitez devenir partenaire?
          </p>
          <Button size="lg" href="/contact">
            Devenir partenaire
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
