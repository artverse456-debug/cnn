interface DashboardStatProps {
  label: string;
  value: string;
  trend?: string;
}

export default function DashboardStat({ label, value, trend }: DashboardStatProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      {trend && <p className="text-xs text-emerald-400">{trend}</p>}
    </div>
  );
}
