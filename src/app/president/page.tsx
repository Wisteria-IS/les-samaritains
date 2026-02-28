'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';

export default function PresidentPage() {
  return (
    <>
      <PageHeader
        title="Mot de la Presidente"
        subtitle="Notre vision"
        description="Un message de notre fondatrice et presidente, Chantal Plouffe"
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
                    alt="Chantal Plouffe, Presidente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text">Chantal Plouffe</h3>
                  <p className="text-text-muted">Presidente et fondatrice</p>
                </div>
              </div>
            </FadeIn>

            {/* Message Content */}
            <FadeIn className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-text-muted leading-relaxed mb-8">
                  Chers amis et partenaires de l'Oeuvre des Samaritains,
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  Depuis plus de 20 ans, notre organisme s'est donne pour mission d'aider les personnes
                  et les familles a faible revenu de notre communaute. Ce qui a commence comme un geste
                  de reconnaissance envers ceux qui nous ont aides dans nos moments difficiles est devenu
                  une veritable oeuvre de solidarite.
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  Chaque semaine, nous accueillons des centaines de familles dans notre centre de
                  distribution alimentaire. Plus qu'un simple service de depannage, nous offrons un
                  espace de bienveillance ou chacun est traite avec dignite et respect.
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  Notre equipe de benevoles devoues travaille sans relache pour s'assurer que personne
                  ne soit laisse pour compte. Ensemble, nous croyons fermement en la puissance de
                  l'entraide et de la solidarite communautaire.
                </p>

                <p className="text-text-muted leading-relaxed mb-6">
                  L'Oeuvre des Samaritains, c'est plus qu'une banque alimentaire. C'est une famille
                  qui accueille, qui ecoute et qui soutient. Chaque don, chaque heure de benevolat,
                  chaque geste de generosite contribue a faire une difference concrete dans la vie
                  de nos beneficiaires.
                </p>

                <p className="text-text-muted leading-relaxed mb-8">
                  Je vous invite a decouvrir notre histoire, a rencontrer notre equipe et a vous
                  joindre a nous dans cette belle mission. Ensemble, nous pouvons nourrir l'espoir
                  et batir une communaute plus solidaire.
                </p>

                <p className="text-text-muted leading-relaxed mb-2">
                  Avec toute ma gratitude,
                </p>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-xl font-semibold text-text italic mb-1">
                    Chantal Plouffe
                  </p>
                  <p className="text-text-muted">
                    Presidente et fondatrice
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
              "Nous croyons fermement que personne ne devrait souffrir de la faim dans notre communaute.
              Chaque geste de generosite fait une difference."
            </blockquote>
            <p className="text-white/70 text-lg">- Chantal Plouffe</p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
