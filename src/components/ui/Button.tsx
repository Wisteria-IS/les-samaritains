'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, 'size'> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
};

const MotionLink = motion.create(Link);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      className,
      children,
      href,
      external,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const buttonConfig = theme.components.button;
    const variantConfig = buttonConfig[variant];

    const classes = cn(
      // Base styles
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Theme-driven styles
      variantConfig.bg,
      variantConfig.bgHover,
      variantConfig.text,
      variantConfig.border,
      variantConfig.shadow,
      buttonConfig.radius,
      // Size
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    // Render as external link
    if (href && external) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={classes}
        >
          {content}
        </motion.a>
      );
    }

    // Render as internal link
    if (href) {
      return (
        <MotionLink
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={classes}
        >
          {content}
        </MotionLink>
      );
    }

    // Render as button
    const disabled = (props as ButtonAsButton).disabled || loading;

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.15 }}
        disabled={disabled}
        className={classes}
        {...(props as Omit<HTMLMotionProps<'button'>, 'size'>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
