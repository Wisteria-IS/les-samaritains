'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Apple, Heart, Shield, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Modal } from '@/components/ui/Modal';

interface FruitInfo {
  name: string;
  image: string;
  category: string;
  bienfaits: string;
  choisir: string;
  conserver: string;
  preparer: string;
  congeler?: string;
  cuisiner?: string;
}

const fruits: FruitInfo[] = [
  // Fruits à noyaux
  {
    name: 'Avocats',
    image: '/images/bienfaits/fruits/avocats.jpg',
    category: 'À noyaux',
    bienfaits: "Énergétique, l'avocat est un fruit riche en acides gras et en vitamines qui favorisent votre bien-être. C'est vrai que l'avocat est riche en gras (en bons gras, toutefois), mais c'est tout de même un aliment très sain qui permet d'ajouter de précieux nutriments et des fibres dans son assiette. L'avocat agit comme antioxydant et contribue à protéger contre certaines maladies de l'œil. L'avocat procure un sentiment de satiété, peut protéger votre futur bébé, pourrait contribuer à garder votre cœur en santé et peut contribuer à faire baisser votre taux de cholestérol.",
    choisir: "Si vous dégustez vos avocats le jour même, assurez-vous simplement que la chair est souple à proximité du pédoncule. La variété Hass a également la particularité d'une peau qui brunit à maturité.",
    conserver: "Privilégiez un endroit frais – mais pas trop froid – (6°C max.) pour conserver vos avocats fermes, ils se gardent jusqu'à 5 jours à l'air ambiant. Bien mûrs, vous pourrez les conserver 2 ou 3 jours en les stockant au frais.",
    preparer: "L'avocat se consomme exclusivement cru. Il suffit de l'ouvrir en deux pour le savourer nature, relevé d'épices, d'herbes ou de citron, ou en accompagnement. Mettez-en dans une salade ou une soupe, servez-le en entrée sous forme de guacamole.",
  },
  {
    name: 'Cerises',
    image: '/images/bienfaits/fruits/cerises.jpg',
    category: 'À noyaux',
    bienfaits: "Désintoxiquant, fébrifuge, laxative. Mais c'est surtout l'infusion de queues de cerise qui a conquis les adeptes de médecine douce, un excellent diurétique reconnu depuis des siècles.",
    choisir: "Épiderme brillant, lisse, bien coloré et sans taches. Fruit bien ferme, mais souple, jamais dur.",
    conserver: "Attention ! C'est un fruit périssable dont le goût peut tourner rapidement selon le temps qu'il fait. La cerise est fragile, car elle absorbe facilement les odeurs et se déshydrate rapidement. Conserver au réfrigérateur dans un contenant hermétique ou un sac de plastique.",
    preparer: "Laver sous l'eau froide, mais ne jamais laisser tremper. Dénoyauter en pratiquant une incision. Sortir du réfrigérateur une heure avant de consommer.",
  },
  {
    name: 'Prunes',
    image: '/images/bienfaits/fruits/prunes.jpg',
    category: 'À noyaux',
    bienfaits: "Énergétique, laxative, rafraîchissante, stimulante, la prune est un fruit antivieillissement.",
    choisir: "Peau luisante encore recouverte de sa pruine (comme un frimas). Il s'agit d'un voile de cire naturelle que le fruit produit pour se protéger de la chaleur. Éviter de consommer une prune qui n'a pas atteint sa pleine maturité à moins de rechercher son pouvoir laxatif!",
    conserver: "Conserver 2 ou 3 jours à température ambiante, ou 1 semaine dans le bas du réfrigérateur mais jamais dans un sac.",
    preparer: "Éveiller sa saveur engourdie en le sortant une bonne heure à la température ambiante avant de la déguster. Attendre à la dernière minute pour la couper et la dénoyauter afin d'éviter le brunissement de la pulpe.",
    congeler: "Accepte la congélation à la condition de la dénoyauter.",
  },
  // Fruits à pépins
  {
    name: 'Pommes',
    image: '/images/bienfaits/fruits/pommes.jpg',
    category: 'À pépins',
    bienfaits: "Alcalinisant, calmante, cicatrisante, favorise le transit intestinal (riche en fibre), riche en potassium, énergétique, hydratante (contient 86% d'eau). 'Une pomme chaque matin éloigne le médecin'. Elle est excellente pour les dents et les gencives et fait baisser le taux de 'mauvais' cholestérol.",
    choisir: "Ferme, sans meurtrissures, non piquée, non ridée, la peau brillante (un fruit qui est trop mûr ou pas assez mûr est plus terne).",
    conserver: "Garder dans un bac à fruit au réfrigérateur ou dans un endroit noir, frais bien aéré. En mettant les pommes dans un sac perforé, on empêche ainsi leur détérioration, leur déshydratation, on ralentit le processus de maturation et on leur conserve tout leur croquant.",
    preparer: "Éplucher à la dernière minute ou citronner au besoin.",
    congeler: "La pomme doit être fraîche et ferme. Laver peler, retirer le cœur, trancher et déposer tout simplement dans un sac pour congélation. Cuite ou cuisinée, elle se congèle très bien.",
  },
  {
    name: 'Poires',
    image: '/images/bienfaits/fruits/poires.webp',
    category: 'À pépins',
    bienfaits: "La poire n'est pas reconnue pour ses propriétés médicinales. À cause de sa richesse en fibres, on peut à la rigueur la considérer comme un laxatif doux pour réveiller un intestin paresseux à la condition de la manger crue avec la pelure.",
    choisir: "Choisir les poires sans défaut ni meurtrissures. Heureusement la poire continue de mûrir après la cueillette, ce qui nous permet de les acheter à différents stades de maturité selon nos besoins.",
    conserver: "Garder les poires à la température ambiante, dans un bol ou un panier, la queue en l'air, bien séparées les unes des autres. Elles peuvent se conserver de 4 à 6 jours, jusqu'à ce qu'elles passent du vert au jaune et perdent un peu de leur fermeté. Freiner alors le processus de mûrissement en plaçant les poires au réfrigérateur. La poire supporte mal la congélation.",
    preparer: "Pour garder les poires épluchées bien blanches, les frotter au jus de citron ou les conserver dans une solution d'eau citronnée.",
  },
  {
    name: 'Kaki',
    image: '/images/bienfaits/fruits/kaki.webp',
    category: 'À pépins',
    bienfaits: "Sur le plan santé, le kaki est un fruit avec un fort potentiel antioxydant. Sa consommation régulière aiderait à abaisser le taux de mauvais cholestérol.",
    choisir: "Choisissez-le très mûr, voire blet, car c'est à ce moment qu'il abandonne son âcreté pour une saveur sucrée.",
    conserver: "Conservez-le pendant quelques jours dans le bac à légumes du réfrigérateur lorsqu'il est à point, deux jours au maximum s'il est blet. S'il est encore trop ferme, mettez-le dans une corbeille avec des pommes à température ambiante, pour accélérer son mûrissement.",
    preparer: "Le kaki peut être cuit pour en faire de la confiture ou encore en compotée avec du miel et du vinaigre balsamique pour en faire un condiment aigre-doux.",
  },
  {
    name: 'Melons',
    image: '/images/bienfaits/fruits/melons.jpg',
    category: 'À pépins',
    bienfaits: "Antifatigue, dépuratif, rafraîchissant, le melon permet de stimuler les reins. Il protège l'organisme contre le vieillissement cellulaire. À tout cela s'ajoute des qualités diurétiques voir laxatives quand il est mangé trop vert. Attention ! Ne dégustez pas le melon trop froid, sinon gare aux maux de ventre !",
    choisir: "Pour savoir si un melon est arrivé à maturité, il suffit de faire une légère pression près du pédoncule. Si la peau est souple, c'est que le melon est bon. Puis il y a l'odeur... Lorsqu'il est à point, on le sent ! Il doit toujours être lourd dans la main.",
    conserver: "On peut conserver un melon entier dans un endroit frais. Une fois coupé, couvrir la partie non utilisée dans une pellicule plastique et réfrigérer aussitôt. Se conserve 2 à 4 jours.",
    preparer: "Couper en deux. À l'aide d'une cuillère, enlever le contenu de la cavité centrale.",
  },
  // Petits fruits
  {
    name: 'Bleuets',
    image: '/images/bienfaits/fruits/Bleuets-au-Quebec.jpg',
    category: 'Petits fruits',
    bienfaits: "Antiseptique, désinfectant, minéralisant et ophtalmique (des compresses d'eau de bleuet calment les yeux irrités). Et c'est parce que le bleuet est bleu qu'il est riche en polyphénols !",
    choisir: "Il doit être ferme, bleuté tirant sur le noir à certains endroits, et d'un bel aspect givré.",
    conserver: "Non lavé, au réfrigérateur pendant quelques jours. On peut les congeler une fois lavés et asséchés pour leur enlever toute trace d'humidité.",
    preparer: "Pour éviter la manipulation, passer rapidement les bleuets sous l'eau froide dans leur récipient ajouré.",
  },
  {
    name: 'Canneberges',
    image: '/images/bienfaits/fruits/canneberge.webp',
    category: 'Petits fruits',
    bienfaits: "Sanguine, digestive, la canneberge combat les infections urinaires. Les Amérindiens l'utilisaient déjà pour lutter contre le scorbut.",
    choisir: "Baie charnue, brillante et ferme.",
    conserver: "Non lavée, la canneberge a l'avantage de se conserver jusqu'à 2 mois au réfrigérateur. Elle supporte très bien la congélation sans aucune préparation.",
    preparer: "À cause de sa texture et de son goût aigrelet, il est rare que l'on consomme la canneberge crue, au naturel, mais elle requiert peu de préparation. On peut aussi les faire dégorger dans le sucre toute une nuit avant de les utiliser dans un dessert.",
    cuisiner: "Accompagne à merveille la volaille, le gibier, les viandes rôties. Se marie instinctivement avec l'orange et adore le bleuet et la framboise.",
  },
  {
    name: 'Fraises',
    image: '/images/bienfaits/fruits/fraises.jpg',
    category: 'Petits fruits',
    bienfaits: "Antirhumatismale, astringente, biliaire (active l'intestin paresseux), dépurative diurétique, laxative et relaxante (pour l'hypertension).",
    choisir: "Ferme sans trace jaune. Évitez les fraises trop molles.",
    conserver: "Fragiles, elles doivent être consommées rapidement. Garder dans un bac à fruit au réfrigérateur ou dans un endroit frais. Pour une conservation plus longue, les sucrer tout simplement. On peut les congeler à plat dans un sac de plastique.",
    preparer: "Pour éviter la manipulation, passer les fraises rapidement sous l'eau froide dans leur récipient ajouré. Ne jamais passer sous l'eau une fois que les fraises sont équeutées. Éviter de les servir trop fraîches, le froid fige leur saveur.",
  },
  {
    name: 'Framboises',
    image: '/images/bienfaits/fruits/framboises.webp',
    category: 'Petits fruits',
    bienfaits: "Efficace contre la constipation. Avec les mûres, les framboises sont, de tous les petits fruits, les plus riches en fibres. Diminue les risques de cancer.",
    choisir: "Fruit joufflu, sans meurtrissures relativement ferme et d'un beau rouge sombre homogène. Sachez que les framboises ne mûrissent plus une fois cueillies. Le meilleur moment pour la cueillette reste le matin.",
    conserver: "Fragiles très périssables. Il est préférable de les réfrigérer 2 ou 3 jours. Les sucrer légèrement pour les conserver un peu plus longtemps. Congeler nature, au sucre ou en purée.",
    preparer: "La framboise supporte mal d'être lavée, car elle se gorge rapidement d'eau et ramollit.",
  },
  {
    name: 'Mûres',
    image: '/images/bienfaits/fruits/mures.webp',
    category: 'Petits fruits',
    bienfaits: "Antifatigue (fer 1.5 g), astringente, dépurative, laxative. Grâce à ses micronutriments elle améliore le système cardio-vasculaire et aide à combattre le vieillissement cellulaire. Avec les framboises, les mûres sont, de tous les petits fruits, les plus riches en fibres.",
    choisir: "Fruit joufflu, sans meurtrissures, relativement ferme, pulpeux et brillant. Sélectionner des baies uniformément noires, sans grains rouges acides. Sachez que les mûres ne mûrissent plus une fois cueillies.",
    conserver: "Fragiles, très périssable. Il est préférable de les réfrigérer au plus 2 ou 3 jours sans les tasser. Les sucrer légèrement pour les conserver un peu plus longtemps.",
    preparer: "Elle supporte mal d'être lavée, car elle se gorge rapidement d'eau et ramollit. Passer cette dernière sous l'eau froide pour éviter la manipulation.",
  },
  // Fruits-légumes
  {
    name: 'Citrouilles',
    image: '/images/bienfaits/fruits/citrouilles.jpg',
    category: 'Fruits-légumes',
    bienfaits: "La citrouille a des propriétés vermifuges et elle confirma son efficacité dès le XIXe siècle dans le traitement du ver solitaire. Les graines de citrouille vertes ont d'excellentes propriétés diurétiques. Utilisées contre l'hyperplasie bénigne de la prostate.",
    choisir: "Choisissez une citrouille bien ferme. Si elle est un peu molle, c'est qu'elle est largement trop mûre à l'intérieur. La peau de la citrouille doit être belle, uniformément orange.",
    conserver: "Vous pourrez conserver la citrouille entière dans un espace bien aéré, à température constante d'environ 15°C, pendant 6 mois. Une fois découpée, ses tranches se conservent dans un film alimentaire pendant une semaine au réfrigérateur.",
    preparer: "La citrouille est excellente en potage et purée. Vous pouvez également la déguster en compote, mélangée à quelques pommes et aromatisée avec de la cannelle et de la vanille.",
  },
  {
    name: 'Courgettes',
    image: '/images/bienfaits/fruits/courgettes.jpeg',
    category: 'Fruits-légumes',
    bienfaits: "Avec un total énergétique particulièrement bas (13 à 15 calories par 100g). Une forte teneur en minéraux et en fibres et un apport vitaminique bien diversifié. La courgette possède toutes les caractéristiques pour ceux et celles qui font attention à leur ligne.",
    choisir: "Choisir des courgettes fermes, à l'épiderme lisse et brillant, des formes régulières sans tache ni traces jaunes.",
    conserver: "Endroit sombre et frais. Les courgettes peuvent se garder 4 ou 5 jours dans un endroit frais et sec ou dans le bac à légumes du réfrigérateur. Elles supportent mal le congélateur à cause de leur haute teneur en eau.",
    preparer: "La courgette se cuisine avec ou sans pelure selon le goût de chacun.",
    cuisiner: "La courgette adore l'huile, le beurre et la friture. Sa saveur est délicate. Avant de poêler des courgettes, les fariner légèrement elles sont beaucoup plus croquantes et moins grasses.",
  },
  {
    name: 'Aubergines',
    image: '/images/bienfaits/fruits/Aubergines.jpg',
    category: 'Fruits-légumes',
    bienfaits: "Les antioxydants sont des composés qui protègent les cellules du corps des dommages causés par les radicaux libres. L'aubergine est une source de cuivre. En tant que constituant de plusieurs enzymes, le cuivre est nécessaire à la formation de l'hémoglobine et du collagène dans l'organisme.",
    choisir: "La peau doit être lisse et brillante, les sépales doivent être bien verts et épineux, et adhérer à la peau. Éviter les fruits dont la peau est fripée et dont la couleur est mate et tire sur le brun.",
    conserver: "L'aubergine n'aime pas le froid et se conserve mal au réfrigérateur. Si nécessaire, elle pourra se conserver une ou deux semaines dans le bac à légumes du réfrigérateur. Au congélateur: Laver, peler (ou pas) et couper en tranches, blanchir quatre minutes dans de l'eau avec un peu de jus de citron.",
    preparer: "Frite telle quelle ou en beignets. Farcie: couper l'aubergine en deux dans le sens de la longueur, enlever une bonne partie de la pulpe et la faire frire légèrement.",
  },
  // Exotiques
  {
    name: 'Kiwi',
    image: '/images/bienfaits/fruits/kiwi.jpg',
    category: 'Exotiques',
    bienfaits: "Le kiwi est exceptionnellement riche en vitamine C et en antioxydants. Il favorise la digestion grâce à ses enzymes naturelles et renforce le système immunitaire.",
    choisir: "Choisir un kiwi légèrement souple au toucher. S'il est trop dur, il n'est pas mûr; trop mou, il est trop mûr.",
    conserver: "À température ambiante pour le faire mûrir, au réfrigérateur une fois mûr. Se conserve plusieurs semaines au frais.",
    preparer: "Couper en deux et manger à la cuillère, ou peler et trancher pour les salades de fruits.",
  },
  {
    name: 'Bananes',
    image: '/images/bienfaits/fruits/banane.jpg',
    category: 'Exotiques',
    bienfaits: "Excellente source de potassium, la banane aide à réguler la pression artérielle. Elle fournit une énergie rapide et durable, idéale pour les sportifs.",
    choisir: "Choisir selon vos préférences: jaune vif pour une consommation immédiate, légèrement verte si vous souhaitez les conserver quelques jours.",
    conserver: "À température ambiante. Ne pas réfrigérer car le froid noircit la peau (même si l'intérieur reste bon).",
    preparer: "Peler et consommer nature, ou utiliser dans smoothies, pâtisseries et desserts.",
  },
];

const categories = [
  { name: 'À noyaux', description: 'Abricot, cerise, prune, pêche... Les fruits à noyau sont les stars de l\'été. Ils contiennent tous des vitamines, des minéraux et des fibres.' },
  { name: 'À pépins', description: 'Les fruits à pépins figurent parmi les plus courants de notre alimentation. Des pommes aux poires, ces fruits sucrés et juteux sont appréciés pour leurs saveurs distinctes.' },
  { name: 'Petits fruits', description: 'Il est possible de varier les plantations afin d\'avoir toujours un petit fruit dans votre assiette, du printemps à l\'automne.' },
  { name: 'Fruits-légumes', description: 'Un fruit c\'est une fructification donc ce qui porte des graines, un légume c\'est une plante dont certaines parties sont comestibles.' },
  { name: 'Exotiques', description: 'Des fruits venus d\'ailleurs qui apportent saveurs et nutriments uniques à notre alimentation.' },
];

const benefits = [
  {
    icon: Heart,
    title: 'Santé cardiaque',
    description: 'Les fruits sont riches en antioxydants qui protègent le cœur.',
  },
  {
    icon: Shield,
    title: 'Système immunitaire',
    description: 'La vitamine C renforce les défenses naturelles du corps.',
  },
  {
    icon: Zap,
    title: 'Énergie naturelle',
    description: 'Les sucres naturels des fruits fournissent une énergie saine.',
  },
];

export default function FruitsPage() {
  const [selectedFruit, setSelectedFruit] = useState<FruitInfo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFruits = activeCategory
    ? fruits.filter(f => f.category === activeCategory)
    : fruits;

  return (
    <>
      <PageHeader
        title="Les Fruits"
        subtitle="Bienfaits"
        description="Découvrez les bienfaits des fruits frais que nous distribuons"
        backgroundImage="/images/bienfaits/fruits/fruit-legume.png"
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
            <Apple className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi manger des fruits?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Les fruits sont essentiels pour une alimentation équilibrée. Ils apportent
              vitamines, minéraux et fibres nécessaires à une bonne santé.
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
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-red-500" />
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
              Tous les fruits
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

      {/* Fruits Grid */}
      <section className="py-16 md:py-24 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos fruits disponibles
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Cliquez sur un fruit pour découvrir ses bienfaits et conseils de préparation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFruits.map((fruit, index) => (
              <motion.div
                key={fruit.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedFruit(fruit)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-text">
                    {fruit.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-text mb-1">{fruit.name}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{fruit.bienfaits.substring(0, 60)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-20 bg-red-500">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conseil de conservation
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Conservez les fruits à température ambiante jusqu'à maturité, puis au
              réfrigérateur pour prolonger leur fraîcheur. Consommez-les rapidement
              pour profiter de tous leurs bienfaits!
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedFruit}
        onClose={() => setSelectedFruit(null)}
        size="lg"
      >
        {selectedFruit && (
          <div>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedFruit.image}
                alt={selectedFruit.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-text mb-2">
                  {selectedFruit.category}
                </span>
                <h2 className="text-3xl font-bold text-white">{selectedFruit.name}</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Ses bienfaits</h3>
                <p className="text-text-muted">{selectedFruit.bienfaits}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Comment le choisir</h3>
                <p className="text-text-muted">{selectedFruit.choisir}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Comment le conserver</h3>
                <p className="text-text-muted">{selectedFruit.conserver}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Bien préparer</h3>
                <p className="text-text-muted">{selectedFruit.preparer}</p>
              </div>
              {selectedFruit.congeler && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Peut-on le congeler?</h3>
                  <p className="text-text-muted">{selectedFruit.congeler}</p>
                </div>
              )}
              {selectedFruit.cuisiner && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Bien cuisiner</h3>
                  <p className="text-text-muted">{selectedFruit.cuisiner}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
