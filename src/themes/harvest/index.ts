// Theme A: "Harvest" - Warm & Organic
// Vibe: Rustic farmhouse kitchen, farmers market, home cooking, community potluck

import type { Theme } from '../theme.types';

export const harvestTheme: Theme = {
  name: 'harvest',
  displayName: 'Harvest',

  colors: {
    primary: '#E07A5F',        // Terracotta
    primaryDark: '#C4563D',
    primaryLight: '#F0A08A',
    secondary: '#81B29A',      // Sage Green
    secondaryDark: '#5E8F77',
    accent: '#F4A261',         // Sandy Orange
    background: '#FDF8F3',     // Warm White
    backgroundAlt: '#F5EDE4',  // Cream
    surface: '#FFFFFF',
    text: '#3D405B',           // Soft Navy
    textMuted: '#6B7280',
    textInverse: '#FFFFFF',
    border: '#E5DDD3',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
  },

  typography: {
    fontHeading: '"Plus Jakarta Sans", sans-serif',
    fontBody: '"Inter", sans-serif',
    fontAccent: '"Caveat", cursive',
    scale: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  spacing: {
    unit: 4,
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '7rem',
    },
    container: '1280px',
    gap: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
  },

  radius: {
    none: '0',
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(61, 64, 91, 0.05)',
    md: '0 4px 6px -1px rgba(61, 64, 91, 0.07), 0 2px 4px -2px rgba(61, 64, 91, 0.05)',
    lg: '0 10px 15px -3px rgba(61, 64, 91, 0.08), 0 4px 6px -4px rgba(61, 64, 91, 0.05)',
    xl: '0 20px 25px -5px rgba(61, 64, 91, 0.1), 0 8px 10px -6px rgba(61, 64, 91, 0.05)',
    inner: 'inset 0 2px 4px 0 rgba(61, 64, 91, 0.05)',
    colored: '0 10px 30px -5px rgba(224, 122, 95, 0.3)',
  },

  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: [0.4, 0, 0.2, 1],
      bounce: [0.68, -0.55, 0.265, 1.55],
      smooth: [0.23, 1, 0.32, 1],
    },
  },

  components: {
    button: {
      primary: {
        bg: 'bg-primary',
        bgHover: 'hover:bg-primary-dark',
        text: 'text-white',
        shadow: 'shadow-lg shadow-primary/30',
      },
      secondary: {
        bg: 'bg-secondary',
        bgHover: 'hover:bg-secondary-dark',
        text: 'text-white',
      },
      outline: {
        bg: 'bg-transparent',
        bgHover: 'hover:bg-primary/10',
        text: 'text-primary',
        border: 'border-2 border-primary',
      },
      ghost: {
        bg: 'bg-transparent',
        bgHover: 'hover:bg-background-alt',
        text: 'text-text',
      },
      radius: 'rounded-xl',
    },

    card: {
      bg: 'bg-surface',
      border: 'border border-border',
      radius: 'rounded-2xl',
      shadow: 'shadow-lg',
      hoverShadow: 'hover:shadow-xl',
      hoverTransform: 'hover:-translate-y-2',
    },

    input: {
      bg: 'bg-surface',
      border: 'border-2 border-border',
      borderFocus: 'focus:border-primary',
      radius: 'rounded-xl',
      text: 'text-text',
      placeholder: 'placeholder:text-text-muted',
    },

    header: {
      style: 'floating',
      bg: 'bg-surface/90 backdrop-blur-md',
      blur: true,
      border: 'border-b border-border/50',
    },

    hero: {
      style: 'split',
      overlay: 'bg-gradient-to-r from-background/95 to-background/50',
      alignment: 'left',
    },

    footer: {
      bg: 'bg-[#3D405B]',
      text: 'text-[#E5DDD3]',
      border: '',
    },
  },
};
