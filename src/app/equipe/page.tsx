'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

const administrators = [
  {
    name: 'Chantal Plouffe',
    role: 'Presidente et fondatrice',
    image: '/images/administrateurs/CHANTAL.png',
  },
  {
    name: 'Khad',
    role: 'Vice-president',
    image: '/images/administrateurs/KHAD.png',
  },
  {
    name: 'Membre du conseil',
    role: 'Administrateur',
    image: '/images/administrateurs/homme.png',
  },
];

const volunteers = [
  { image: '/images/benevoles/chantal.webp' },
  { image: '/images/benevoles/benevole-2.png' },
  { image: '/images/gallery/helping.jpg' },
  { image: '/images/gallery/food-sorting.jpg' },
];

const stats = [
  { icon: Users, value: '50+', label: 'Benevoles actifs' },
  { icon: Clock, value: '1000+', label: 'Heures de benevolat par mois' },
  { icon: Heart, value: '22', label: 'Annees de service' },
  { icon: Award, value: '17000+', label: 'Familles aidees par an' },
];

export default function EquipePage() {
  return (
    <>
      <PageHeader
        title="Notre Equipe"
        subtitle="Qui sommes-nous"
        description="Decouvrez les personnes devouees qui font vivre l'Oeuvre des Samaritains"
        backgroundImage="/images/team/team-bg.jpg"
      />

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Administration */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              Conseil d'administration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Notre equipe de direction
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Des personnes devouees qui guident notre mission et assurent
              le bon fonctionnement de l'organisme.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {administrators.map((admin, index) => (
              <motion.div
                key={admin.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={admin.image}
                    alt={admin.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-text">{admin.name}</h3>
                <p className="text-text-muted">{admin.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteers */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                Nos benevoles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Le coeur de notre mission
              </h2>
              <p className="text-lg text-text-muted mb-6">
                Nos benevoles sont le pilier de l'Oeuvre des Samaritains. Chaque semaine,
                des dizaines de personnes devouees donnent de leur temps pour aider
                les familles dans le besoin.
              </p>
              <p className="text-lg text-text-muted mb-8">
                Que ce soit pour le tri des denrees, l'accueil des beneficiaires ou
                la distribution alimentaire, nos benevoles travaillent avec compassion
                et dedition.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text">Accueil chaleureux des beneficiaires</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text">Tri et preparation des paniers alimentaires</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text">Distribution et aide au transport</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {volunteers.map((volunteer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={volunteer.image}
                      alt={`Benevole ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Rejoignez notre equipe de benevoles
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Vous souhaitez faire une difference dans votre communaute? Nous sommes
                toujours a la recherche de personnes devouees pour nous aider dans
                notre mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg" className="bg-white text-secondary hover:bg-white/90">
                  Devenir benevole
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Pourquoi devenir benevole?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    Faire une difference concrete dans la vie des familles
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    Rejoindre une communaute accueillante et solidaire
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    Developper de nouvelles competences
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </span>
                    Horaires flexibles adaptes a votre disponibilite
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
