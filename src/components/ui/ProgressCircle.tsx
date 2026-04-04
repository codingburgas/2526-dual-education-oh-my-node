import { useEffect, useRef } from 'react';

type ProgressCircleProps = {
  value: number;
  label: string;
  color: 'primary' | 'accent' | 'success';
};

export function ProgressCircle({ value, label, color }: ProgressCircleProps) {
  const svgRef = useRef<SVGCircleElement>(null);
  const circumference = 2 * Math.PI * 45;

  useEffect(() => {
    if (svgRef.current) {
      const offset = circumference - (value / 100) * circumference;
      svgRef.current.style.strokeDashoffset = String(offset);
    }
  }, [value, circumference]);

  const colorClasses = {
    primary: 'stroke-primary',
    accent: 'stroke-accent',
    success: 'stroke-success',
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="45"
            className="stroke-border fill-none"
            strokeWidth="8"
          />
          <circle
            ref={svgRef}
            cx="60"
            cy="60"
            r="45"
            className={`fill-none transition-all duration-1000 ease-out ${colorClasses[color]}`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">{value}%</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
