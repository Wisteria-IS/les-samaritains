'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

export function DistributionSection() {
  const { theme } = useTheme();

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background-alt">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <span className="text-secondary font-medium text-base md:text-lg mb-3 md:mb-4 block">
            Distribution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 md:mb-6 leading-tight px-4">
            Comment ca fonctionne
          </h2>
          <p className="text-base md:text-xl text-text-muted max-w-2xl mx-auto px-4">
            Notre centre de distribution alimentaire accueille les familles dans
            un environnement chaleureux et respectueux.
          </p>
        </FadeIn>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Left - Image */}
          <FadeIn className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/food-sorting.jpg"
                alt="Centre de distribution"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right - Info */}
          <div className="lg:col-span-3 space-y-8">
            {/* Schedule */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-3">Horaire</h3>
                  <div className="space-y-2 text-text-muted">
                    <p>Mardi: <span className="text-text font-medium">10h00 - 14h00</span></p>
                    <p>Mercredi: <span className="text-text font-medium">10h00 - 14h00</span></p>
                    <p>Jeudi: <span className="text-text font-medium">10h00 - 14h00</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Address */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">Adresse</h3>
                  <p className="text-text-muted">
                    3535 Avenue Papineau<br />
                    Montreal, QC H2K 4J9
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Who */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">Pour qui?</h3>
                  <p className="text-text-muted">
                    Personnes et familles a faible revenu residant a Montreal.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Frequency */}
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">Frequence</h3>
                  <p className="text-text-muted">
                    Une visite par mois pour chaque famille inscrite.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Documents needed */}
            <FadeIn>
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-lg font-bold text-text mb-3">Documents requis</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Piece d'identite avec photo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Preuve de residence (facture, bail)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Preuve de revenu (si disponible)
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" href="/pour-qui">
                  En savoir plus
                </Button>
                <Button variant="outline" size="lg" href="/contact">
                  Nous contacter
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
