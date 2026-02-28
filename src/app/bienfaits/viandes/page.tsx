'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Drumstick, Dumbbell, Brain, Heart } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Modal } from '@/components/ui/Modal';

interface ViandeInfo {
  name: string;
  image: string;
  category: string;
  bienfaits: string;
  choisir: string;
  conserver: string;
  cuisiner?: string;
}

const viandes: ViandeInfo[] = [
  // Viande rouge
  {
    name: 'Bœuf',
    image: '/images/bienfaits/viandes/boeufs.jpeg',
    category: 'Viande rouge',
    bienfaits: "Du fait de sa grande quantité de protéines, le bœuf est tout à fait recommandé pour une alimentation équilibrée. La viande rouge contient des protéines et du fer, deux nutriments nécessaires pour conserver une bonne santé, produire des anticorps, protéger le système immunitaire, et éviter des maladies comme l'anémie. Elle contient également des vitamines B et D, du sélénium et du zinc.",
    choisir: "Lorsque vous choisissez de la viande de bœuf, assurez-vous qu'elle soit bien rouge et ne dégage pas d'odeur particulière. On distingue généralement trois sortes de viande de bœuf selon leur tendreté et leur utilisation.",
    conserver: "Pour éviter la prolifération des bactéries, le bœuf doit être mis au réfrigérateur très rapidement après l'achat. La viande fraîche doit être consommée dans les 48-72 h après l'achat, sauf la viande hachée qui doit être mangée le plus rapidement possible. Il est possible de congeler le bœuf cru pendant 2-3 mois. Si la viande est cuite, elle se conservera 3-4 jours au réfrigérateur.",
  },
  {
    name: 'Cheval',
    image: '/images/bienfaits/viandes/tournedos-cheval.jpg',
    category: 'Viande rouge',
    bienfaits: "La viande chevaline est particulièrement maigre et riche en fer. Elle est idéale pour les personnes qui surveillent leur apport en graisses tout en recherchant une bonne source de protéines.",
    choisir: "Choisir une viande d'un rouge vif, sans odeur désagréable. La texture doit être ferme.",
    conserver: "Se conserve au réfrigérateur 2-3 jours maximum. Congeler si nécessaire.",
    cuisiner: "Particulièrement maigre, le rumsteck de viande chevaline est idéal pour les brochettes et les pavés mais aussi les rôtis. C'est poêlé ou grillé qu'il donne le meilleur de lui-même. Pour un pavé, comptez 2 à 6 min de cuisson de chaque côté et pour un steak, 1 à 3 min.",
  },
  {
    name: 'Mouton/Agneau',
    image: '/images/bienfaits/viandes/moutons.jpg',
    category: 'Viande rouge',
    bienfaits: "Le mouton présente l'intérêt de fournir de multiples denrées importantes: de la viande et du lait, mais également du cuir et de la laine. La domestication du mouton remonte à 7000 ou 8000 ans.",
    choisir: "Pour choisir une viande de mouton, il faut s'assurer de la fermeté et de la couleur rouge sombre de sa chair. Pour des rôtis et des grillades, on choisira un mouton le plus jeune possible, afin que sa chair soit tendre. Le terme 'agneau' désigne une bête de moins de quatorze mois.",
    conserver: "Se conserve au réfrigérateur 2-3 jours. Congeler pour une conservation plus longue.",
    cuisiner: "Pour rôtir: le gigot, la selle anglaise, le carré entier ou l'épaule. Pour griller: les côtelettes. Pour préparer des brochettes: la poitrine, l'épaule ou le collier. Pour braiser, sauter ou bouillir: le collier, la poitrine ou l'épaule.",
  },
  // Viande blanche
  {
    name: 'Poulet/Volaille',
    image: '/images/bienfaits/viandes/volaille.jpg',
    category: 'Viande blanche',
    bienfaits: "C'est une viande blanche, tendre et assez sèche. Le poulet est une excellente source de protéines maigres. Il est faible en gras saturés et riche en vitamines B. Idéal pour une alimentation équilibrée.",
    choisir: "La chair doit être ferme et d'un blanc rosé. La peau doit être propre et sans taches. Éviter les volailles qui dégagent une odeur désagréable.",
    conserver: "Réfrigérer immédiatement après l'achat. Consommer dans les 2 jours. Se congèle très bien pendant plusieurs mois.",
    cuisiner: "Se prête à toutes les cuissons: rôti, grillé, poêlé, mijoté. Toujours s'assurer que la viande est bien cuite à cœur.",
  },
  {
    name: 'Lapin',
    image: '/images/bienfaits/viandes/Lapin_entier.jpg',
    category: 'Viande blanche',
    bienfaits: "Le lapin est une viande très maigre, riche en protéines et faible en cholestérol. C'est une excellente alternative aux viandes plus grasses.",
    choisir: "Il ne doit être ni trop jeune, ni trop vieux (11-12 semaines est l'idéal). Il doit peser environ 1,5 kg. La chair doit être bien rosée, le foie très rouge, et les rognons entourés d'une couche de graisse. Le râble (bas du dos) doit être bien en chair. Les pattes avant doivent être flexibles et les articulations épaisses.",
    conserver: "Se conserve au réfrigérateur 2-3 jours. Congeler si nécessaire pour une conservation plus longue.",
    cuisiner: "Peut être rôti, mijoté, ou préparé en sauce. Le lapin se marie bien avec la moutarde, le thym et le romarin.",
  },
  {
    name: 'Porc',
    image: '/images/bienfaits/viandes/viande-porc.jpg',
    category: 'Viande blanche',
    bienfaits: "Le porc est une source importante de protéines, de vitamines B (notamment B1 et B12) et de zinc. Selon les morceaux, il peut être assez maigre.",
    choisir: "La chair de porc devrait être blanc rosé, sans odeur forte. La graisse devrait être ferme et blanche.",
    conserver: "Réfrigérer immédiatement. Consommer dans les 2-3 jours. La viande de porc se congèle bien.",
    cuisiner: "Rôti, grillé, braisé ou en ragoût. Le porc doit toujours être bien cuit.",
  },
  {
    name: 'Veau',
    image: '/images/bienfaits/viandes/veau.jpg',
    category: 'Viande blanche',
    bienfaits: "L'excellente qualité de la nourriture dont les bêtes sont nourries donne à la viande de veau sa couleur rosée, sa tendreté inimitable et son goût si raffiné. Le veau est une viande maigre et polyvalente qui peut être apprêtée d'une multitude de manières.",
    choisir: "Pour choisir une bonne viande de veau, assurez-vous que sa chair est de couleur rosée, la plus claire possible: c'est le signe qu'il a été nourri au lait. Le gras doit être d'un blanc laiteux.",
    conserver: "La viande fraîche se conserve 2-3 jours au réfrigérateur, dans un emballage hermétique. On peut aussi congeler le veau jusqu'à 4 mois dans un emballage adéquat.",
  },
  // Poissons et fruits de mer
  {
    name: 'Merlan',
    image: '/images/bienfaits/viandes/merlan.jpg',
    category: 'Poissons',
    bienfaits: "Souvent dédaigné, le merlan a pourtant toute sa place sur nos tables. La chair fine de ce poisson blanc hyper-diététique (moins de 1% de lipides) est tout sauf banale. De plus, il est bon marché et disponible toute l'année.",
    choisir: "Choisir un merlan aux yeux brillants et à la chair ferme. L'odeur doit être légère et marine.",
    conserver: "Consommer le jour même ou le lendemain. Peut être congelé pour une conservation plus longue.",
    cuisiner: "Inutile de le fariner, une poêle bien chaude ou un passage express aux micro-ondes lui suffisent. Ne dépassez pas 2 à 3 minutes de cuisson, au risque de voir sa chair s'émietter. Servi frit entier, il se marie très bien à une sauce tartare.",
  },
  {
    name: 'Crevettes',
    image: '/images/bienfaits/viandes/fruit-de-mer.png',
    category: 'Fruits de mer',
    bienfaits: "Les crevettes sont riches en protéines, en oméga-3, en iode et en sélénium. Elles sont faibles en calories et excellentes pour la santé cardiovasculaire.",
    choisir: "Au premier coup d'œil, les crevettes doivent avoir une carapace humide, luisante. Quand on les transvase d'un cageot à un sac elles ne doivent pas rester collées les unes aux autres. Plus sa couleur rose-rouge est délavée, plus sa carapace tire vers le gris, moins elle est fraîche.",
    conserver: "Consommer rapidement, le jour même si possible. Les crevettes crues se conservent 1-2 jours au réfrigérateur. Se congèlent bien.",
  },
  {
    name: 'Poissons',
    image: '/images/bienfaits/viandes/les-poissons.png',
    category: 'Poissons',
    bienfaits: "Les poissons sont une excellente source de protéines, d'oméga-3 et de vitamine D. Ils contribuent à la santé du cœur et du cerveau.",
    choisir: "L'œil doit être brillant et bombé, les branchies rouges, la chair ferme au toucher et l'odeur légère et marine.",
    conserver: "Consommer le plus rapidement possible, idéalement le jour même. Peut être congelé pour prolonger la conservation.",
    cuisiner: "Poêlé, grillé, au four ou poché selon les espèces. Éviter de trop cuire pour préserver la texture délicate.",
  },
  {
    name: 'Charcuteries',
    image: '/images/bienfaits/viandes/Viandes-charcuteries.png',
    category: 'Charcuteries',
    bienfaits: "Les charcuteries fournissent des protéines et du fer. À consommer avec modération en raison de leur teneur en sel et en gras saturés.",
    choisir: "Vérifier la date de péremption. Préférer les produits de qualité, artisanaux si possible.",
    conserver: "Se conservent plusieurs jours au réfrigérateur selon le type. Une fois ouverts, consommer dans les 3-5 jours.",
  },
];

const categories = [
  { name: 'Viande rouge', description: 'La viande rouge contient des protéines et du fer, deux nutriments nécessaires pour conserver une bonne santé.' },
  { name: 'Viande blanche', description: 'Les viandes blanches comme le poulet, le veau et le lapin sont maigres et riches en protéines.' },
  { name: 'Poissons', description: 'Les poissons sont une excellente source de protéines et d\'oméga-3 pour la santé cardiovasculaire.' },
  { name: 'Fruits de mer', description: 'Les fruits de mer apportent iode, sélénium et protéines de haute qualité.' },
  { name: 'Charcuteries', description: 'À consommer avec modération, les charcuteries apportent variété et saveur à l\'alimentation.' },
];

const benefits = [
  {
    icon: Dumbbell,
    title: 'Développement musculaire',
    description: 'Les protéines sont essentielles pour la construction et réparation des muscles.',
  },
  {
    icon: Brain,
    title: 'Fonction cérébrale',
    description: 'La vitamine B12 et le fer soutiennent le fonctionnement du cerveau.',
  },
  {
    icon: Heart,
    title: 'Énergie durable',
    description: 'Les protéines fournissent une énergie stable tout au long de la journée.',
  },
];

export default function ViandesPage() {
  const [selectedViande, setSelectedViande] = useState<ViandeInfo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredViandes = activeCategory
    ? viandes.filter(v => v.category === activeCategory)
    : viandes;

  return (
    <>
      <PageHeader
        title="Les Viandes"
        subtitle="Bienfaits"
        description="Découvrez les bienfaits des viandes et protéines que nous distribuons"
        backgroundImage="/images/food/meat-hd.jpg"
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

      {/* Intro */}
      <section className="py-12 bg-white">
        <Container>
          <FadeIn className="max-w-4xl mx-auto">
            <p className="text-lg text-text-muted text-center">
              La viande rouge contient des protéines et du fer, deux nutriments nécessaires pour conserver une bonne santé, produire des anticorps, protéger le système immunitaire, et éviter des maladies comme l'anémie. Pour une femme enceinte, cet apport de fer est primordial dans la croissance et le développement du cerveau du fœtus. La viande rouge contient également des vitamines B et D, du sélénium et du zinc.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <Drumstick className="w-16 h-16 text-amber-700 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi les protéines sont importantes?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Les viandes et poissons sont d'excellentes sources de protéines de haute qualité,
              essentielles pour la croissance et le maintien d'une bonne santé.
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
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-700/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-background-alt text-text hover:bg-primary/10'
              }`}
            >
              Toutes les viandes
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-primary text-white'
                    : 'bg-background-alt text-text hover:bg-primary/10'
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

      {/* Viandes Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos viandes et poissons disponibles
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Cliquez sur une viande pour découvrir ses bienfaits et conseils de préparation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredViandes.map((viande, index) => (
              <motion.div
                key={viande.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedViande(viande)}
                className="bg-background-alt rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={viande.image}
                    alt={viande.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-text">
                    {viande.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-text mb-1">{viande.name}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{viande.bienfaits.substring(0, 60)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-amber-700">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conseil de conservation
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Conservez les viandes au réfrigérateur et consommez-les dans les 2-3 jours.
              Pour une conservation plus longue, congelez-les dès leur réception.
              Décongelez toujours au réfrigérateur, jamais à température ambiante.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedViande}
        onClose={() => setSelectedViande(null)}
        size="lg"
      >
        {selectedViande && (
          <div>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedViande.image}
                alt={selectedViande.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-text mb-2">
                  {selectedViande.category}
                </span>
                <h2 className="text-3xl font-bold text-white">{selectedViande.name}</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Bienfaits pour la santé</h3>
                <p className="text-text-muted">{selectedViande.bienfaits}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Guide d'achat</h3>
                <p className="text-text-muted">{selectedViande.choisir}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Conservation</h3>
                <p className="text-text-muted">{selectedViande.conserver}</p>
              </div>
              {selectedViande.cuisiner && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Conseils de cuisson</h3>
                  <p className="text-text-muted">{selectedViande.cuisiner}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
