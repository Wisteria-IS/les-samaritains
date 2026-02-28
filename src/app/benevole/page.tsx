'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Clock, Users, Award, Send, CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Heart,
    title: 'Faire une difference',
    description: 'Contribuez directement a ameliorer la vie des familles dans le besoin.',
  },
  {
    icon: Users,
    title: 'Rejoindre une communaute',
    description: 'Integrez une equipe chaleureuse et accueillante de benevoles passionnes.',
  },
  {
    icon: Clock,
    title: 'Horaires flexibles',
    description: 'Choisissez les heures qui conviennent a votre emploi du temps.',
  },
  {
    icon: Award,
    title: 'Developper vos competences',
    description: 'Acquérez de nouvelles aptitudes et enrichissez votre experience.',
  },
];

const roles = [
  {
    title: 'Tri des denrees',
    description: 'Trier et organiser les produits alimentaires recus.',
  },
  {
    title: 'Accueil des beneficiaires',
    description: 'Accueillir les familles avec chaleur et respect.',
  },
  {
    title: 'Preparation des paniers',
    description: 'Assembler les paniers alimentaires pour la distribution.',
  },
  {
    title: 'Distribution',
    description: 'Aider a la distribution des denrees aux familles.',
  },
];

const availabilityOptions = [
  { value: 'mardi_matin', label: 'Mardi matin (9h-12h)' },
  { value: 'mardi_apres', label: 'Mardi apres-midi (12h-15h)' },
  { value: 'mercredi_matin', label: 'Mercredi matin (9h-12h)' },
  { value: 'mercredi_apres', label: 'Mercredi apres-midi (12h-15h)' },
  { value: 'jeudi_matin', label: 'Jeudi matin (9h-12h)' },
  { value: 'jeudi_apres', label: 'Jeudi apres-midi (12h-15h)' },
  { value: 'weekend', label: 'Fins de semaine (occasionnel)' },
];

export default function BenevolePage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    availability: [] as string[],
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAvailabilityChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter(v => v !== value)
        : [...prev.availability, value],
    }));
  };

  return (
    <>
      <PageHeader
        title="Devenir Benevole"
        subtitle="S'impliquer"
        description="Rejoignez notre equipe de benevoles et faites une difference dans votre communaute"
        backgroundImage="/images/hero/hands-hd.jpg"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi devenir benevole?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Le benevolat est une experience enrichissante qui vous permet de
              contribuer a votre communaute tout en developpant de nouvelles competences.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-alt rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                Roles disponibles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Comment pouvez-vous aider?
              </h2>
              <p className="text-lg text-text-muted mb-8">
                Nous avons besoin de benevoles pour differentes taches. Que vous
                ayez quelques heures ou une journee complete, chaque contribution compte!
              </p>

              <div className="space-y-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text">{role.title}</h3>
                      <p className="text-text-muted text-sm">{role.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/food-sorting.jpg"
                  alt="Benevoles en action"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-secondary font-medium text-lg mb-4 block">
                Formulaire d'inscription
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Rejoignez notre equipe
              </h2>
              <p className="text-lg text-text-muted">
                Remplissez le formulaire ci-dessous et nous vous contacterons
                pour discuter de votre implication.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-background-alt rounded-2xl p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Candidature envoyee!
                    </h3>
                    <p className="text-text-muted">
                      Merci de votre interet! Nous vous contacterons dans les plus brefs delais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                          Prenom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder="Votre prenom"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formState.lastName}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                          Courriel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder="votre@courriel.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                          Telephone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl',
                            'bg-white border border-border',
                            'text-text placeholder:text-text-muted',
                            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                            'transition-all duration-200'
                          )}
                          placeholder="(514) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-3">
                        Disponibilite *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availabilityOptions.map((option) => (
                          <label
                            key={option.value}
                            className={cn(
                              'flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all',
                              formState.availability.includes(option.value)
                                ? 'bg-primary text-white'
                                : 'bg-white border border-border hover:border-primary'
                            )}
                          >
                            <input
                              type="checkbox"
                              checked={formState.availability.includes(option.value)}
                              onChange={() => handleAvailabilityChange(option.value)}
                              className="sr-only"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-text mb-2">
                        Pourquoi souhaitez-vous devenir benevole? *
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        required
                        rows={4}
                        value={formState.motivation}
                        onChange={handleChange}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl resize-none',
                          'bg-white border border-border',
                          'text-text placeholder:text-text-muted',
                          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                          'transition-all duration-200'
                        )}
                        placeholder="Parlez-nous de vos motivations..."
                      />
                    </div>

                    <Button type="submit" size="lg" loading={isSubmitting} className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Soumettre ma candidature
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
