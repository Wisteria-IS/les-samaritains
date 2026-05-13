'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, CreditCard, Truck, Gift, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

export function DonationSection() {
  const { theme } = useTheme();
  const t = useTranslations('donationHome');

  const donationOptions = [
    {
      icon: CreditCard,
      title: t('methods.monetary.title'),
      description: t('methods.monetary.description'),
      href: '/don',
      color: 'primary',
    },
    {
      icon: Truck,
      title: t('methods.food.title'),
      description: t('methods.food.description'),
      href: '/don#alimentaire',
      color: 'secondary',
    },
    {
      icon: Gift,
      title: t('methods.material.title'),
      description: t('methods.material.description'),
      href: '/contact',
      color: 'accent',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Two column intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <FadeIn>
            <span className="text-primary font-medium text-lg mb-4 block">
              {t('subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-xl text-text-muted mb-6">
              {t('description')}
            </p>
            <p className="text-text-muted mb-8">
              {t('orgInfo')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" href="/don">
                <Heart className="w-5 h-5 mr-2" />
                {t('donateButton')}
              </Button>
              <Button variant="outline" size="lg" href="/benevole">
                {t('volunteerButton')}
              </Button>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/homepage/04-distribution-family.jpeg"
                  alt={t('altHelping')}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlapping small image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 w-36 h-36 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden md:block"
              >
                <Image
                  src="/images/homepage/02-volunteer-fruits.jpeg"
                  alt={t('altFruits')}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Donation options - cards */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-text text-center mb-10">
            {t('howToContribute')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {donationOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-background rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-${option.color}/10 flex items-center justify-center mb-6`}>
                  <option.icon className={`w-8 h-8 text-${option.color}`} />
                </div>
                <h4 className="text-xl font-bold text-text mb-3">{option.title}</h4>
                <p className="text-text-muted mb-4">{option.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  {t('learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </FadeIn>

        {/* Charity number */}
        <FadeIn className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-text-muted">
            {t('charityInfo')}
          </p>
          <p className="text-text font-medium mt-2">
            {t('charityNumber')}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
