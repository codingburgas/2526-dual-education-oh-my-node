import type { Variants } from 'framer-motion';

const revealEase = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: revealEase,
    },
  },
};

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: revealEase,
    },
  },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: revealEase,
    },
  },
};

export const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: revealEase,
    },
  },
};

export const heroRevealVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.8,
      ease: revealEase,
    },
  },
};

export const heroAccentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.2,
      ease: 'easeOut',
      delay,
    },
  }),
};

export const heroSubtleFadeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: revealEase,
      delay,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const whileInViewSettings = {
  viewport: { once: true, amount: 0.25 },
};
