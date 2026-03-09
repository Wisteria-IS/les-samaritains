// Theme exports and registry

export * from './theme.types';
export { harvestTheme } from './harvest';
export { urbanTheme } from './urban';

import { harvestTheme } from './harvest';
import { urbanTheme } from './urban';
import type { Theme } from './theme.types';

// Theme registry - add new themes here
export const themes = {
  harvest: harvestTheme,
  urban: urbanTheme,
} as const;

export type ThemeName = keyof typeof themes;

export const defaultTheme: ThemeName = 'urban';

// Helper to get theme by name
export function getTheme(name: ThemeName): Theme {
  return themes[name];
}

// Generate CSS variables from theme
export function generateCSSVariables(theme: Theme): Record<string, string> {
  return {
    '--color-primary': theme.colors.primary,
    '--color-primary-dark': theme.colors.primaryDark,
    '--color-primary-light': theme.colors.primaryLight,
    '--color-secondary': theme.colors.secondary,
    '--color-secondary-dark': theme.colors.secondaryDark,
    '--color-accent': theme.colors.accent,
    '--color-background': theme.colors.background,
    '--color-background-alt': theme.colors.backgroundAlt,
    '--color-surface': theme.colors.surface,
    '--color-text': theme.colors.text,
    '--color-text-muted': theme.colors.textMuted,
    '--color-text-inverse': theme.colors.textInverse,
    '--color-border': theme.colors.border,
    '--color-error': theme.colors.error,
    '--color-success': theme.colors.success,
    '--color-warning': theme.colors.warning,
    '--font-heading': theme.typography.fontHeading,
    '--font-body': theme.typography.fontBody,
    '--font-accent': theme.typography.fontAccent || theme.typography.fontBody,
    '--radius-sm': theme.radius.sm,
    '--radius-md': theme.radius.md,
    '--radius-lg': theme.radius.lg,
    '--radius-xl': theme.radius.xl,
    '--shadow-sm': theme.shadows.sm,
    '--shadow-md': theme.shadows.md,
    '--shadow-lg': theme.shadows.lg,
    '--shadow-colored': theme.shadows.colored,
  };
}
