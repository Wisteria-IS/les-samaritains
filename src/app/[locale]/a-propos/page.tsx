'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/Button';
import { DONATION_URL } from '@/lib/constants';

export default function AProposPage() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Heart,
      title: t('values.compassion'),
      description: t('values.compassionDesc'),
    },
    {
      icon: Users,
      title: t('values.solidarity'),
      description: t('values.solidarityDesc'),
    },
    {
      icon: Target,
      title: t('values.commitment'),
      description: t('values.commitmentDesc'),
    },
    {
      icon: Award,
      title: t('values.integrity'),
      description: t('values.integrityDesc'),
    },
  ];

  const links = [
    {
      title: t('links.president'),
      description: t('links.presidentDesc'),
      href: '/president',
    },
    {
      title: t('links.history'),
      description: t('links.historyDesc'),
      href: '/historique',
    },
    {
      title: t('links.forWho'),
      description: t('links.forWhoDesc'),
      href: '/pour-qui',
    },
    {
      title: t('links.team'),
      description: t('links.teamDesc'),
      href: '/equipe',
    },
  ];
  return (
    <>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        backgroundImage="/images/gallery/groceries.jpg"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-secondary font-medium text-lg mb-4 block">
                {t('whoWeAre')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                {t('communityService')}
              </h2>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-text-muted">
                <p className="text-lg leading-relaxed mb-6">
                  {t('intro1')}
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  {t('intro2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('intro3')}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-background-alt">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('values.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t('values.title')}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-medium text-lg mb-4 block">
              {t('learnMore')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t('explorePages')}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group block bg-background-alt rounded-2xl p-6 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-text-muted">{link.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={DONATION_URL} external size="lg" className="bg-white text-primary hover:bg-white/90">
                {t('cta.donate')}
              </Button>
              <Button href="/benevole" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {t('cta.volunteer')}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
