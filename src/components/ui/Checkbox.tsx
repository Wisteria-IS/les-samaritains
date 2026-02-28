'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, checked, ...props }, ref) => {
    const { theme } = useTheme();
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center cursor-pointer select-none',
          className
        )}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            checked={checked}
            className="sr-only peer"
            {...props}
          />
          <motion.div
            className={cn(
              'w-5 h-5 border-2 rounded-md transition-colors',
              'peer-checked:bg-primary peer-checked:border-primary',
              'peer-focus:ring-2 peer-focus:ring-primary/30',
              theme.components.input.border
            )}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: checked ? 1 : 0,
              opacity: checked ? 1 : 0,
            }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </motion.div>
        </div>
        {label && (
          <span className="ml-3 text-text">{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// Checkbox Group for multiple options
interface CheckboxGroupProps {
  label?: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  className,
  columns = 2,
}: CheckboxGroupProps) {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  };

  return (
    <div className={className}>
      {label && (
        <p className="text-sm font-medium text-text mb-3">{label}</p>
      )}
      <div className={cn('grid gap-3', gridCols[columns])}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            checked={values.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
          />
        ))}
      </div>
    </div>
  );
}
