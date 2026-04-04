import { Target, Compass, Check, Zap, Crown } from 'lucide-react';
import type { Achievement } from '../../data/data';

type AchievementBadgeProps = {
  achievement: Achievement;
};

const iconMap = {
  Target: Target,
  Compass: Compass,
  Check: Check,
  Zap: Zap,
  Crown: Crown,
};

export function AchievementBadge({ achievement }: AchievementBadgeProps) {
  const IconComponent = iconMap[achievement.icon];

  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <IconComponent size={48} className="text-accent mx-auto" />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {achievement.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
      <p className="text-xs text-muted-foreground">
        {new Date(achievement.unlockedDate).toLocaleDateString()}
      </p>
    </div>
  );
}
