'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, MapPin, FileText, Users, Calendar, CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';

const whoWeServe = [
  'Des familles avec des enfants',
  'Des personnes ayant un emploi, mais dont le salaire ne suffit pas a couvrir les depenses',
  'Des personnes recevant de la solidarite sociale ou de l\'assurance emploi',
  'Des personnes a mobilite reduite',
  'Les aines',
  'Les etudiants',
  'Les personnes monoparentales',
  'Les nouveaux arrivants',
  'References documentees des CLSC, hopitaux (sante mentale)',
  'Maisons d\'hebergement',
  'Maisons de transition',
];

const requirements = [
  {
    icon: FileText,
    title: 'Piece d\'identite',
    description: 'Une piece d\'identite avec photo valide',
  },
  {
    icon: MapPin,
    title: 'Preuve de residence',
    description: 'Facture, bail ou autre document prouvant votre adresse',
  },
  {
    icon: Users,
    title: 'Composition familiale',
    description: 'Nombre de personnes dans votre foyer',
  },
];

export default function PourQuiPage() {
  return (
    <>
      <PageHeader
        title="C'est pour qui?"
        subtitle="Nos services"
        description="Decouvrez qui peut beneficier de nos services d'aide alimentaire"
        backgroundImage="/images/gallery/helping.jpg"
      />

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/groceries.jpg"
                  alt="Distribution alimentaire"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                Qui a recours aux banques alimentaires?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Il n'existe pas de profil type unique
              </h2>
              <p className="text-lg text-text-muted mb-8">
                Les personnes aidees sont diverses et viennent de tous les horizons.
                Notre mission est d'aider toute personne dans le besoin, sans jugement.
              </p>

              <ul className="space-y-3">
                {whoWeServe.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              Documents requis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Ce qu'il vous faut pour vous inscrire
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Pour beneficier de nos services, veuillez apporter les documents suivants
              lors de votre premiere visite.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <req.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{req.title}</h3>
                <p className="text-text-muted">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule & Location */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <FadeIn>
              <div className="bg-primary rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Horaire de distribution</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Mardi</span>
                    <span className="text-white font-semibold">10h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Mercredi</span>
                    <span className="text-white font-semibold">10h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Jeudi</span>
                    <span className="text-white font-semibold">10h00 - 14h00</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Frequence</p>
                    <p className="text-white/70">Une visite par mois pour chaque famille inscrite</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Location */}
            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">Notre adresse</h3>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-text mb-2">3535 Avenue Papineau</p>
                  <p className="text-lg text-text mb-4">Montreal, QC H2K 4J9</p>
                  <p className="text-text-muted">
                    Accessible en transport en commun. Stationnement disponible sur place.
                  </p>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2511453!2d-73.5687!3d45.5267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a58c5f5b1b9%3A0x2b32f3c4a4b5c6d7!2s3535%20Av.%20Papineau%2C%20Montr%C3%A9al%2C%20QC%20H2K%204J9!5e0!3m2!1sfr!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location map"
                  />
                </div>
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
              Besoin d'aide alimentaire?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              N'hesitez pas a nous contacter pour plus d'informations ou venez nous
              visiter directement pendant nos heures d'ouverture.
            </p>
            <Button href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              Nous contacter
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
