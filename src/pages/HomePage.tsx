import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { OverviewSection } from '../components/sections/OverviewSection';
import { SubjectsSection } from '../components/sections/SubjectsSection';
import { AssignmentsSection } from '../components/sections/AssignmentsSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HeroSection />
        <OverviewSection />
        <SubjectsSection />
        <AssignmentsSection />
        <AchievementsSection />
      </motion.main>
      <Footer />
    </div>
  );
}
