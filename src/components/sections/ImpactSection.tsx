'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { CountUp } from '@/components/animations/CountUp';

const stats = [
  { value: 17000, suffix: '+', label: 'visites annuelles' },
  { value: 800, suffix: '', label: 'familles a Noel' },
  { value: 50, suffix: '+', label: 'benevoles actifs' },
  { value: 22, suffix: '', label: "annees d'experience" },
];

export function ImpactSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-28 bg-primary">
      <Container>
        <FadeIn className="text-center mb-10 md:mb-16">
          <span className="text-white/70 text-base md:text-lg font-medium mb-3 md:mb-4 block">
            Notre impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Des chiffres qui parlent
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Depuis 2002, nous travaillons sans relache pour faire une difference
            dans la vie des familles montrealaises.
          </p>
        </FadeIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-2">
                {isInView ? (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </>
                ) : (
                  '0'
                )}
              </div>
              <p className="text-sm md:text-lg text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image with quote */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12">
            <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/groceries.jpg"
                alt="Notre equipe"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-4 md:mb-6">
                "Chaque annee, nous distribuons des milliers de paniers alimentaires
                aux familles dans le besoin."
              </blockquote>
              <p className="text-sm md:text-base text-white/70">
                Notre mission est de nous assurer que personne ne souffre de la faim
                dans notre communaute.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
