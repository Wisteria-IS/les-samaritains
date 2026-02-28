'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  compact?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  description,
  backgroundImage,
  compact = false,
}: PageHeaderProps) {
  return (
    <section className={`relative ${compact ? 'pt-28 pb-12 md:pt-32 md:pb-16' : 'pt-32 pb-16 md:pt-40 md:pb-24'} bg-primary overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-white/5"
        />
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          {subtitle && (
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
