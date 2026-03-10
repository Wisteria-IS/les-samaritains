'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Users, Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function Header() {
  const { theme } = useTheme();
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');

  const navigation: NavItem[] = [
    { label: t('home'), href: '/' },
    {
      label: t('about'),
      href: '/a-propos',
      children: [
        { label: t('aboutDropdown.president'), href: '/president' },
        { label: t('aboutDropdown.report'), href: '/rapport' },
        { label: t('aboutDropdown.history'), href: '/historique' },
        { label: t('aboutDropdown.forWho'), href: '/pour-qui' },
      ],
    },
    {
      label: t('benefits'),
      href: '/bienfaits',
      children: [
        { label: t('benefitsDropdown.fruits'), href: '/bienfaits/fruits' },
        { label: t('benefitsDropdown.vegetables'), href: '/bienfaits/legumes' },
        { label: t('benefitsDropdown.meats'), href: '/bienfaits/viandes' },
        { label: t('benefitsDropdown.spices'), href: '/bienfaits/epices' },
      ],
    },
    {
      label: t('team'),
      href: '/equipe',
      children: [
        { label: t('teamDropdown.team'), href: '/equipe' },
        { label: t('teamDropdown.partners'), href: '/partenaires' },
      ],
    },
    { label: t('contact'), href: '/contact' },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const headerConfig = theme.components.header;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        headerConfig.bg,
        headerConfig.blur && 'backdrop-blur-md',
        headerConfig.border
      )}
    >
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span>9300 Rue Lajeunesse, Montréal, QC H2M 1S4</span>
              <span>lds@live.ca</span>
              <span>514 388 4095</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">{tHeader('hours')}</span>
              <a
                href="https://www.facebook.com/Oeuvredessamaritains"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-[#1877F2] hover:bg-[#1664d9] transition-colors"
                aria-label={tHeader('followFacebook')}
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.03 }}>
              <Image
                src="/logo.png"
                alt="L'Œuvre des Samaritains"
                width={200}
                height={100}
                className="h-14 lg:h-18 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-text hover:text-primary transition-colors',
                    'flex items-center gap-1'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'absolute top-full left-0 mt-1 py-2 min-w-[200px]',
                        'bg-surface rounded-xl shadow-xl border border-border'
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-text hover:bg-background-alt hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="md" href="/benevole" icon={<Users className="w-5 h-5" />}>
              {t('volunteer')}
            </Button>
            <Button variant="primary" size="md" href="/don" icon={<Heart className="w-5 h-5" />}>
              {t('donate')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-t border-border"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-2 text-text hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-1.5 text-sm text-text-muted hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full" href="/benevole">
                    {t('volunteer')}
                  </Button>
                  <Button variant="primary" className="w-full" href="/don">
                    {t('donate')}
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
