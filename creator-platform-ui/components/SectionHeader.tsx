import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-xs uppercase tracking-[0.4em] text-white/50">{eyebrow}</p>}
        <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 text-sm text-white/60">{description}</p>}
      </div>
      {action}
    </div>
  );
}
