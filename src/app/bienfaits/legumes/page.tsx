'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Carrot, Heart, Eye, Leaf } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Modal } from '@/components/ui/Modal';

interface LegumeInfo {
  name: string;
  image: string;
  category: string;
  bienfaits: string;
  choisir: string;
  conserver: string;
  preparer?: string;
  congeler?: string;
  cuisiner?: string;
}

const legumes: LegumeInfo[] = [
  // Légumes fleurs
  {
    name: 'Artichaut',
    image: '/images/bienfaits/legumes/artichaut.jpg',
    category: 'Légumes fleurs',
    bienfaits: "L'artichaut agit contre la constipation grâce à sa richesse en fibres. En favorisant le développement de bonnes bactéries de la flore intestinale grâce à la présence d'inuline et de fibres, l'artichaut favoriserait la santé de l'intestin. Il stimule la sécrétion de la vésicule biliaire et possède un effet légèrement diurétique. L'effet drainant des artichauts est valorisé dans les régimes minceurs. L'artichaut est un légume au fort pouvoir rassasiant.",
    choisir: "Pour bien choisir l'artichaut, il faut savoir que celui-ci doit être lourd et ferme, avec des feuilles bien serrées les unes contre les autres. (Si celles-ci sont ouvertes, c'est qu'il est trop mûr). Le bas de la queue (tige) doit être vert et se casser facilement.",
    conserver: "Pour conserver les artichauts frais plus longtemps, il suffit de les placer queues trempées dans de l'eau (comme des fleurs !). Ils peuvent alors tenir plusieurs jours.",
  },
  {
    name: 'Brocoli',
    image: '/images/bienfaits/legumes/brocoli.webp',
    category: 'Légumes fleurs',
    bienfaits: "Gorgé de sels minéraux, riche en acide folique (excellent antistress) le brocoli possède deux fois plus de vitamine C que l'épinard et autant que le citron.",
    choisir: "Les bouquets de brocoli doivent être serrés et verts. Éviter le brocoli aux bouquets jaunes.",
    conserver: "Le brocoli se conserve au réfrigérateur, sans le laver, et couvert jusqu'à cinq jours dans le bac à légumes.",
    congeler: "Le brocoli se prête très bien à la congélation. Après l'avoir défait en bouquets, faites-le blanchir, égoutter et placez les bouquets dans des sacs à congélation. Se conservera un an.",
    preparer: "Pour les légumes, cuire 3 minutes dans l'eau bouillante et rafraîchir aussitôt à l'eau glacée (blanchir).",
  },
  {
    name: 'Chou-fleur',
    image: '/images/bienfaits/legumes/chou-fleur.jpg',
    category: 'Légumes fleurs',
    bienfaits: "Plusieurs études ont démontré que la consommation régulière de légumes de la famille des crucifères pourrait prévenir certains cancers. Le chou-fleur bouilli et le chou-fleur congelé sont de bonnes sources de vitamine C. Le chou-fleur est une source de vitamine B6, B9. La vitamine K est nécessaire pour la coagulation du sang et joue un rôle dans la formation des os.",
    choisir: "Les têtes de chou-fleur doivent être fermes et les fleurons bien serrés. Ce qui reste du feuillage doit être frais, vert et gonflé d'eau. Qu'elle soit violette, blanc crème, orangée ou verte, la pomme doit avoir préservé sa couleur d'origine.",
    conserver: "Au réfrigérateur: Quatre ou 5 jours dans le bac à légumes. Au congélateur: Faites-le blanchir trois minutes à l'eau bouillante, puis refroidissez à l'eau glacée. Égouttez et mettez dans des sacs à congélation.",
    preparer: "En trempette, en salade à l'algérienne, avec du fromage aux herbes, du beurre d'anchois ou de l'aïoli. Émincez-le finement, puis ajoutez des tranches de tomates et des épinards frais.",
  },
  // Légumes feuilles
  {
    name: 'Asperges',
    image: '/images/bienfaits/legumes/asperges.jpg',
    category: 'Légumes feuilles',
    bienfaits: "Verte, blanche ou violette, l'asperge se consomme dans toutes les régions du monde. C'est une excellente source de folate, une vitamine essentielle aux femmes enceintes ou qui allaitent. Les antioxydants qu'elle contient aideraient notre organisme à prévenir de nombreuses maladies.",
    choisir: "Contrairement à la croyance populaire, les asperges fines sont moins tendres que les grosses, du fait qu'elles sont proportionnellement plus riches en fibres ligneuses. Choisissez des asperges dont les pointes sont bien fermées et compactes.",
    conserver: "Réfrigérateur: Entourez d'abord la base de la botte de papier essuie-tout humide et mettez le tout dans un sac en plastique. Ou, placez-les à la verticale dans un bocal contenant 5 cm d'eau. Elles se conserveront 1 ou 2 semaines. Congélateur: Une fois blanchies pendant 3 minutes à l'eau bouillante, les asperges se conserveront environ 8 mois.",
    cuisiner: "Bouillies ou à la vapeur. Il faut compter de 3 à 5 minutes pour les vertes et, selon leur diamètre, de 8 à 12 minutes pour les blanches.",
  },
  {
    name: 'Bette à carde',
    image: '/images/bienfaits/legumes/bette-a-carde.jpg',
    category: 'Légumes feuilles',
    bienfaits: "Pauvre en calories, c'est le légume idéal pour ceux qui veulent perdre du poids tout en apportant à la diète du potassium, du calcium et fibres.",
    choisir: "Feuilles bien vertes brillantes croquantes, sans taches.",
    conserver: "Les cardes se conservent relativement longtemps dans un endroit sombre et frais ou dans un bac à légumes du réfrigérateur.",
    preparer: "Laver à l'eau courante en insistant sur la cannelure des côtes.",
  },
  {
    name: 'Épinards',
    image: '/images/bienfaits/legumes/epinards.jpg',
    category: 'Légumes feuilles',
    bienfaits: "L'épinard est une excellente source de fer, de vitamines A et C, et d'antioxydants. Il contribue à la santé des os et renforce le système immunitaire.",
    choisir: "Choisir des feuilles d'un vert foncé brillant, sans taches ni jaunissement. Les feuilles doivent être fermes et croquantes.",
    conserver: "Se conserve au réfrigérateur dans un sac plastique pendant 3 à 5 jours. Ne pas laver avant de stocker.",
    preparer: "Bien laver à plusieurs eaux pour éliminer le sable. Peut se consommer cru en salade ou cuit.",
  },
  {
    name: 'Cresson',
    image: '/images/bienfaits/legumes/cresson.jpg',
    category: 'Légumes feuilles',
    bienfaits: "Des études récentes ont classé le cresson au rang no.1 des légumes riches en nutriments. C'est une excellente source de vitamines A, C, et K. Ils seraient particulièrement efficaces pour prévenir l'apparition du cancer du poumon chez les fumeurs.",
    choisir: "Il doit être de couleur vive. Quand le cresson commence à faner, son beau vert se ternit.",
    conserver: "Le cresson se consomme rapidement après achat pour éviter que ses feuilles délicates ne flétrissent. Si vous n'avez pas prévu de le déguster tout de suite, conservez-le en botte dans le bas du réfrigérateur. Il se gardera d'autant mieux les tiges dans l'eau et les feuilles recouvertes d'un linge humide. Prévoyez cependant de le manger dans les 24 à 48 h.",
  },
  {
    name: 'Céleri',
    image: '/images/bienfaits/legumes/celeri.webp',
    category: 'Légumes feuilles',
    bienfaits: "Bien que son apport énergétique soit faible, ce légume apporte une multitude de nutriments essentiels: le calcium, le fer, le potassium, le sodium et les vitamines A, B et C. Le céleri fait partie de ces aliments protecteurs notamment grâce à ses feuilles et ses graines, qui renferment des antioxydants bénéfiques contre le cancer.",
    choisir: "Le feuillage doit être d'un beau vert tendre. Vérifiez qu'il n'y ait ni traces ni meurtrissures, qui pourraient réduire la durée de conservation du légume.",
    conserver: "Après achat, entreposez rapidement votre céleri-branche dans le bas de votre réfrigérateur. Pensez, au préalable, à l'envelopper dans un linge propre et humide. Vous pourrez ainsi conserver vos côtes de céleri entre 4 et 5 jours. Si vous le consommez cru, mieux vaut l'utiliser dans les deux jours.",
    preparer: "Le céleri fait partie de la liste des 10 aliments les plus contaminés par les résidus de pesticides. Il est conseillé de le déguster bio ou de bien le nettoyer.",
  },
  // Légumes racines
  {
    name: 'Carottes',
    image: '/images/bienfaits/legumes/carottes.jpg',
    category: 'Légumes racines',
    bienfaits: "La carotte est une excellente source de bêta-carotène, précurseur de la vitamine A. Elle favorise une bonne vision, une peau saine et renforce le système immunitaire.",
    choisir: "Choisir des carottes fermes, d'une couleur orange vif, sans taches ni fissures. Les fanes, si présentes, doivent être vertes et fraîches.",
    conserver: "Retirer les fanes et conserver au réfrigérateur dans un sac plastique perforé pendant 2 à 3 semaines.",
    preparer: "Éplucher ou brosser selon la préparation. Peut se consommer crue ou cuite.",
  },
  {
    name: 'Betterave',
    image: '/images/bienfaits/legumes/betterave.webp',
    category: 'Légumes racines',
    bienfaits: "La betterave est riche en nitrates qui améliorent la circulation sanguine et la performance physique. Elle contient également des antioxydants puissants.",
    choisir: "Choisir des betteraves fermes, sans parties molles. Les feuilles, si présentes, doivent être vertes et non flétries.",
    conserver: "Se conserve plusieurs semaines au réfrigérateur dans le bac à légumes. Les feuilles se conservent séparément pendant quelques jours.",
    preparer: "Cuire entière avec la peau pour préserver les nutriments et la couleur. Éplucher après cuisson.",
  },
  {
    name: 'Oignon',
    image: '/images/bienfaits/legumes/oignon.jpg',
    category: 'Légumes racines',
    bienfaits: "L'oignon possède des propriétés antibactériennes et antioxydantes. Il favorise la santé cardiovasculaire et renforce le système immunitaire.",
    choisir: "Choisir des oignons fermes et secs, sans traces de moisissure ni de germination. La peau doit être brillante et intacte.",
    conserver: "Conserver dans un endroit frais, sec et sombre pendant plusieurs semaines. Ne pas réfrigérer les oignons entiers.",
    preparer: "Éplucher et couper selon la recette. Pour réduire les larmes, réfrigérer l'oignon 30 minutes avant de le couper.",
  },
  {
    name: 'Ail',
    image: '/images/bienfaits/legumes/ail.jpg',
    category: 'Légumes racines',
    bienfaits: "L'ail est un puissant antibactérien naturel. Il aide à réduire le cholestérol et la tension artérielle. Ses composés soufrés ont des propriétés anticancéreuses.",
    choisir: "Choisir des têtes fermes et bien serrées. Les gousses ne doivent pas être germées ou desséchées.",
    conserver: "Conserver dans un endroit frais, sec et bien ventilé pendant plusieurs semaines. Ne pas réfrigérer.",
    preparer: "Écraser légèrement la gousse pour faciliter l'épluchage. Laisser reposer 10 minutes après avoir haché pour activer les composés bénéfiques.",
  },
];

const categories = [
  { name: 'Légumes fleurs', description: 'Les légumes fleurs incluent les brocolis, choux-fleurs et artichauts, riches en vitamines et en fibres.' },
  { name: 'Légumes feuilles', description: 'Les légumes feuilles comme les épinards, le cresson et la bette à carde sont des concentrés de nutriments.' },
  { name: 'Légumes racines', description: 'Les légumes racines tels que les carottes, betteraves et oignons apportent énergie et minéraux essentiels.' },
];

const benefits = [
  {
    icon: Heart,
    title: 'Santé cardiovasculaire',
    description: 'Les légumes verts réduisent les risques de maladies cardiaques.',
  },
  {
    icon: Eye,
    title: 'Santé des yeux',
    description: 'Les carottes et légumes orangés sont excellents pour la vue.',
  },
  {
    icon: Leaf,
    title: 'Digestion saine',
    description: 'Les fibres des légumes favorisent une bonne digestion.',
  },
];

export default function LegumesPage() {
  const [selectedLegume, setSelectedLegume] = useState<LegumeInfo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredLegumes = activeCategory
    ? legumes.filter(l => l.category === activeCategory)
    : legumes;

  return (
    <>
      <PageHeader
        title="Les Légumes"
        subtitle="Bienfaits"
        description="Découvrez les bienfaits des légumes frais que nous distribuons"
        backgroundImage="/images/food/vegetables-hd.jpg"
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
            <Carrot className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi manger des légumes?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Les légumes sont la pierre angulaire d'une alimentation saine. Ils
              fournissent des nutriments essentiels tout en étant faibles en calories.
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
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-orange-500" />
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
              Tous les légumes
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

      {/* Legumes Grid */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos légumes disponibles
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Cliquez sur un légume pour découvrir ses bienfaits et conseils de préparation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLegumes.map((legume, index) => (
              <motion.div
                key={legume.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedLegume(legume)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={legume.image}
                    alt={legume.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-text">
                    {legume.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-text mb-1">{legume.name}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{legume.bienfaits.substring(0, 60)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-orange-500">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conseil de préparation
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Pour préserver un maximum de nutriments, privilégiez la cuisson à la vapeur
              ou sautez rapidement vos légumes. Évitez de les faire bouillir trop longtemps!
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedLegume}
        onClose={() => setSelectedLegume(null)}
        size="lg"
      >
        {selectedLegume && (
          <div>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedLegume.image}
                alt={selectedLegume.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-text mb-2">
                  {selectedLegume.category}
                </span>
                <h2 className="text-3xl font-bold text-white">{selectedLegume.name}</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Ses bienfaits</h3>
                <p className="text-text-muted">{selectedLegume.bienfaits}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Comment le choisir</h3>
                <p className="text-text-muted">{selectedLegume.choisir}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Comment le conserver</h3>
                <p className="text-text-muted">{selectedLegume.conserver}</p>
              </div>
              {selectedLegume.preparer && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Bien préparer</h3>
                  <p className="text-text-muted">{selectedLegume.preparer}</p>
                </div>
              )}
              {selectedLegume.congeler && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Peut-on le congeler?</h3>
                  <p className="text-text-muted">{selectedLegume.congeler}</p>
                </div>
              )}
              {selectedLegume.cuisiner && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Bien cuisiner</h3>
                  <p className="text-text-muted">{selectedLegume.cuisiner}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
