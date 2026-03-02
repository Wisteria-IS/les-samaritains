'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Users } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Mot de la présidente', href: '/president' },
      { label: 'Rapport d\'activités', href: '/rapport' },
      { label: 'Notre historique', href: '/historique' },
      { label: 'C\'est pour qui?', href: '/pour-qui' },
    ],
  },
  {
    label: 'Bienfaits',
    href: '/bienfaits',
    children: [
      { label: 'Les fruits', href: '/bienfaits/fruits' },
      { label: 'Les légumes', href: '/bienfaits/legumes' },
      { label: 'Les viandes', href: '/bienfaits/viandes' },
      { label: 'Épices et herbes', href: '/bienfaits/epices' },
    ],
  },
  {
    label: 'Notre équipe',
    href: '/equipe',
    children: [
      { label: 'L\'équipe', href: '/equipe' },
      { label: 'Nos partenaires', href: '/partenaires' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const { theme } = useTheme();
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
              <span className="text-white/80">Mardi, Jeudi, Vendredi: 13h00-17h00</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              Les Samaritains
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
              Bénévole
            </Button>
            <Button variant="primary" size="md" href="/don" icon={<Heart className="w-5 h-5" />}>
              Faire un don
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
                    Devenir bénévole
                  </Button>
                  <Button variant="primary" className="w-full" href="/don">
                    Faire un don
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
