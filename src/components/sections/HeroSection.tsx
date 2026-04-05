import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import {
  heroAccentVariants,
  heroRevealVariants,
  heroSubtleFadeVariants,
} from '../../lib/animations';

export function HeroSection() {
  const { displayName } = useAuth();
  const userName = displayName.slice(0, displayName.indexOf('@'));

  return (
    <section
      id="hero"
      className="min-h-screen bg-linear-to-br from-background via-background to-card flex items-start justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={heroAccentVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={heroAccentVariants}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.08 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.35 }}
          className="absolute inset-x-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
        />
      </div>

      <motion.div className="text-center max-w-3xl relative z-10">
        <motion.div
          variants={heroRevealVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <GraduationCap size={80} className="text-primary mx-auto mb-4" />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            Welcome, <span className="text-primary">{userName}</span>
          </h1>
        </motion.div>

        <motion.p
          variants={heroSubtleFadeVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Track your academic progress, assignments, and achievements in one place.
        </motion.p>

        <motion.div
          variants={heroSubtleFadeVariants}
          initial="hidden"
          animate="visible"
          custom={0.95}
        >
          <a
            href="#overview"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 font-semibold transition-opacity text-lg shadow-md hover:shadow-lg"
          >
            Explore Your Dashboard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
