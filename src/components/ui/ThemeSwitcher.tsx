'use client';

import { motion } from 'framer-motion';
import { Palette, Sun, Leaf } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import type { ThemeName } from '@/themes';

const themeIcons: Record<ThemeName, React.ReactNode> = {
  harvest: <Leaf className="w-4 h-4" />,
  urban: <Sun className="w-4 h-4" />,
};

const themeLabels: Record<ThemeName, string> = {
  harvest: 'Harvest (Warm)',
  urban: 'Urban (Modern)',
};

export function ThemeSwitcher() {
  const { themeName, setTheme, availableThemes } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-surface/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text">Theme</span>
        </div>
        <div className="flex gap-2">
          {(Object.keys(availableThemes) as ThemeName[]).map((name) => (
            <motion.button
              key={name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(name)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all',
                themeName === name
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-background-alt text-text hover:bg-primary/10'
              )}
            >
              {themeIcons[name]}
              <span className="hidden sm:inline">{name}</span>
            </motion.button>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-3 text-center">
          {themeLabels[themeName]}
        </p>
      </div>
    </motion.div>
  );
}
