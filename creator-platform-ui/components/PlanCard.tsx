import { formatCurrency } from '@/lib/utils';

interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  selected: boolean;
  onSelect: () => void;
}

export default function PlanCard({ title, price, features, selected, onSelect }: PlanCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-3xl border p-6 text-left transition ${
        selected ? 'border-brand-400 bg-brand-400/10' : 'border-white/10 hover:border-white/30'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">{title}</p>
          <p className="mt-2 text-3xl font-semibold">{formatCurrency(price)}</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">pro Monat</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {feature}
          </li>
        ))}
      </ul>
    </button>
  );
}
