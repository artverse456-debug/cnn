import { notFound } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import { getChallengeById, getCreatorById } from '@/lib/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';

interface ChallengePageProps {
  params: { id: string };
}

export default function ChallengeDetailPage({ params }: ChallengePageProps) {
  const challenge = getChallengeById(params.id) ?? notFound();

  const creator = getCreatorById(challenge.creatorId);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={creator?.name}
        title={challenge.title}
        description={`${challenge.totalEntries} Einsendungen · ${challenge.upvotes} Upvotes`}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <p className="text-white/70">{challenge.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#090613] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Reward</p>
              <p className="text-2xl font-semibold">{challenge.reward}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#090613] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Punkte</p>
              <p className="text-2xl font-semibold">{challenge.points}</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-[#090613] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Timer</p>
              <p className="text-lg font-semibold">Einreichung bis {formatDate(challenge.endDate)}</p>
            </div>
            <textarea rows={4} placeholder="Link zu deinem Beitrag oder Kurztext" className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
            <button className="w-full rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-3 font-semibold">
              Beitrag einreichen
            </button>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60">Creator</p>
          <p className="text-2xl font-semibold">{creator?.name}</p>
          <p className="text-white/60">Abo Preis {creator ? formatCurrency(creator.price) : '—'} / Monat</p>
          <p className="text-sm text-white/60">Plattform behält 15–20% Gebühr</p>
          <button className="w-full rounded-full border border-white/20 py-2 text-sm text-white/80">Profil ansehen</button>
          <button className="w-full rounded-full bg-white/10 py-2 text-sm text-white/80">Challenge teilen</button>
        </div>
      </div>
    </div>
  );
}
