import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AchievementBadge } from '../ui/AchievementBadge';
import { achievements } from '../../data/data';
import { fadeInVariants, whileInViewSettings } from '../../lib/animations';

export function AchievementsSection() {
  const ref = useRef(null);

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 px-4 bg-linear-to-b from-card to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInVariants}
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

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(achievement => (
            <motion.div
              key={achievement.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              {...whileInViewSettings}
            >
              <AchievementBadge achievement={achievement} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
