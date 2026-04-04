import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AssignmentItem } from '../ui/AssignmentItem';
import { assignments } from '../../data/data';
import { fadeInVariants, whileInViewSettings } from '../../lib/animations';

export function AssignmentsSection() {
  const ref = useRef(null);

  return (
    <section
      id="assignments"
      ref={ref}
      className="py-20 px-4 bg-linear-to-b from-background via-background to-card"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          {...whileInViewSettings}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Assignments
          </h2>
          <p className="text-lg text-muted-foreground">
            Keep track of your pending and completed assignments
          </p>
        </motion.div>

        <motion.div className="space-y-4">
          {assignments.map(assignment => (
            <motion.div
              key={assignment.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              {...whileInViewSettings}
            >
              <AssignmentItem assignment={assignment} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
