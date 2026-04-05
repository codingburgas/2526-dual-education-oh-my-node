import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Subject } from '../../data/data';
import { fadeUpVariants } from '../../lib/animations';

type SubjectCardProps = {
  subject: Subject;
};

export function SubjectCard({ subject }: SubjectCardProps) {
  const getTrendIcon = () => {
    if (subject.trend === 'up') return <TrendingUp size={16} className="text-success" />;
    if (subject.trend === 'down')
      return <TrendingDown size={16} className="text-destructive" />;
    return <Minus size={16} className="text-muted-foreground" />;
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">{subject.name}</h3>
          <p className="text-sm text-muted-foreground">{subject.credits} credits</p>
        </div>
        {getTrendIcon()}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-primary">{subject.grade}</span>
        <span className="text-sm text-muted-foreground">/100</span>
      </div>
    </motion.div>
  );
}
