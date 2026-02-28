'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const { theme } = useTheme();
    const inputConfig = theme.components.input;
    const [isFocused, setIsFocused] = useState(false);

    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <motion.label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              isFocused ? 'text-primary' : 'text-text'
            )}
            animate={{ color: isFocused ? theme.colors.primary : theme.colors.text }}
          >
            {label}
          </motion.label>
        )}
        <motion.input
          ref={ref}
          id={inputId}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            'w-full px-4 py-3 transition-all duration-200',
            'outline-none',
            inputConfig.bg,
            inputConfig.border,
            inputConfig.borderFocus,
            inputConfig.radius,
            inputConfig.text,
            inputConfig.placeholder,
            error && 'border-error focus:border-error focus:ring-error/20',
            className
          )}
          {...props}
        />
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-error"
            >
              {error}
            </motion.p>
          )}
          {hint && !error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-text-muted"
            >
              {hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';
