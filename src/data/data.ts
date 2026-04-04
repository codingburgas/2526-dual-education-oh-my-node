export type Subject = {
  id: string;
  name: string;
  grade: number;
  credits: number;
  trend: 'up' | 'down' | 'stable';
};

export type Assignment = {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'completed' | 'pending' | 'overdue';
  score?: number;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: 'Target' | 'Compass' | 'Check' | 'Zap' | 'Crown';
  unlockedDate: string;
  type: 'badge' | 'milestone' | 'award';
};

export type StudentProfile = {
  name: string;
  email: string;
  averageGrade: number;
  attendance: number;
  coursesEnrolled: number;
  level: string;
};

export const studentProfile: StudentProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@student.edu',
  averageGrade: 87,
  attendance: 94,
  coursesEnrolled: 5,
  level: 'Junior',
};

export const subjects: Subject[] = [
  { id: '1', name: 'Mathematics', grade: 92, credits: 4, trend: 'up' },
  { id: '2', name: 'Physics', grade: 88, credits: 4, trend: 'stable' },
  { id: '3', name: 'Chemistry', grade: 85, credits: 3, trend: 'down' },
  { id: '4', name: 'English Literature', grade: 90, credits: 3, trend: 'up' },
  { id: '5', name: 'Computer Science', grade: 95, credits: 4, trend: 'up' },
];

export const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Calculus Problem Set',
    subject: 'Mathematics',
    dueDate: '2024-04-10',
    status: 'completed',
    score: 95,
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    subject: 'Physics',
    dueDate: '2024-04-15',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Chemistry Experiment Analysis',
    subject: 'Chemistry',
    dueDate: '2024-04-08',
    status: 'overdue',
  },
  {
    id: '4',
    title: 'Essay on Modernism',
    subject: 'English Literature',
    dueDate: '2024-04-12',
    status: 'completed',
    score: 88,
  },
  {
    id: '5',
    title: 'Data Structures Project',
    subject: 'Computer Science',
    dueDate: '2024-04-20',
    status: 'pending',
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Perfect Attendance',
    description: 'Attended all classes for a month',
    icon: 'Target',
    unlockedDate: '2024-03-15',
    type: 'badge',
  },
  {
    id: '2',
    title: 'Math Mastery',
    description: 'Achieved 90+ in Mathematics',
    icon: 'Compass',
    unlockedDate: '2024-03-20',
    type: 'badge',
  },
  {
    id: '3',
    title: 'First Submission',
    description: 'Completed your first assignment',
    icon: 'Check',
    unlockedDate: '2024-02-01',
    type: 'milestone',
  },
  {
    id: '4',
    title: 'Quick Learner',
    description: 'Completed 5 assignments ahead of deadline',
    icon: 'Zap',
    unlockedDate: '2024-03-25',
    type: 'badge',
  },
  {
    id: '5',
    title: 'Week Champion',
    description: 'Top performer this week',
    icon: 'Crown',
    unlockedDate: '2024-04-02',
    type: 'award',
  },
];
