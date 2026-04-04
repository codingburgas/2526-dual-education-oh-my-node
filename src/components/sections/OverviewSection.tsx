import { motion } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { ProgressCircle } from '../ui/ProgressCircle';
import { studentProfile, subjects } from '../../data/data';
import { fadeInVariants, whileInViewSettings } from '../../lib/animations';

export function OverviewSection() {
  const ref = useRef(null);

  const averageGrade =
    Math.round(
      (subjects.reduce((sum, subject) => sum + subject.grade, 0) / subjects.length) * 100,
    ) / 100;

  return (
    <section
      id="overview"
      ref={ref}
      className="py-20 px-4 bg-linear-to-b from-background via-background to-card"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          {...whileInViewSettings}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Progress Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a snapshot of your academic performance and attendance
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12 lg:gap-16 justify-items-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            {...whileInViewSettings}
          >
            <ProgressCircle value={averageGrade} label="Average Grade" color="primary" />
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            {...whileInViewSettings}
          >
            <ProgressCircle
              value={studentProfile.attendance}
              label="Attendance Rate"
              color="success"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          {...whileInViewSettings}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">
              {studentProfile.coursesEnrolled}
            </div>
            <p className="text-muted-foreground">Courses Enrolled</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent mb-2">
              {studentProfile.level}
            </div>
            <p className="text-muted-foreground">Academic Level</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
            <div className="mb-2">
              <TrendingUp size={40} className="text-success mx-auto" />
            </div>
            <p className="text-muted-foreground">On Track</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
