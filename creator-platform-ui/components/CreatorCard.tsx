import Link from 'next/link';
import { Creator } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

interface CreatorCardProps {
  creator: Creator;
  showCTA?: boolean;
}

export default function CreatorCard({ creator, showCTA = true }: CreatorCardProps) {
  return (
    <div className="gradient-border rounded-3xl p-1">
      <div className="rounded-[22px] bg-[#090617] p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${creator.avatarColor} p-[2px]`}>
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#090617] text-lg font-semibold text-white/80">
                {creator.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{creator.name}</h3>
              <p className="text-sm text-white/60">{creator.username}</p>
            </div>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">{creator.genre}</span>
        </div>
        <p className="mt-4 text-sm text-white/70">{creator.bio}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/80">
          <div>
            <dt className="text-white/50">Abo</dt>
            <dd className="text-base font-semibold">{formatCurrency(creator.price)}</dd>
          </div>
          <div>
            <dt className="text-white/50">Community</dt>
            <dd className="text-base font-semibold">{creator.followerCount}</dd>
          </div>
          <div>
            <dt className="text-white/50">Impact</dt>
            <dd className="text-base font-semibold">{creator.conversion}</dd>
          </div>
          <div>
            <dt className="text-white/50">Highlights</dt>
            <dd className="text-xs text-white/60">{creator.highlights.join(' · ')}</dd>
          </div>
        </dl>
        {showCTA && (
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href={`/creator/${creator.id}`}
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-center font-medium text-white transition hover:bg-white/20"
            >
              Profil öffnen
            </Link>
            <Link
              href="/payment"
              className="flex-1 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 px-4 py-2 text-center font-semibold text-white shadow-brand-500/30"
            >
              Beitreten
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
