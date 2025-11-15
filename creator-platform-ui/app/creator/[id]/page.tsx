import { notFound } from 'next/navigation';
import CreatorTabs from '@/components/CreatorTabs';
import { creators, rewardsCatalog, getCreatorById, getChallengesForCreator } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

interface CreatorPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return creators.map((creator) => ({ id: creator.id }));
}

export default function CreatorPage({ params }: CreatorPageProps) {
  const creator = getCreatorById(params.id) ?? notFound();

  const creatorChallenges = getChallengesForCreator(creator.id);

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Creator</p>
          <h1 className="mt-2 text-4xl font-semibold">{creator.name}</h1>
          <p className="text-white/60">{creator.username}</p>
          <p className="mt-6 text-white/80">{creator.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
            {creator.focus.map((focus) => (
              <span key={focus} className="rounded-full border border-white/10 px-3 py-1">
                {focus}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0b0718] p-6 lg:col-span-2">
          <p className="text-sm text-white/60">Subscription</p>
          <p className="text-4xl font-semibold">{formatCurrency(creator.price)}</p>
          <p className="text-sm text-white/60">monatlich · Plattform Fee 15-20%</p>
          <button className="w-full rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-3 font-semibold">
            Gruppe beitreten
          </button>
          <button className="w-full rounded-full border border-white/20 py-3 text-sm text-white/70">
            Creator kontaktieren
          </button>
        </div>
      </section>

      <CreatorTabs challenges={creatorChallenges} rewards={rewardsCatalog} />
    </div>
  );
}
