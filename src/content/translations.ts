// Centralized content for easy translation
// All text content is organized by page/component

export const content = {
  // Common
  common: {
    cta: {
      contact: 'Nous contacter',
      donate: 'Faire un don',
      volunteer: 'Devenir bénévole',
      learnMore: 'En savoir plus',
    },
    contact: {
      address: '9300 Rue Lajeunesse',
      city: 'Montréal, QC H2M 1S4',
      phone: '514 388 4095',
      email: 'lds@live.ca',
    },
    schedule: {
      tuesday: 'Mardi: 13h00 - 17h00',
      thursday: 'Jeudi: 13h00 - 17h00',
      friday: 'Vendredi: 13h00 - 17h00',
    },
  },

  // Navigation
  nav: {
    home: 'Accueil',
    about: 'À propos',
    president: 'Mot de la présidente',
    history: 'Notre historique',
    team: 'Notre équipe',
    partners: 'Nos partenaires',
    services: 'Services',
    forWho: "C'est pour qui?",
    benefits: 'Bienfaits',
    fruits: 'Des fruits',
    vegetables: 'Des légumes',
    meats: 'Les viandes',
    spices: 'Fines herbes et épices',
    getInvolved: "S'impliquer",
    volunteer: 'Devenir bénévole',
    donate: 'Faire un don',
    contact: 'Contact',
  },

  // Home Page
  home: {
    hero: {
      subtitle: 'Depuis 2002',
      title: 'Ensemble, nourrissons l\'espoir',
      description: 'L\'Oeuvre des Samaritains aide les familles à faible revenu de Montréal en leur offrant des denrées alimentaires et un soutien chaleureux.',
    },
    mission: {
      subtitle: 'Notre mission',
      title: 'Nourrir et inspirer notre communauté',
      description: 'Notre mission va au-delà de la simple distribution alimentaire. Nous nous engageons à soutenir les personnes à faible revenu en leur offrant bien plus qu\'un repas.',
    },
    impact: {
      subtitle: 'Notre impact',
      title: 'Des chiffres qui parlent',
      description: 'Depuis 2002, nous travaillons sans relâche pour faire une différence dans la vie des familles montréalaises.',
      stats: {
        visits: { value: 17000, suffix: '+', label: 'visites annuelles' },
        christmas: { value: 800, suffix: '', label: 'familles à Noël' },
        volunteers: { value: 50, suffix: '+', label: 'bénévoles actifs' },
        years: { value: 22, suffix: '', label: "années d'expérience" },
      },
    },
  },

  // President Page
  president: {
    title: 'Mot de la Présidente',
    subtitle: 'Notre vision',
    description: 'Un message de notre fondatrice et présidente, Chantal Plouffe',
    name: 'Chantal Plouffe',
    role: 'Présidente et fondatrice',
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
    description: 'Découvrez qui peut bénéficier de nos services d\'aide alimentaire',
    whoWeServe: {
      title: 'Qui a recours aux banques alimentaires?',
      subtitle: 'Il n\'existe pas de profil type unique',
      description: 'Les personnes aidées sont diverses et viennent de tous les horizons. Notre mission est d\'aider toute personne dans le besoin, sans jugement.',
    },
  },

  // Team Page
  team: {
    title: 'Notre Équipe',
    subtitle: 'Qui sommes-nous',
    description: 'Découvrez les personnes dévouées qui font vivre l\'Oeuvre des Samaritains',
  },

  // Partners Page
  partners: {
    title: 'Nos Partenaires',
    subtitle: 'Ensemble',
    description: 'Grâce à nos partenaires, nous pouvons aider des milliers de familles chaque année',
  },

  // Volunteer Page
  volunteer: {
    title: 'Devenir Bénévole',
    subtitle: "S'impliquer",
    description: 'Rejoignez notre équipe de bénévoles et faites une différence dans votre communauté',
    form: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Courriel',
      phone: 'Téléphone',
      availability: 'Disponibilité',
      motivation: 'Pourquoi souhaitez-vous devenir bénévole?',
      submit: 'Soumettre ma candidature',
      success: 'Merci! Nous vous contacterons bientôt.',
    },
  },

  // Donate Page
  donate: {
    title: 'Faire un Don',
    subtitle: 'Soutenez-nous',
    description: 'Votre générosité nous permet d\'aider des milliers de familles chaque année',
    options: {
      oneTime: 'Don unique',
      monthly: 'Don mensuel',
      food: 'Don de denrées',
    },
  },

  // Report Page
  report: {
    title: "Rapport d'Activités",
    subtitle: 'Transparence',
    description: 'Consultez nos rapports annuels et découvrez l\'impact de votre soutien',
  },

  // Benefits Pages
  benefits: {
    fruits: {
      title: 'Les Fruits',
      subtitle: 'Bienfaits',
      description: 'Découvrez les bienfaits des fruits que nous distribuons',
    },
    vegetables: {
      title: 'Les Légumes',
      subtitle: 'Bienfaits',
      description: 'Découvrez les bienfaits des légumes que nous distribuons',
    },
    meats: {
      title: 'Les Viandes',
      subtitle: 'Bienfaits',
      description: 'Découvrez les bienfaits des viandes que nous distribuons',
    },
    spices: {
      title: 'Fines Herbes et Épices',
      subtitle: 'Bienfaits',
      description: 'Découvrez les bienfaits des fines herbes et épices',
    },
  },

  // Contact Page
  contact: {
    title: 'Nous Joindre',
    subtitle: 'Contact',
    description: 'Vous avez des questions? N\'hésitez pas à nous contacter.',
    form: {
      name: 'Nom complet',
      email: 'Courriel',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer le message',
      success: 'Message envoyé! Nous vous répondrons dans les plus brefs délais.',
      subjects: {
        general: 'Question générale',
        volunteer: 'Bénévolat',
        donation: 'Don',
        partnership: 'Partenariat',
        other: 'Autre',
      },
    },
  },
};

export type ContentType = typeof content;
