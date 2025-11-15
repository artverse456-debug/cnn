import Link from 'next/link';
import { Challenge, getCreatorById } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const creator = getCreatorById(challenge.creatorId);

  return (
    <div className="rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-4 text-sm text-white/60">
        <span>{creator?.name}</span>
        <span className="text-white/50">{formatDate(challenge.endDate)}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{challenge.title}</h3>
      <p className="mt-2 text-sm text-white/70">{challenge.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
        <span className="rounded-full bg-white/10 px-3 py-1">{challenge.points} Punkte</span>
        <span className="rounded-full bg-white/10 px-3 py-1">{challenge.reward}</span>
        <span className="rounded-full bg-white/5 px-3 py-1">{challenge.totalEntries} Beiträge</span>
        <span className="rounded-full bg-white/5 px-3 py-1">{challenge.upvotes} Upvotes</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link href={`/challenge/${challenge.id}`} className="flex-1 rounded-full bg-white/10 px-4 py-2 text-center text-white/90">
          Details
        </Link>
        <button className="flex-1 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 px-4 py-2 font-semibold text-white">
          Teilnehmen
        </button>
      </div>
    </div>
  );
}
