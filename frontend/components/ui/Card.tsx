import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface border border-surface-hover rounded-xl shadow-lg overflow-hidden backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-6 border-b border-surface-hover ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
