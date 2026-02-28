'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Heart, Building2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

const mainPartners = [
  { name: 'Moisson Montreal', logo: '/images/partners/moisson-montreal.webp' },
  { name: 'Centraide', logo: '/images/partners/donateur-centraide.webp' },
  { name: 'Croix Rouge', logo: '/images/partners/croix-rouge.webp' },
  { name: 'Tablee des Chefs', logo: '/images/partners/partn-tablee-des-chefs.webp' },
];

const partners = [
  { name: 'Regent', logo: '/images/partners/LOGO-REGENT.webp' },
  { name: 'Papillon', logo: '/images/partners/ODS-PAPILLON.webp' },
  { name: 'Ahuntsic', logo: '/images/partners/donateur-ahuntsic.webp' },
  { name: 'Bouthillette', logo: '/images/partners/donateur-bouthillette.webp' },
  { name: 'Jean Fortin', logo: '/images/partners/donateur-jean-fortin-2_edited.webp' },
  { name: 'Rechaud Bus', logo: '/images/partners/donateur-rechaud-bus.webp' },
  { name: 'Lantic', logo: '/images/partners/part-lantic.webp' },
  { name: 'Groupe Beaudry', logo: '/images/partners/partn-groupe-beaudry.webp' },
  { name: 'Partenaire 1', logo: '/images/partners/ods-2.webp' },
  { name: 'Partenaire 2', logo: '/images/partners/ods-3.webp' },
  { name: 'Partenaire 3', logo: '/images/partners/ods-4.webp' },
  { name: 'Partenaire 4', logo: '/images/partners/ods-5.webp' },
];

const partnershipBenefits = [
  {
    icon: Heart,
    title: 'Impact communautaire',
    description: 'Contribuez directement a la lutte contre l\'insecurite alimentaire dans votre communaute.',
  },
  {
    icon: Building2,
    title: 'Responsabilite sociale',
    description: 'Renforcez l\'engagement social de votre entreprise aupres de vos employes et clients.',
  },
  {
    icon: Handshake,
    title: 'Partenariat durable',
    description: 'Construisez une relation a long terme basee sur des valeurs communes de solidarite.',
  },
];

export default function PartenairesPage() {
  return (
    <>
      <PageHeader
        title="Nos Partenaires"
        subtitle="Ensemble"
        description="Grace a nos partenaires, nous pouvons aider des milliers de familles chaque annee"
        backgroundImage="/images/gallery/groceries.jpg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              L'Oeuvre des Samaritains est fiere de collaborer avec de nombreux partenaires
              qui partagent notre vision d'une communaute sans faim. Leur soutien nous permet
              de distribuer des milliers de paniers alimentaires chaque annee.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Partners */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              Partenaires principaux
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Nos collaborateurs majeurs
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
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
              Tous nos partenaires
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Une communaute de soutien
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Chaque partenaire contribue a notre mission de facon unique et precieuse.
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
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
              Pourquoi devenir partenaire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Les avantages d'un partenariat
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
              Devenir partenaire
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
                Interesss par un partenariat?
              </h2>
              <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                Que vous soyez une entreprise, un commerce ou un organisme, nous serions
                ravis de discuter des possibilites de collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg">
                  Nous contacter
                </Button>
                <Button href="tel:+15145235288" variant="outline" size="lg">
                  (514) 523-5288
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
