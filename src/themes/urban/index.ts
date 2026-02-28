// Theme B: "Urban Care" - Professional & Peaceful
// Vibe: Trusted institution, calming and nature-inspired

import type { Theme } from '../theme.types';

export const urbanTheme: Theme = {
  name: 'urban',
  displayName: 'Urban Care',

  colors: {
    primary: '#234E3E',        // Peaceful Forest Green
    primaryDark: '#1A3A2E',
    primaryLight: '#3D6B5A',
    secondary: '#E07A5F',      // Warm Terracotta
    secondaryDark: '#C4563D',
    accent: '#F4A261',         // Golden Orange
    background: '#FAFDF9',     // Soft Green-tinted White
    backgroundAlt: '#F2F7F4',  // Light Sage
    surface: '#FFFFFF',
    text: '#2D3D36',           // Dark Green-Gray
    textMuted: '#5A6E64',
    textInverse: '#FFFFFF',
    border: '#D8E5DE',         // Soft Green Border
    error: '#DC2626',
    success: '#059669',
    warning: '#D97706',
  },

  typography: {
    fontHeading: '"Outfit", sans-serif',
    fontBody: '"DM Sans", sans-serif',
    fontAccent: '"Space Grotesk", sans-serif',
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
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
    full: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(35, 78, 62, 0.05)',
    md: '0 4px 6px -1px rgba(35, 78, 62, 0.08), 0 2px 4px -2px rgba(35, 78, 62, 0.05)',
    lg: '0 10px 15px -3px rgba(35, 78, 62, 0.1), 0 4px 6px -4px rgba(35, 78, 62, 0.05)',
    xl: '0 20px 25px -5px rgba(35, 78, 62, 0.1), 0 8px 10px -6px rgba(35, 78, 62, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(35, 78, 62, 0.05)',
    colored: '0 10px 30px -5px rgba(35, 78, 62, 0.25)',
  },

  animations: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms',
    },
    easing: {
      default: [0.4, 0, 0.2, 1],
      bounce: [0.34, 1.56, 0.64, 1],
      smooth: [0.22, 1, 0.36, 1],
    },
  },

  components: {
    button: {
      primary: {
        bg: 'bg-primary',
        bgHover: 'hover:bg-primary-dark',
        text: 'text-white font-semibold',
        shadow: 'shadow-md',
      },
      secondary: {
        bg: 'bg-secondary',
        bgHover: 'hover:bg-secondary-dark',
        text: 'text-white font-semibold',
      },
      outline: {
        bg: 'bg-transparent',
        bgHover: 'hover:bg-primary hover:text-white',
        text: 'text-primary',
        border: 'border-2 border-primary',
      },
      ghost: {
        bg: 'bg-transparent',
        bgHover: 'hover:bg-background-alt',
        text: 'text-text',
      },
      radius: 'rounded-md',
    },

    card: {
      bg: 'bg-surface',
      border: 'border border-border',
      radius: 'rounded-xl',
      shadow: 'shadow-sm',
      hoverShadow: 'hover:shadow-lg',
      hoverTransform: 'hover:border-primary/50',
    },

    input: {
      bg: 'bg-surface',
      border: 'border border-border',
      borderFocus: 'focus:border-primary focus:ring-2 focus:ring-primary/20',
      radius: 'rounded-lg',
      text: 'text-text',
      placeholder: 'placeholder:text-text-muted',
    },

    header: {
      style: 'solid',
      bg: 'bg-surface',
      blur: false,
      border: 'border-b border-border',
    },

    hero: {
      style: 'fullwidth',
      overlay: 'bg-gradient-to-t from-black/70 via-black/50 to-black/30',
      alignment: 'center',
    },

    footer: {
      bg: 'bg-primary',
      text: 'text-white/80',
      border: 'border-t border-primary-dark',
    },
  },
};
