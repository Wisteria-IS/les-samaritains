'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Heart, Shield, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Modal } from '@/components/ui/Modal';

interface EpiceInfo {
  name: string;
  image: string;
  category: string;
  bienfaits: string;
  choisir: string;
  utilisation: string;
  conserver?: string;
}

const epices: EpiceInfo[] = [
  // Fines herbes
  {
    name: 'Coriandre',
    image: '/images/bienfaits/epices/coriandre.webp',
    category: 'Fines herbes',
    bienfaits: "Feuilles et graines sont un puissant bactéricide. Riche en calcium et magnésium. La coriandre aide à la digestion et possède des propriétés antioxydantes.",
    choisir: "Choisir des feuilles d'un vert vif, sans jaunissement ni flétrissement. L'odeur doit être fraîche et caractéristique.",
    utilisation: "Les feuilles fraîches s'ajoutent en fin de cuisson pour préserver leur arôme. Les graines peuvent être utilisées entières ou moulues dans les marinades et les currys.",
    conserver: "Conserver les feuilles au réfrigérateur enveloppées dans un papier humide. Les graines se conservent plusieurs mois dans un contenant hermétique.",
  },
  {
    name: 'Menthe',
    image: '/images/bienfaits/epices/menthe.jpg',
    category: 'Fines herbes',
    bienfaits: "La menthe est digestive et antiseptique, elle lutte contre les gaz intestinaux et peut avoir une action analgésique et vermifuge. Elle rafraîchit l'haleine et apaise les maux de tête.",
    choisir: "Choisir des feuilles d'un vert brillant, fermes et parfumées. Éviter les feuilles flétries ou tachées.",
    utilisation: "Parfaite dans les thés, les salades, les desserts et les sauces. S'ajoute fraîche en fin de préparation pour conserver son arôme.",
    conserver: "Se conserve quelques jours au réfrigérateur dans un verre d'eau. Peut être séchée ou congelée.",
  },
  {
    name: 'Sauge',
    image: '/images/bienfaits/epices/sauge.jpg',
    category: 'Fines herbes',
    bienfaits: "La sauge est malheureusement souvent délaissée dans la cuisine moderne. C'est pourtant un tonique général qui stimule la digestion ainsi que le foie. Cette plante est donc parfaite pour vous aider à digérer les repas un peu trop gras ou trop lourds.",
    choisir: "Les feuilles doivent être d'un vert grisâtre velouté, sans taches brunes. L'arôme doit être puissant et légèrement camphré.",
    utilisation: "Excellente avec les viandes grasses (porc, canard), les légumineuses et les plats mijotés. Utiliser avec parcimonie car son goût est puissant.",
    conserver: "Se conserve fraîche quelques jours au réfrigérateur. Se sèche très bien et conserve ses propriétés.",
  },
  {
    name: 'Thym',
    image: '/images/bienfaits/epices/thym.jpg',
    category: 'Fines herbes',
    bienfaits: "Le thym, symbole de plats ensoleillés, est un très puissant antibiotique naturel et est aussi vermifuge et antistress, combattant à la fois angoisses et insomnie. Il aide à lutter contre les infections respiratoires.",
    choisir: "Les tiges doivent être souples avec des feuilles d'un vert foncé. L'arôme doit être prononcé.",
    utilisation: "Incontournable dans le bouquet garni, il accompagne viandes, poissons, légumes et sauces tomate. Peut être ajouté en début de cuisson.",
    conserver: "Frais, se conserve une semaine au réfrigérateur. Se sèche facilement et garde son arôme plusieurs mois.",
  },
  {
    name: 'Persil',
    image: '/images/bienfaits/epices/fines-herbes.png',
    category: 'Fines herbes',
    bienfaits: "Le persil est riche en vitamines C, K et en fer. Il aide à la digestion, rafraîchit l'haleine et possède des propriétés diurétiques.",
    choisir: "Choisir des bouquets aux feuilles d'un vert vif, sans jaunissement. Les tiges doivent être fermes.",
    utilisation: "Ajouter frais en fin de cuisson pour préserver ses vitamines. Essentiel dans le taboulé, les sauces et comme garniture.",
    conserver: "Se conserve une semaine au réfrigérateur dans un verre d'eau couvert d'un sac plastique.",
  },
  // Épices
  {
    name: 'Cumin',
    image: '/images/bienfaits/epices/cumin.jpg',
    category: 'Épices',
    bienfaits: "Le cumin permet de réduire les ballonnements ainsi que les spasmes intestinaux. Lorsqu'arrive le plateau de fromages, allez vite chercher le cumin, car il aide nettement à mieux les digérer.",
    choisir: "Les graines doivent être d'un brun uniforme et très aromatiques. En poudre, vérifier la date de péremption.",
    utilisation: "Indispensable dans les cuisines mexicaine, indienne et nord-africaine. Excellent avec les légumineuses, les viandes et les légumes rôtis.",
    conserver: "Les graines entières se conservent jusqu'à un an dans un contenant hermétique à l'abri de la lumière.",
  },
  {
    name: 'Curcuma',
    image: '/images/bienfaits/epices/curcuma.webp',
    category: 'Épices',
    bienfaits: "Le curcuma semble idéal pour réduire le syndrome de l'intestin irritable et stimule la vésicule biliaire. Bénéfique en cas de maladie d'Alzheimer - une étude in vitro a montré que le curcuma détruisait et empêchait la formation de dépôts de protéines bêta-amyloïdes. Possédant des propriétés antioxydantes, anti-inflammatoires et antiseptiques, il purifie la peau comme le sang et est excellent pour le foie.",
    choisir: "En poudre, la couleur doit être d'un jaune-orange vif. Frais, la racine doit être ferme et sans moisissure.",
    utilisation: "Utilisé dans les currys, le riz, les soupes et les smoothies. Associer avec du poivre noir pour améliorer son absorption.",
    conserver: "La poudre se conserve 6 mois à l'abri de la lumière. La racine fraîche se conserve au réfrigérateur ou peut être congelée.",
  },
  {
    name: 'Gingembre',
    image: '/images/bienfaits/epices/gingembre.jpg',
    category: 'Épices',
    bienfaits: "Le gingembre a des propriétés anti-inflammatoires, antioxydantes, analgésiques, antitussives, hypotensives et antipyrétiques. Facilite la digestion, mais peut irriter le tube digestif s'il est consommé avec excès. Prévient les nausées et les vomissements. Aurait également des qualités en cas de fièvre. Stimule la dissolution des caillots sanguins.",
    choisir: "La racine fraîche doit être ferme, avec une peau lisse et sans moisissure. En poudre, vérifier la date de fraîcheur.",
    utilisation: "Frais râpé dans les sautés, marinades, thés et desserts. La poudre s'utilise en pâtisserie et dans les mélanges d'épices.",
    conserver: "La racine fraîche se conserve plusieurs semaines au réfrigérateur ou peut être congelée et râpée au besoin.",
  },
  {
    name: 'Muscade',
    image: '/images/bienfaits/epices/muscade.webp',
    category: 'Épices',
    bienfaits: "La muscade va, elle aussi, vous aider à digérer plus spécifiquement les féculents et les viandes grasses. La médecine traditionnelle indienne utilise cette noix pour calmer les diarrhées, les maux de gorge et les nausées.",
    choisir: "Préférer la noix entière à la poudre pour une saveur plus intense. Elle doit être lourde et sans fissures.",
    utilisation: "À râper fraîchement au-dessus des plats: béchamel, purées, gratins, desserts. Une petite quantité suffit car son goût est puissant.",
    conserver: "La noix entière se conserve plusieurs années. Une fois râpée, utiliser rapidement car elle perd vite son arôme.",
  },
];

const categories = [
  { name: 'Fines herbes', description: 'Les fines herbes fraîches apportent saveur et bienfaits à vos plats tout en facilitant la digestion.' },
  { name: 'Épices', description: 'Les épices sont de véritables trésors de santé, riches en antioxydants et en propriétés médicinales.' },
];

const benefits = [
  {
    icon: Heart,
    title: 'Digestion facilitée',
    description: 'Les herbes et épices aident à digérer les repas copieux.',
  },
  {
    icon: Shield,
    title: 'Propriétés médicinales',
    description: 'De nombreuses épices ont des vertus antibactériennes et anti-inflammatoires.',
  },
  {
    icon: Sparkles,
    title: 'Saveurs naturelles',
    description: 'Elles permettent de réduire le sel et le sucre tout en rehaussant les goûts.',
  },
];

export default function EpicesPage() {
  const [selectedEpice, setSelectedEpice] = useState<EpiceInfo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredEpices = activeCategory
    ? epices.filter(e => e.category === activeCategory)
    : epices;

  return (
    <>
      <PageHeader
        title="Fines Herbes et Épices"
        subtitle="Bienfaits"
        description="Découvrez les bienfaits des herbes et épices que nous distribuons"
        backgroundImage="/images/bienfaits/epices/fines-herbes.png"
      />

      {/* Back Link */}
      <section className="py-6 bg-white border-b border-border">
        <Container>
          <Link
            href="/bienfaits"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux bienfaits
          </Link>
        </Container>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi utiliser les herbes et épices?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Les fines herbes et épices ne sont pas seulement des exhausteurs de goût,
              elles possèdent aussi de nombreuses propriétés bénéfiques pour la santé.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-alt rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background-alt border-b border-border">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-primary/10'
              }`}
            >
              Tout voir
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-primary text-white'
                    : 'bg-white text-text hover:bg-primary/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          {activeCategory && (
            <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
              {categories.find(c => c.name === activeCategory)?.description}
            </p>
          )}
        </Container>
      </section>

      {/* Epices Grid */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos herbes et épices disponibles
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Cliquez sur une herbe ou épice pour découvrir ses bienfaits et conseils d'utilisation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEpices.map((epice, index) => (
              <motion.div
                key={epice.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedEpice(epice)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={epice.image}
                    alt={epice.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-text">
                    {epice.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-text mb-1">{epice.name}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{epice.bienfaits.substring(0, 60)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-green-600">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conseil d'utilisation
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Les herbes fraîches s'ajoutent généralement en fin de cuisson pour préserver leurs arômes.
              Les épices, quant à elles, peuvent être ajoutées en début de cuisson pour développer
              leur plein potentiel de saveur.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedEpice}
        onClose={() => setSelectedEpice(null)}
        size="lg"
      >
        {selectedEpice && (
          <div>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedEpice.image}
                alt={selectedEpice.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-text mb-2">
                  {selectedEpice.category}
                </span>
                <h2 className="text-3xl font-bold text-white">{selectedEpice.name}</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Ses bienfaits</h3>
                <p className="text-text-muted">{selectedEpice.bienfaits}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Comment la choisir</h3>
                <p className="text-text-muted">{selectedEpice.choisir}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Utilisation en cuisine</h3>
                <p className="text-text-muted">{selectedEpice.utilisation}</p>
              </div>
              {selectedEpice.conserver && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Conservation</h3>
                  <p className="text-text-muted">{selectedEpice.conserver}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
