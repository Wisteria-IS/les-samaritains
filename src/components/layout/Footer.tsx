'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from './Container';
import { cn } from '@/lib/utils';

export function Footer() {
  const { theme } = useTheme();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const footerConfig = theme.components.footer;

  const footerLinks = {
    raccourcis: [
      { label: tNav('aboutDropdown.president'), href: '/president' },
      { label: tNav('aboutDropdown.forWho'), href: '/pour-qui' },
      { label: tNav('aboutDropdown.history'), href: '/historique' },
      { label: tNav('team'), href: '/equipe' },
      { label: tNav('teamDropdown.partners'), href: '/partenaires' },
    ],
    bienfaits: [
      { label: tNav('benefitsDropdown.fruits'), href: '/bienfaits/fruits' },
      { label: tNav('benefitsDropdown.vegetables'), href: '/bienfaits/legumes' },
      { label: tNav('benefitsDropdown.meats'), href: '/bienfaits/viandes' },
      { label: tNav('benefitsDropdown.spices'), href: '/bienfaits/epices' },
    ],
  };

  return (
    <footer className={cn(footerConfig.bg, footerConfig.border)}>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <div className="bg-white rounded-xl p-3 inline-block">
                  <Image
                    src="/logo.png"
                    alt="L'Œuvre des Samaritains"
                    width={180}
                    height={90}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className={cn('text-sm mb-4', footerConfig.text)}>
                {t('description')}
              </p>
              <p className="text-xs text-gray-500">
                {t('charityNumber')}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/Oeuvredessamaritains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1877F2] hover:bg-[#1664d9] transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Raccourcis */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('shortcuts')}</h4>
              <ul className="space-y-2">
                {footerLinks.raccourcis.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm hover:text-primary transition-colors',
                        footerConfig.text
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bienfaits */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('foodBenefits')}</h4>
              <ul className="space-y-2">
                {footerLinks.bienfaits.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm hover:text-primary transition-colors',
                        footerConfig.text
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('contactUs')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=9300+Rue+Lajeunesse,+Montréal,+QC+H2M+1S4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('text-sm hover:text-primary transition-colors', footerConfig.text)}
                  >
                    9300 rue Lajeunesse,<br />
                    Montréal, QC H2M 1S4
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:lds@live.ca"
                    className={cn('text-sm hover:text-primary transition-colors', footerConfig.text)}
                  >
                    lds@live.ca
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+15143884095"
                    className={cn('text-sm hover:text-primary transition-colors', footerConfig.text)}
                  >
                    514 388 4095
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={cn('text-sm', footerConfig.text)}>
              &copy; {new Date().getFullYear()} {t('copyright')}
            </p>
            <p className={cn('text-sm flex items-center gap-1', footerConfig.text)}>
              {t('madeWith')} <Heart className="w-4 h-4 text-primary" /> {t('in')}{' '}
              <a
                href="https://www.nordiqintelligence.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-primary transition-colors"
              >
                <span className="text-white font-semibold">Nordi</span><span className="text-indigo-400 font-semibold">Q</span><span className="text-white font-semibold"> Intelligence</span>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
