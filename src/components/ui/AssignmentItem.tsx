import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import type { Assignment } from '../../data/data';

type AssignmentItemProps = {
  assignment: Assignment;
};

export function AssignmentItem({ assignment }: AssignmentItemProps) {
  const getStatusIcon = () => {
    if (assignment.status === 'completed')
      return <CheckCircle2 size={18} className="text-success" />;
    if (assignment.status === 'pending')
      return <Clock size={18} className="text-warning" />;
    return <AlertCircle size={18} className="text-destructive" />;
  };

  const getStatusBadgeClass = () => {
    if (assignment.status === 'completed') return 'bg-success/15 text-success';
    if (assignment.status === 'pending') return 'bg-warning/15 text-warning';
    return 'bg-destructive/15 text-destructive';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="mt-1">{getStatusIcon()}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-card-foreground truncate">
            {assignment.title}
          </h4>
          <p className="text-sm text-muted-foreground">{assignment.subject}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Due: {new Date(assignment.dueDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusBadgeClass()}`}
          >
            {assignment.status}
          </span>
          {assignment.score !== undefined && (
            <span className="text-sm font-semibold text-primary">
              {assignment.score}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
