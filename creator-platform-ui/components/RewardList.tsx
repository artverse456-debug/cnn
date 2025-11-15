import { Reward } from '@/lib/mockData';

interface RewardListProps {
  rewards: Reward[];
}

export default function RewardList({ rewards }: RewardListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rewards.map((reward) => (
        <div key={reward.id} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-white/80">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-semibold text-white">{reward.title}</p>
              <p className="text-white/60">{reward.description}</p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{reward.stock} Stück</span>
          </div>
          <div className="mt-4 flex items-center justify-between text-white/70">
            <p>
              <span className="text-lg font-semibold text-white">{reward.cost}</span> Punkte
            </p>
            <button className="rounded-full border border-white/30 px-4 py-1 text-xs font-semibold text-white">
              Einlösen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
