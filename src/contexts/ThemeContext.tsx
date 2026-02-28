'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { themes, defaultTheme, generateCSSVariables } from '@/themes';
import type { Theme, ThemeName } from '@/themes';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  availableThemes: typeof themes;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
}

export function ThemeProvider({ children, initialTheme = defaultTheme }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(initialTheme);
  const theme = themes[themeName];

  // Apply CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const cssVars = generateCSSVariables(theme);

    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Also set data attribute for conditional styling
    root.setAttribute('data-theme', themeName);
  }, [theme, themeName]);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    // Optionally persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', name);
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeName | null;
    if (saved && themes[saved]) {
      setThemeName(saved);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setTheme,
        availableThemes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeContext };
