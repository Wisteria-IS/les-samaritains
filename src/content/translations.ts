// Centralized content for easy translation
// All text content is organized by page/component

export const content = {
  // Common
  common: {
    cta: {
      contact: 'Nous contacter',
      donate: 'Faire un don',
      volunteer: 'Devenir benevole',
      learnMore: 'En savoir plus',
    },
    contact: {
      address: '3535 Avenue Papineau',
      city: 'Montreal, QC H2K 4J9',
      phone: '(514) 523-5288',
      email: 'info@lessamaritains.net',
    },
    schedule: {
      tuesday: 'Mardi: 10h00 - 14h00',
      wednesday: 'Mercredi: 10h00 - 14h00',
      thursday: 'Jeudi: 10h00 - 14h00',
    },
  },

  // Navigation
  nav: {
    home: 'Accueil',
    about: 'A propos',
    president: 'Mot de la presidente',
    history: 'Notre historique',
    team: 'Notre equipe',
    partners: 'Nos partenaires',
    services: 'Services',
    forWho: "C'est pour qui?",
    benefits: 'Bienfaits',
    fruits: 'Des fruits',
    vegetables: 'Des legumes',
    meats: 'Les viandes',
    spices: 'Fines herbes et epices',
    getInvolved: "S'impliquer",
    volunteer: 'Devenir benevole',
    donate: 'Faire un don',
    contact: 'Contact',
  },

  // Home Page
  home: {
    hero: {
      subtitle: 'Depuis 2002',
      title: 'Ensemble, nourrissons l\'espoir',
      description: 'L\'Oeuvre des Samaritains aide les familles a faible revenu de Montreal en leur offrant des denrees alimentaires et un soutien chaleureux.',
    },
    mission: {
      subtitle: 'Notre mission',
      title: 'Nourrir et inspirer notre communaute',
      description: 'Notre mission va au-dela de la simple distribution alimentaire. Nous nous engageons a soutenir les personnes a faible revenu en leur offrant bien plus qu\'un repas.',
    },
    impact: {
      subtitle: 'Notre impact',
      title: 'Des chiffres qui parlent',
      description: 'Depuis 2002, nous travaillons sans relache pour faire une difference dans la vie des familles montrealaises.',
      stats: {
        visits: { value: 17000, suffix: '+', label: 'visites annuelles' },
        christmas: { value: 800, suffix: '', label: 'familles a Noel' },
        volunteers: { value: 50, suffix: '+', label: 'benevoles actifs' },
        years: { value: 22, suffix: '', label: "annees d'experience" },
      },
    },
  },

  // President Page
  president: {
    title: 'Mot de la Presidente',
    subtitle: 'Notre vision',
    description: 'Un message de notre fondatrice et presidente, Chantal Plouffe',
    name: 'Chantal Plouffe',
    role: 'Presidente et fondatrice',
  },

  // History Page
  history: {
    title: 'Notre Historique',
    subtitle: 'Depuis 2002',
    description: 'Un parcours de soutien et d\'adaptation depuis plus de 20 ans',
  },

  // For Who Page
  forWho: {
    title: "C'est pour qui?",
    subtitle: 'Nos services',
    description: 'Decouvrez qui peut beneficier de nos services d\'aide alimentaire',
    whoWeServe: {
      title: 'Qui a recours aux banques alimentaires?',
      subtitle: 'Il n\'existe pas de profil type unique',
      description: 'Les personnes aidees sont diverses et viennent de tous les horizons. Notre mission est d\'aider toute personne dans le besoin, sans jugement.',
    },
  },

  // Team Page
  team: {
    title: 'Notre Equipe',
    subtitle: 'Qui sommes-nous',
    description: 'Decouvrez les personnes devouees qui font vivre l\'Oeuvre des Samaritains',
  },

  // Partners Page
  partners: {
    title: 'Nos Partenaires',
    subtitle: 'Ensemble',
    description: 'Grace a nos partenaires, nous pouvons aider des milliers de familles chaque annee',
  },

  // Volunteer Page
  volunteer: {
    title: 'Devenir Benevole',
    subtitle: "S'impliquer",
    description: 'Rejoignez notre equipe de benevoles et faites une difference dans votre communaute',
    form: {
      firstName: 'Prenom',
      lastName: 'Nom',
      email: 'Courriel',
      phone: 'Telephone',
      availability: 'Disponibilite',
      motivation: 'Pourquoi souhaitez-vous devenir benevole?',
      submit: 'Soumettre ma candidature',
      success: 'Merci! Nous vous contacterons bientot.',
    },
  },

  // Donate Page
  donate: {
    title: 'Faire un Don',
    subtitle: 'Soutenez-nous',
    description: 'Votre generosite nous permet d\'aider des milliers de familles chaque annee',
    options: {
      oneTime: 'Don unique',
      monthly: 'Don mensuel',
      food: 'Don de denrees',
    },
  },

  // Report Page
  report: {
    title: "Rapport d'Activites",
    subtitle: 'Transparence',
    description: 'Consultez nos rapports annuels et decouvrez l\'impact de votre soutien',
  },

  // Benefits Pages
  benefits: {
    fruits: {
      title: 'Les Fruits',
      subtitle: 'Bienfaits',
      description: 'Decouvrez les bienfaits des fruits que nous distribuons',
    },
    vegetables: {
      title: 'Les Legumes',
      subtitle: 'Bienfaits',
      description: 'Decouvrez les bienfaits des legumes que nous distribuons',
    },
    meats: {
      title: 'Les Viandes',
      subtitle: 'Bienfaits',
      description: 'Decouvrez les bienfaits des viandes que nous distribuons',
    },
    spices: {
      title: 'Fines Herbes et Epices',
      subtitle: 'Bienfaits',
      description: 'Decouvrez les bienfaits des fines herbes et epices',
    },
  },

  // Contact Page
  contact: {
    title: 'Nous Joindre',
    subtitle: 'Contact',
    description: 'Vous avez des questions? N\'hesitez pas a nous contacter.',
    form: {
      name: 'Nom complet',
      email: 'Courriel',
      phone: 'Telephone',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer le message',
      success: 'Message envoye! Nous vous repondrons dans les plus brefs delais.',
      subjects: {
        general: 'Question generale',
        volunteer: 'Benevolat',
        donation: 'Don',
        partnership: 'Partenariat',
        other: 'Autre',
      },
    },
  },
};

export type ContentType = typeof content;
