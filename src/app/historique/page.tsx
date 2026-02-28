'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';

const historyChapters = [
  {
    id: 1,
    year: '1999',
    title: 'Comment vas-tu?',
    content: `En decembre 1999, Chantal va chercher des biens dans une banque alimentaire, ce qu'elle fait par necessite 1 fois par semaine pour nourrir sa famille de 9 enfants. Ce jour-la, une des benevoles de l'organisme lui demande comment elle se porte. Elle le fait avec tant de bonte et avec une telle sollicitude que Chantal lui ouvre son coeur.

Ca ne va pas du tout. Le logement ou Chantal habite est infeste de moisissure noire et ces champignons toxiques sont en train de rendre toute sa famille malade, les plus jeunes en particulier.

Emue par la situation de Chantal, la benevole de l'organisme d'entraide propose une visite du logement. Il s'ensuit une rapide, necessaire mais oh combien desagreable succession d'evenements.

Appele d'urgence, un inspecteur de la ville vient evaluer le logement. Le verdict est sans appel : la maison, trop contaminee, est vivement condamnee et la famille se retrouve brusquement a la rue, quelques jours avant Noel.

Sans adresse fixe et sans plus aucuns biens a son nom, la famille se refugie temporairement dans une petite chambre d'hotel avant d'etre relocalisee dans un centre d'hebergement.

Avec la communaute qui s'active pour les aider et les medias qui diffusent leur histoire a la television et a la radio, la famille finit par recevoir une offre incroyable : un medecin particulierement touche par leur situation leur offre une grande maison a Longueuil.`,
    image: '/images/history/hist-1B.jpg',
  },
  {
    id: 2,
    year: '2000',
    title: 'Motives par la reconnaissance',
    content: `Remplis de reconnaissance pour tout le support que leur famille a recu, Chantal et son epoux, Sylvain, souhaitent ardemment redonner a la communaute.

Soutenu par les siens, Sylvain ne tarde pas a entamer les demarches qui meneront a la creation de l'Oeuvre des Samaritains, un organisme charitable dont l'objectif premier est de venir en aide aux itinerants.

Comme il a une formation en cuisine francaise, Sylvain sait exactement ce dont il a besoin : des chaudrons, des bruleurs, un camion, un endroit pour entreposer la nourriture, une chambre froide, une cuisiniere, etc.

Il se trouve des collaborateurs, fait part de son projet a d'autres organismes (Moisson Montreal embarque tout de suite dans le projet) et il obtient du materiel de la part d'entreprises locales.`,
    image: '/images/history/hist-2.jpg',
  },
  {
    id: 3,
    year: '2002',
    title: 'Aller nourrir les demunis',
    content: `Deux ans plus tard, en decembre 2002, le reve de Sylvain et de Chantal devient realite. 3 a 4 fois par semaine, a la Place Emilie-Gamelin, Sylvain et sa famille servent de bons repas chauds a plus de 500 personnes.

"Au debut, je croyais nourrir uniquement les sans-abris", confie Sylvain. Il se rend rapidement compte que ce profil ne correspond pas aux nombreuses personnes qui viennent recevoir les repas. Oui, il sert des itinerants mais egalement beaucoup de personnes a loyer.

L'Oeuvre des Samaritains se fait remarquer. Avec les medias qui parlent regulierement de l'organisme, une nouvelle clientele se pointe. La popularite de l'Oeuvre entraine de nouveaux defis.`,
    image: '/images/history/hist-3.jpg',
  },
  {
    id: 4,
    year: '2005',
    title: "L'Oeuvre a pignons sur rue",
    content: `Pour leur cause, Sylvain et Chantal ont transforme leur garage en chambre froide et le sous-sol de leur maison en garde-manger et en cuisine industrielle. La ville de Longueuil est ferme : le couple reside dans un quartier residentiel et doit donc cesser leurs activites culinaires.

C'est ce probleme de zonage qui incite Sylvain a chercher un local a Montreal. En 2005, il implante l'Oeuvre des Samaritains au 10214, rue Lajeunesse. Le centre de distribution alimentaire dessert dorenavant Ahuntsic-Cartierville.

Ne recevant pas d'aide gouvernementale, l'Oeuvre est rapidement confrontee a des difficultes financieres. Ainsi, un bon matin, Sylvain attache ses souliers et entreprend un marche-o-thon pour recueillir des dons, parcourant pour ce faire, 800 km en 35 jours!`,
    image: '/images/history/hist-7.jpg',
  },
  {
    id: 5,
    year: '2007',
    title: 'Meme rue, nouveaux defis',
    content: `En 2007, l'Oeuvre des Samaritains demenage au 9413 rue Lajeunesse, dans un immeuble adequat en termes d'espace, mais qui necessite beaucoup d'entretien. Quand les pluies de 2009 deferlent sur Montreal, le batiment subit un si important refoulement d'egout que l'Oeuvre doit interrompre ses activites pour un temps.

Sylvain et Chantal retroussent leurs manches et remettent rapidement l'Oeuvre en operation. Leur mission demeure aussi claire qu'avant: repondre aux besoins des plus demunis de la communaute.

Lorsque Chantal tombe gravement malade en 2012, la Communaute lui temoigne tant de soutien et de reconnaissance qu'elle en est encore emue aujourd'hui.`,
    image: '/images/history/hist-14.jpg',
  },
  {
    id: 6,
    year: '2016',
    title: 'Le deces du fondateur',
    content: `Le 25 decembre 2016, le coeur de Sylvain, si rempli d'amour pour sa famille et de compassion pour les pauvres, decide subitement de s'arreter. Il decede entoure par les siens, avec toute une communaute qui partage leur deuil.

Le comite d'administration de l'Oeuvre accompagne Chantal alors qu'ils tentent de trouver ensemble des moyens de conserver l'organisme actif. Si Sylvain a longtemps ete le coeur de l'Oeuvre des Samaritains, Chantal en a toujours ete le bras de fer. Pas question pour elle d'abandonner le projet!`,
    image: '/images/history/hist-16.jpg',
  },
  {
    id: 7,
    year: '2017-Present',
    title: 'Un nouveau chapitre',
    content: `Depuis 2017, sous la direction de Chantal Plouffe, l'Oeuvre des Samaritains continue de grandir et de servir la communaute. Chaque annee, nous accueillons plus de 17 000 visites et distribuons des milliers de paniers alimentaires.

Notre equipe de plus de 50 benevoles actifs travaille sans relache pour s'assurer que chaque famille soit accueillie avec dignite et respect. Nous avons egalement developpe des partenariats solides avec d'autres organismes et entreprises locales.

L'histoire de l'Oeuvre des Samaritains est celle de la resilience, de la solidarite et de l'espoir. Elle continue de s'ecrire chaque jour grace a la generosite de nos donateurs et de nos benevoles.`,
    image: '/images/history/hist-17.jpg',
  },
];

export default function HistoriquePage() {
  return (
    <>
      <PageHeader
        title="Notre Historique"
        subtitle="Depuis 2002"
        description="Un parcours de soutien et d'adaptation depuis plus de 20 ans"
        backgroundImage="/images/gallery/food-sorting.jpg"
      />

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              L'histoire de l'Oeuvre des Samaritains est une histoire de compassion, de resilience
              et de solidarite communautaire. Decouvrez comment un simple geste de bonte a donne
              naissance a un organisme qui aide des milliers de familles chaque annee.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 bg-background-alt">
        <Container>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            {historyChapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24 last:mb-0 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                </div>

                {/* Year badge - mobile */}
                <div className="md:hidden ml-10 mb-4">
                  <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    {chapter.year}
                  </span>
                </div>

                {/* Image */}
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:col-start-1 md:row-start-1'}`}>
                  {/* Year badge - desktop */}
                  <span className="hidden md:inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full mb-4">
                    {chapter.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                    {chapter.id}. {chapter.title}
                  </h3>
                  <div className="text-text-muted leading-relaxed whitespace-pre-line">
                    {chapter.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Faites partie de notre histoire
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Notre histoire continue de s'ecrire grace a vous. Rejoignez-nous comme benevole
              ou soutenez notre mission par un don.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Devenir benevole
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Faire un don
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
