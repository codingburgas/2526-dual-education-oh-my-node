import type { Variants } from 'framer-motion';

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

export const whileInViewSettings = {
  viewport: { once: true, amount: 0.2 },
};
