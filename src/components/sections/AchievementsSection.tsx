import { motion } from 'framer-motion';
import { AchievementBadge } from '../ui/AchievementBadge';
import { achievements } from '../../data/data';
import {
  fadeLeftVariants,
  staggerContainerVariants,
  whileInViewSettings,
} from '../../lib/animations';

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-linear-to-b from-card to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          {...whileInViewSettings}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrate your milestones and awards
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          {...whileInViewSettings}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map(achievement => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
