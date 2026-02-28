'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Package, Repeat, CheckCircle, Gift } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const donationAmounts = [25, 50, 100, 250, 500];

const impactExamples = [
  { amount: 25, description: 'Fournit un panier alimentaire pour une personne' },
  { amount: 50, description: 'Nourrit une famille de 2-3 personnes pour une semaine' },
  { amount: 100, description: 'Aide a preparer un panier de Noel pour une famille' },
  { amount: 250, description: 'Soutient les operations du centre pendant une journee' },
];

const donationMethods = [
  {
    icon: CreditCard,
    title: 'Don en ligne',
    description: 'Faites un don securise par carte de credit ou PayPal.',
  },
  {
    icon: Package,
    title: 'Don de denrees',
    description: 'Apportez des denrees non perissables a notre centre.',
  },
  {
    icon: Repeat,
    title: 'Don mensuel',
    description: 'Soutenez-nous regulierement avec un don recurrent.',
  },
];

export default function DonPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount) {
      // In production, this would redirect to a payment processor
      alert(`Merci! Vous serez redirige vers notre plateforme de paiement pour un don de ${amount}$.`);
    }
  };

  return (
    <>
      <PageHeader
        title="Faire un Don"
        subtitle="Soutenez-nous"
        description="Votre generosite nous permet d'aider des milliers de familles chaque annee"
        backgroundImage="/images/gallery/groceries.jpg"
      />

      {/* Impact Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                Votre impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Chaque don fait une difference
              </h2>
              <p className="text-lg text-text-muted mb-8">
                Votre contribution nous permet de continuer notre mission d'aide
                aux familles dans le besoin. Voici ce que votre don peut accomplir:
              </p>

              <div className="space-y-4">
                {impactExamples.map((example, index) => (
                  <motion.div
                    key={example.amount}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background-alt rounded-xl p-4"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{example.amount}$</span>
                    </div>
                    <p className="text-text">{example.description}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/manger-en-famille.jpeg"
                  alt="Famille beneficiaire"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Faites un don maintenant
              </h2>
              <p className="text-lg text-white/80">
                Choisissez le montant et le type de don qui vous convient.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-6 md:p-8">
                {/* Donation Type Toggle */}
                <div className="flex rounded-xl bg-background-alt p-1 mb-8">
                  <button
                    onClick={() => setDonationType('once')}
                    className={cn(
                      'flex-1 py-3 rounded-lg font-medium transition-all',
                      donationType === 'once'
                        ? 'bg-primary text-white'
                        : 'text-text-muted hover:text-text'
                    )}
                  >
                    Don unique
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={cn(
                      'flex-1 py-3 rounded-lg font-medium transition-all',
                      donationType === 'monthly'
                        ? 'bg-primary text-white'
                        : 'text-text-muted hover:text-text'
                    )}
                  >
                    Don mensuel
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-text mb-4">
                    Selectionnez un montant
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={cn(
                          'py-4 rounded-xl font-bold transition-all',
                          selectedAmount === amount
                            ? 'bg-primary text-white'
                            : 'bg-background-alt text-text hover:bg-primary/10'
                        )}
                      >
                        {amount}$
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Autre montant"
                      className={cn(
                        'w-full pl-8 pr-4 py-4 rounded-xl',
                        'bg-background-alt border border-border',
                        'text-text placeholder:text-text-muted',
                        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
                        'transition-all duration-200'
                      )}
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  onClick={handleDonate}
                  size="lg"
                  className="w-full"
                  disabled={!selectedAmount && !customAmount}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {donationType === 'monthly' ? 'Donner mensuellement' : 'Faire un don'}
                  {(selectedAmount || customAmount) && ` de ${selectedAmount || customAmount}$`}
                </Button>

                <p className="text-center text-sm text-text-muted mt-4">
                  Un recu pour fins d'impot sera emis pour tout don de 20$ et plus.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              Autres facons de donner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Plusieurs options s'offrent a vous
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-alt rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{method.title}</h3>
                <p className="text-text-muted">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Food Donation Info */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/panier.png"
                  alt="Panier de denrees"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <Gift className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Don de denrees alimentaires
              </h2>
              <p className="text-lg text-text-muted mb-6">
                Vous pouvez egalement nous aider en apportant des denrees alimentaires
                non perissables a notre centre de distribution.
              </p>

              <div className="space-y-3 mb-8">
                <h3 className="font-bold text-text">Articles les plus demandes:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    'Conserves de legumes',
                    'Pates alimentaires',
                    'Riz',
                    'Cereales',
                    'Sauce tomate',
                    'Huile de cuisson',
                    'Beurre d\'arachide',
                    'Lait UHT',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact" size="lg">
                Nous contacter pour organiser un don
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
