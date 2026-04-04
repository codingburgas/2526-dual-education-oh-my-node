import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SubjectCard } from '../ui/SubjectCard';
import { subjects } from '../../data/data';
import { fadeInVariants, whileInViewSettings } from '../../lib/animations';

export function SubjectsSection() {
  const ref = useRef(null);

  return (
    <section
      id="subjects"
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
            Your Subjects
          </h2>
          <p className="text-lg text-muted-foreground">
            Track your grades across all enrolled subjects
          </p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <motion.div
              key={subject.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              {...whileInViewSettings}
            >
              <SubjectCard subject={subject} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
