'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Apple, Carrot, Drumstick, Leaf } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';

const categories = [
  {
    title: 'Les Fruits',
    description: 'Decouvrez les bienfaits des fruits frais que nous distribuons.',
    icon: Apple,
    href: '/bienfaits/fruits',
    image: '/images/bienfaits/fruits/fraises.jpg',
    color: 'bg-red-500',
  },
  {
    title: 'Les Legumes',
    description: 'Les legumes sont essentiels pour une alimentation equilibree.',
    icon: Carrot,
    href: '/bienfaits/legumes',
    image: '/images/bienfaits/legumes/carottes.jpg',
    color: 'bg-orange-500',
  },
  {
    title: 'Les Viandes',
    description: 'Sources de proteines importantes pour la sante.',
    icon: Drumstick,
    href: '/bienfaits/viandes',
    image: '/images/bienfaits/viandes/volaille.jpg',
    color: 'bg-amber-700',
  },
  {
    title: 'Fines Herbes et Epices',
    description: 'Ajoutez de la saveur et des bienfaits a vos repas.',
    icon: Leaf,
    href: '/bienfaits/epices',
    image: '/images/bienfaits/epices/fines-herbes.png',
    color: 'bg-green-600',
  },
];

export default function BienfaitsPage() {
  return (
    <>
      <PageHeader
        title="Les Bienfaits"
        subtitle="Nutrition"
        description="Decouvrez les bienfaits nutritionnels des aliments que nous distribuons"
        backgroundImage="/images/food/vegetables-hd.jpg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              A l'Oeuvre des Samaritains, nous croyons que l'alimentation est la base
              d'une bonne sante. Decouvrez les bienfaits nutritionnels des differents
              aliments que nous distribuons chaque semaine aux familles.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-text-muted">{category.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conseils nutritionnels
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Quelques conseils pour profiter au maximum des aliments que vous recevez.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Variete',
                description: 'Mangez une variete d\'aliments pour obtenir tous les nutriments necessaires.',
              },
              {
                title: 'Fraicheur',
                description: 'Consommez les fruits et legumes frais rapidement pour maximiser leurs bienfaits.',
              },
              {
                title: 'Preparation',
                description: 'Privilegiez la cuisson a la vapeur ou au four pour preserver les nutriments.',
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-white/70">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
