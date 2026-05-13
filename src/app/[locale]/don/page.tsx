'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Package, Repeat, CheckCircle, Gift } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const donationAmounts = [25, 50, 100, 250, 500];
const ZEFFY_URL = 'https://www.zeffy.com/fr-CA/o/fundraising/campaigns';

export default function DonPage() {
  const t = useTranslations('donate');
  const impactExamples = t.raw('impact.examples') as Array<{ amount: number; description: string }>;
  const foodItems = t.raw('foodDonation.items') as string[];

  const donationMethods = [
    {
      icon: CreditCard,
      title: t('methods.online.title'),
      description: t('methods.online.description'),
    },
    {
      icon: Package,
      title: t('methods.food.title'),
      description: t('methods.food.description'),
    },
    {
      icon: Repeat,
      title: t('methods.recurring.title'),
      description: t('methods.recurring.description'),
    },
  ];
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');

  const handleDonate = () => {
    window.open(ZEFFY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/groceries.jpg"
      />

      {/* Impact Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('impact.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('impact.title')}
              </h2>
              <p className="text-lg text-text-muted mb-8">
                {t('impact.description')}
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
                  src="/images/homepage/04-distribution-family.jpeg"
                  alt="Famille bénéficiaire"
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
                {t('form.title')}
              </h2>
              <p className="text-lg text-white/80">
                {t('form.description')}
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
                    {t('form.once')}
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
                    {t('form.monthly')}
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-text mb-4">
                    {t('form.selectAmount')}
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
                      placeholder={t('form.otherAmount')}
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
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {donationType === 'monthly' ? t('form.donateMonthly') : t('form.donate')}
                  {(selectedAmount || customAmount) && ` ${selectedAmount || customAmount}$`}
                </Button>

                <p className="text-center text-sm text-text-muted mt-4">
                  {t('form.taxReceipt')}
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
              {t('methods.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('methods.title')}
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
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Gift className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('foodDonation.title')}
              </h2>
              <p className="text-lg text-text-muted mb-6">
                {t('foodDonation.description')}
              </p>

              <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                <h3 className="font-bold text-text text-center">{t('foodDonation.mostNeeded')}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {foodItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-text-muted">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact" size="lg">
                {t('foodDonation.contact')}
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
