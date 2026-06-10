import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'neutral';
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  const variants = {
    success: "bg-accent/20 text-accent border-accent/30",
    warning: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    neutral: "bg-surface-hover text-gray-300 border-gray-600"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
