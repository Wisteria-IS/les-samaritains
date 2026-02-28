'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Download, Users, Package, Calendar, Heart } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/animations/CountUp';

const yearlyStats = [
  { icon: Users, value: 15900, suffix: '', label: 'Visites totales' },
  { icon: Package, value: 15000, suffix: '', label: 'Visites épicerie' },
  { icon: Calendar, value: 900, suffix: '', label: "Situations d'urgence" },
  { icon: Heart, value: 800, suffix: '', label: 'Familles à Noël' },
];

const valeurs = [
  'Le respect',
  'La confiance',
  'La compassion',
  'La dignité',
  'La courtoisie',
  'La civilité',
];

export default function RapportPage() {
  return (
    <>
      <PageHeader
        title="Rapport d'activité"
        subtitle="Bilan annuel"
        description="RAPPORT ANNUEL 2024-2025"
        backgroundImage="/images/gallery/food-sorting.jpg"
      />

      {/* Stats Overview */}
      <section className="py-12 md:py-16 bg-primary">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {yearlyStats.map((stat, index) => (
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
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission et valeurs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                1. Mission et valeurs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-text-muted mb-6">
                La mission de L'Œuvre des Samaritains est de soutenir les personnes à faible revenu en leur
                donnant accès à un centre de distribution alimentaire. Le but de l'organisme est aussi d'offrir
                de l'écoute, de l'encouragement et d'orienter les personnes vers d'autres ressources et services
                du quartier qui pourraient les aider.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6">
                  Les valeurs véhiculées par nos bénévoles
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {valeurs.map((valeur, index) => (
                    <motion.div
                      key={valeur}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-text">{valeur}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Centre de distribution */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              L'Œuvre des Samaritains en 2024-2025
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Un coup d'œil statistique
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6">
                  2. Centre de distribution
                </h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Au cours de l'année, 900 cas de situation d'urgence (visites gratuites) et 15 000 visites pour
                    une épicerie, ont pu s'approvisionner à l'organisme, donc au total nous avons reçu <strong className="text-text">15 900 visites</strong> de
                    nos membres et non membres.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Depuis le début de l'année fiscal qui est au 30 juin 2025, il y a une augmentation
                    significative de nouveaux arrivants en situation d'urgence.</span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
                  <h4 className="font-bold text-secondary mb-2">Épicerie de Noël 2024</h4>
                  <p className="text-text-muted">
                    <strong className="text-text">800 familles</strong> ont été desservies sur une période de 5 jours.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/carousel/souhait-noel.png"
                  alt="Épicerie de Noël"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Profil des participants */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/history/rapport-graph.webp"
                  alt="Graphique du profil des participants"
                  fill
                  className="object-contain bg-white p-4"
                />
              </motion.div>
            </FadeIn>

            <FadeIn>
              <h3 className="text-2xl font-bold text-text mb-6">
                Le profil des participants 2024-2025
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-text">30%</strong> de nos bénéficiaires habitent en cohabitation, étant donné l'augmentation du coût de la vie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Durant l'année 2024-25: <strong className="text-text">30%</strong> des nouvelles inscriptions sont des nouveaux arrivants. Depuis la fin de
                  l'année 2024, le nombre de nouveaux arrivants en provenance d'Ukraine, l'Afrique et la Turquie
                  bénéficiant de la banque alimentaire a augmenté de manière significative.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>En tenant compte des situations d'urgence et des distributions de paniers de Noël:
                  Nous avons servi près de <strong className="text-text">17 000 visites gratuites</strong> depuis 2020.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>17 000 visites gratuites x le coût par visite de 7$ = <strong className="text-text">119 000$</strong> en visites gratuites redonnées aux plus démunis de notre communauté.</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Les Services */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Les Services de L'Œuvre des Samaritains 2024-2025
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {/* Service A */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                A) La distribution alimentaire en 2024-2025
              </h3>
              <p className="text-text-muted">
                En 2024-2025, nous avons reçu <strong className="text-text">17 000</strong> visites, une fois inscrit les participants recevront un panier de
                nourriture, assistés d'un bénévole. La distribution alimentaire de L'Œuvre des Samaritains se déroulait
                sous forme d'une épicerie communautaire depuis ses débuts. Pour faire face à la situation de la pandémie
                nous avons dû chambouler notre procédure de distribution pour répondre adéquatement aux règles
                sanitaires établies par la santé publique.
              </p>
            </motion.div>

            {/* Service B */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                B) Nous disons NON aux gaspillages alimentaires
              </h3>
              <p className="text-text-muted">
                Depuis 2007, l'organisme est soucieux de l'environnement car nous inspectons et transformons chaque
                produit périssable que Moisson Montréal nous envoie. Nous sommes donc engagés à offrir plus de
                produits propres à la consommation.
                Ce service est offert trois jours par semaine, soit le mardi, jeudi ainsi que le vendredi. Les aliments offerts
                par L'Œuvre des Samaritains sont triés, nettoyés et empaquetés. Offrir des denrées est important pour
                l'organisme. L'organisme désire servir sa clientèle avec respect et dignité.
              </p>
            </motion.div>

            {/* Service C */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                C) L'épicerie de Noël 2024
              </h3>
              <p className="text-text-muted">
                À l'occasion des fêtes de Noël 2024, notre organisme a eu le plaisir d'organiser une distribution alimentaire
                pour nos bénéficiaires. Grâce à un budget de <strong className="text-text">15 000$</strong>, nous avons pu acheter des produits essentiels tels
                que de la viande, du poulet, du riz, et du sucre.
              </p>
              <p className="text-text-muted mt-4">
                Cette initiative a été rendue possible grâce à la générosité de nos donateurs, qui ont également permis à
                nos bénéficiaires de choisir les articles qui leur étaient les plus utiles. Ce soutien a été crucial pour apporter
                un peu de réconfort et de chaleur à ceux qui en avaient le plus besoin en cette période de fête.
                Nous remercions chaleureusement tous ceux qui ont contribué à faire de cet événement un succès.
                <strong className="text-text"> 800 familles</strong> ont été desservies sur une période de six jours.
              </p>
            </motion.div>

            {/* Service D */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-4">
                D) L'Implication communautaire
              </h3>
              <p className="text-text-muted mb-4">
                <strong className="text-text">L'Œuvre des Samaritains</strong> est membre de:
              </p>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">o</span>
                  <span>La table de quartier multisectorielle d'Ahuntsic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">o</span>
                  <span>Chantier sécurité alimentaire de Solidarité Ahuntsic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">o</span>
                  <span>Table de sécurité alimentaire d'Ahuntsic</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Images */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/history/hist-3.jpg"
                alt="Étagère"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/carousel/groupesam.png"
                alt="Bénévoles"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src="/images/history/rapport-event.jpg"
                alt="Événement"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Download Report */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Rapport annuel 2024-2025</h3>
                <p className="text-text-muted mb-6">Télécharger le rapport complet en format PDF</p>
                <Button href="#" className="w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le rapport (PDF)
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Soutenez notre mission
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Votre don nous permet de continuer à aider les familles dans le besoin.
              Chaque contribution fait une différence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/don" size="lg" className="bg-white text-secondary hover:bg-white/90">
                Faire un don
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
