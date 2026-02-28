'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export function MissionSection() {
  const { theme } = useTheme();

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <span className="text-secondary font-medium text-base md:text-lg mb-3 md:mb-4 block">
            Notre mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 md:mb-6 leading-tight px-4">
            Nourrir et inspirer notre communaute
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-3xl mx-auto px-4">
            Notre mission va au-dela de la simple distribution alimentaire. Nous nous
            engageons a soutenir les personnes a faible revenu en leur offrant bien plus
            qu'un repas.
          </p>
        </FadeIn>

        {/* Two column layout with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/images/history/hist-2.jpg"
                  alt="Les fondateurs de l'Oeuvre"
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
                  src="/images/history/hist-1B.jpg"
                  alt="Notre histoire"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-4 md:mb-6">
              En accedant a notre centre de distribution alimentaire, nos beneficiaires
              decouvrent un espace de bienveillance et de partage. Nous croyons fermement
              en la puissance de l'ecoute, de l'encouragement et de la solidarite.
            </p>
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-6 md:mb-8">
              Chaque semaine, nous accueillons des centaines de familles avec le sourire.
              Notre equipe de benevoles devoues travaille sans relache pour que personne
              ne soit laisse pour compte.
            </p>

            {/* Values list */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {['Compassion', 'Respect', 'Dignite', 'Solidarite'].map((value) => (
                <div key={value} className="flex items-center gap-2 md:gap-3">
                  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-text font-medium">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image gallery row - photos from our history */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden">
              <Image
                src="/images/history/hist-3.jpg"
                alt="Service a la communaute"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden">
              <Image
                src="/images/history/hist-7.jpg"
                alt="Notre local"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden hidden md:block">
              <Image
                src="/images/history/hist-14.jpg"
                alt="Benevoles en action"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden hidden md:block">
              <Image
                src="/images/history/hist-17.jpg"
                alt="Notre equipe aujourd'hui"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
