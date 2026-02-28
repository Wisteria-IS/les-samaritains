'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Users, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/animations/CountUp';

// Floating food items for Harvest theme - smoother, gentler movement
const floatingFoods = [
  { src: '/images/bienfaits/fruits/cerises.jpg', alt: 'Cerises', size: 'w-16 h-16 md:w-24 md:h-24', position: 'top-[15%] right-[5%] md:right-[8%]', delay: 0, duration: 8, yRange: [-6, 6] },
  { src: '/images/bienfaits/legumes/carottes.jpg', alt: 'Carottes', size: 'w-20 h-20 md:w-28 md:h-28', position: 'top-[35%] right-[2%] md:right-[12%]', delay: 0.5, duration: 9, yRange: [-8, 4] },
  { src: '/images/bienfaits/fruits/pommes.jpg', alt: 'Pommes', size: 'w-14 h-14 md:w-20 md:h-20', position: 'top-[55%] right-[8%] md:right-[5%]', delay: 1, duration: 10, yRange: [-5, 7] },
  { src: '/images/bienfaits/legumes/brocoli.webp', alt: 'Brocoli', size: 'w-18 h-18 md:w-24 md:h-24', position: 'top-[70%] right-[15%] md:right-[15%]', delay: 1.5, duration: 8.5, yRange: [-6, 6] },
  { src: '/images/bienfaits/viandes/volaille.jpg', alt: 'Volaille', size: 'w-16 h-16 md:w-22 md:h-22', position: 'top-[25%] right-[18%] md:right-[22%]', delay: 2, duration: 9.5, yRange: [-7, 5] },
  { src: '/images/bienfaits/fruits/fraises.jpg', alt: 'Fraises', size: 'w-12 h-12 md:w-16 md:h-16', position: 'top-[45%] right-[22%] md:right-[18%]', delay: 0.8, duration: 8, yRange: [-4, 6] },
  { src: '/images/bienfaits/legumes/oignon.jpg', alt: 'Oignon', size: 'w-14 h-14 md:w-18 md:h-18', position: 'top-[80%] right-[5%] md:right-[8%]', delay: 1.2, duration: 9, yRange: [-5, 5] },
  { src: '/images/bienfaits/viandes/boeufs.jpeg', alt: 'Boeuf', size: 'w-16 h-16 md:w-20 md:h-20', position: 'top-[60%] right-[25%] md:right-[25%]', delay: 0.3, duration: 10, yRange: [-6, 6] },
];

export function Hero() {
  const { theme, themeName } = useTheme();
  const heroConfig = theme.components.hero;

  if (heroConfig.style === 'fullwidth') {
    return <HeroUrban />;
  }

  return <HeroHarvest />;
}

// Hero for Harvest theme - Full screen with zoom-in effect
function HeroHarvest() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Fallback background color while image loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-amber-50" />

      {/* Full-width background image with looping zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      >
        <Image
          src="/images/hero/hands-hd.jpg"
          alt="Communaute solidaire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Overlay gradient - from light to full visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/10" />

      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-secondary/5"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-20 min-h-screen flex items-center py-20 md:py-24 lg:py-32">
        <div className="max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 md:mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Depuis 2002 au service de la communaute
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text leading-[1.05] mb-4 md:mb-6"
          >
            <span className="block">Nourrir.</span>
            <span className="block text-primary">Soutenir.</span>
            <span className="block text-secondary">Inspirer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-text font-medium leading-relaxed mb-6 md:mb-8"
          >
            L'Oeuvre des Samaritains aide les familles dans le besoin avec des aliments
            frais et nutritifs. Ensemble, faisons la difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10"
          >
            <Button size="lg" href="/don" className="w-full sm:w-auto justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Faire un don
            </Button>
            <Button variant="outline" size="lg" href="/benevole" className="w-full sm:w-auto justify-center">
              <Users className="w-5 h-5 mr-2" />
              Devenir benevole
            </Button>
          </motion.div>

          {/* Stats - responsive grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                <CountUp end={17000} suffix="+" duration={3} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-text">visites/an</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
                <CountUp end={800} duration={2.5} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-text">familles a Noel</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent">22+</div>
              <p className="text-xs sm:text-sm font-medium text-text">ans</p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating images on the right */}
      <div className="absolute right-[8%] lg:right-[10%] xl:right-[12%] top-1/2 -translate-y-1/2 hidden lg:block z-30">
        <div className="relative">
          {/* Main image - vegetables - wider */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[400px] h-[40vh] lg:w-[500px] lg:h-[45vh] xl:w-[600px] xl:h-[50vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/food/vegetables-hd.jpg"
                alt="Legumes frais"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Top-right floating image - smallest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: [0, 4, 0, -4, 0] }}
            transition={{
              opacity: { delay: 0.9, duration: 0.5 },
              scale: { delay: 0.9, duration: 0.5 },
              x: { delay: 1.4, duration: 6, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -top-8 -right-10 lg:-top-10 lg:-right-14"
          >
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white rotate-6">
              <Image
                src="/images/bienfaits/fruits/fraises.jpg"
                alt="Fruits frais"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bottom-right floating image - largest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: [0, -5, 0, 5, 0] }}
            transition={{
              opacity: { delay: 1.1, duration: 0.5 },
              scale: { delay: 1.1, duration: 0.5 },
              x: { delay: 1.6, duration: 7, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -bottom-8 -right-12 lg:-bottom-12 lg:-right-16"
          >
            <div className="relative w-44 h-44 lg:w-56 lg:h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white -rotate-3">
              <Image
                src="/images/bienfaits/legumes/carottes.jpg"
                alt="Carottes"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bottom-left floating image - medium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: [0, 3, 0, -3, 0] }}
            transition={{
              opacity: { delay: 1.3, duration: 0.5 },
              scale: { delay: 1.3, duration: 0.5 },
              x: { delay: 1.8, duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -bottom-10 -left-14 lg:-bottom-14 lg:-left-20"
          >
            <div className="relative w-36 h-28 lg:w-48 lg:h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white rotate-3">
              <Image
                src="/images/gallery/helping.jpg"
                alt="Aide"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-text font-medium hidden md:block">Defiler</span>
          <div className="w-5 h-8 border-2 border-text rounded-full flex items-start justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-text rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Hero for Urban theme - Full screen dark with modern layout
function HeroUrban() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f2820]">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/loading-food.jpg"
          alt="Benevoles en action"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2820] via-[#0f2820]/90 to-[#0f2820]/60" />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10"
      />

      {/* Decorative blurred circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 min-h-screen flex items-center py-20 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 text-white/80 rounded-full text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Au service de la communaute depuis 2002
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 md:mb-6"
            >
              L'occasion de changer
              <br />
              <span className="text-secondary">la vie des autres</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 md:mb-8 max-w-lg"
            >
              Joignez-vous a nous pour soutenir ceux qui en ont besoin. Chaque don compte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10"
            >
              <Button size="lg" href="/don" className="w-full sm:w-auto justify-center">
                Faire un don
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/benevole"
                className="w-full sm:w-auto justify-center border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Devenir benevole
              </Button>
            </motion.div>

            {/* Stats - responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 md:gap-8"
            >
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={17000} suffix="+" duration={3} />
                </div>
                <p className="text-xs sm:text-sm text-white/60">visites/an</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                  <CountUp end={800} duration={2.5} />
                </div>
                <p className="text-xs sm:text-sm text-white/60">familles a Noel</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">22+</div>
                <p className="text-xs sm:text-sm text-white/60">ans</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Floating images (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block h-[700px]"
          >
            {/* Main floating image - larger */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-[400px] h-[520px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/gallery/groceries.jpg"
                  alt="Epicerie"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Floating food bubbles - spread around with 3 on image edges */}

            {/* EDGE OVERLAPPING - 3 bubbles on the image border */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[8%] left-[42%] z-20"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/40 shadow-xl">
                <Image src="/images/bienfaits/fruits/cerises.jpg" alt="Cerises" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              className="absolute bottom-[5%] left-[38%] z-20"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-xl">
                <Image src="/images/bienfaits/viandes/volaille.jpg" alt="Volaille" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'linear', delay: 1 }}
              className="absolute top-[40%] right-[18%] z-20"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-xl">
                <Image src="/images/bienfaits/fruits/fraises.jpg" alt="Fraises" fill className="object-cover" />
              </div>
            </motion.div>

            {/* SPREAD AROUND - outer bubbles */}
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              className="absolute -top-6 right-4"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/legumes/carottes.jpg" alt="Carottes" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
              className="absolute bottom-4 -right-8"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/legumes/brocoli.webp" alt="Brocoli" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 0.8 }}
              className="absolute top-[15%] -left-10"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/fruits/pommes.jpg" alt="Pommes" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: 2 }}
              className="absolute bottom-[20%] -left-6"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/legumes/oignon.jpg" alt="Oignon" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 1.8 }}
              className="absolute top-[65%] -right-12"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/viandes/boeufs.jpeg" alt="Boeuf" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 0.6 }}
              className="absolute top-[50%] -left-14"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image src="/images/bienfaits/legumes/brocoli.webp" alt="Legume" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 hidden md:block">Defiler</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
