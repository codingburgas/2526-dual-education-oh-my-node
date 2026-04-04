import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import { fadeInVariants } from '../../lib/animations';

export function HeroSection() {
  const ref = useRef(null);
  const { session } = useAuth();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const taglines = [
    'Track your academic progress',
    'Stay on top of your assignments',
    'Visualize your achievements',
    'Reach your academic goals',
  ];

  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex(prevIndex => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const userEmail = session?.user?.email || '';
  const userName = userEmail.slice(0, userEmail.indexOf('@'));

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen bg-linear-to-br from-background via-background to-card flex items-start justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div style={{ y }} className="text-center max-w-3xl relative z-10">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="mb-4">
            <GraduationCap size={80} className="text-primary mx-auto" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            Welcome, <span className="text-primary">{userName}</span>
          </h1>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={taglineIndex}
            variants={fadeInVariants}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {taglines[taglineIndex]}
          </motion.p>
        </AnimatePresence>

        <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
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
