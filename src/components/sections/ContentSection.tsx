'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';

interface ContentSectionProps {
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'alt' | 'primary';
  className?: string;
}

export function ContentSection({
  children,
  image,
  imageAlt = '',
  imagePosition = 'right',
  background = 'white',
  className = '',
}: ContentSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    alt: 'bg-background-alt',
    primary: 'bg-primary text-white',
  };

  return (
    <section className={`py-12 md:py-20 ${bgClasses[background]} ${className}`}>
      <Container>
        {image ? (
          <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>
            <FadeIn className={imagePosition === 'left' ? 'lg:col-start-1' : ''}>
              <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className={imagePosition === 'left' ? 'lg:col-start-2' : ''}>
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <div className="prose prose-lg max-w-4xl mx-auto">
              {children}
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
