'use client';

import Link from 'next/link';
import { Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from './Container';
import { cn } from '@/lib/utils';

const footerLinks = {
  raccourcis: [
    { label: 'Mot de la presidente', href: '/president' },
    { label: 'C\'est pour qui?', href: '/pour-qui' },
    { label: 'Notre historique', href: '/historique' },
    { label: 'Notre equipe', href: '/equipe' },
    { label: 'Nos partenaires', href: '/partenaires' },
  ],
  bienfaits: [
    { label: 'Les fruits', href: '/bienfaits/fruits' },
    { label: 'Les legumes', href: '/bienfaits/legumes' },
    { label: 'Les viandes', href: '/bienfaits/viandes' },
    { label: 'Epices et herbes', href: '/bienfaits/epices' },
  ],
};

export function Footer() {
  const { theme } = useTheme();
  const footerConfig = theme.components.footer;

  return (
    <footer className={cn(footerConfig.bg, footerConfig.border)}>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white mb-4">
                  L'Oeuvre des Samaritains
                </h3>
              </Link>
              <p className={cn('text-sm mb-4', footerConfig.text)}>
                Centre de distribution alimentaire
              </p>
              <p className="text-xs text-gray-500">
                Numero de bienfaisance: 86400 9741RR0001
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/Oeuvredessamaritains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Raccourcis */}
            <div>
              <h4 className="text-white font-semibold mb-4">Raccourcis</h4>
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
              <h4 className="text-white font-semibold mb-4">Bienfaits des aliments</h4>
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
              <h4 className="text-white font-semibold mb-4">Nous rejoindre</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className={cn('text-sm', footerConfig.text)}>
                    9300 rue Lajeunesse,<br />
                    Montreal, QC H2M 1S4
                  </span>
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
                    href="tel:5143884095"
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
              &copy; {new Date().getFullYear()} L'Oeuvre des Samaritains. Tous droits reserves.
            </p>
            <p className={cn('text-sm flex items-center gap-1', footerConfig.text)}>
              Fait avec <Heart className="w-4 h-4 text-primary" /> a Montreal
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
