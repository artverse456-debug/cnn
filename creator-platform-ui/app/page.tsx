import Link from 'next/link';
import CreatorCard from '@/components/CreatorCard';
import SectionHeader from '@/components/SectionHeader';
import AuthPortal from '@/components/AuthPortal';
import { creators, challenges, payoutInfo } from '@/lib/mockData';

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Creator · Fans · Rewards</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Monetarisiere Community-Liebe mit Mini-Challenges & Rewards
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Fans zahlen 2–3 € / Monat, sammeln Punkte und voten Creator-Inhalte hoch. Wir kümmern uns um Payments,
            Fanfeed und Reminder – du fokussierst auf Inhalte.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/explore"
              className="rounded-full bg-white px-5 py-3 font-semibold text-black shadow-lg shadow-pink-500/30"
            >
              Creator entdecken
            </Link>
            <Link
              href="/register"
              className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white/80 transition hover:border-white/60"
            >
              Jetzt loslegen
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/60">
            <div>
              <dt>Mini-Challenges / Woche</dt>
              <dd className="text-3xl font-semibold text-white">1200+</dd>
            </div>
            <div>
              <dt>Punkte eingelöst letzten 7 Tagen</dt>
              <dd className="text-3xl font-semibold text-white">18.4k</dd>
            </div>
          </dl>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-brand-500/20">
            <SectionHeader title="Trending Challenges" description="Fans reichen Beiträge in unter 30 Sekunden ein." />
            <div className="mt-6 space-y-4 text-sm">
              {challenges.slice(0, 3).map((challenge) => (
                <div key={challenge.id} className="rounded-2xl border border-white/10 bg-[#080412]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{challenge.reward}</p>
                  <p className="mt-1 text-lg font-semibold">{challenge.title}</p>
                  <p className="text-white/60">{challenge.totalEntries} Einsendungen · {challenge.points} Punkte</p>
                </div>
              ))}
            </div>
          </div>
          <AuthPortal />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Creator Pool"
          title="Creator entdecken"
          description="Social-Media-Look & Feel mit instant Fanfeed und Payments."
          action={
            <Link href="/explore" className="text-sm text-white/70">
              Alle Creator →
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {creators.slice(0, 4).map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/20 via-pink-500/10 to-emerald-400/20 p-10">
        <SectionHeader
          title="15–20% Plattform-Fee, 0% Kopfschmerzen"
          description="Wir wickeln Payments via PayPal & Kreditkarte ab, Creator definieren Rewards & Preise selbst."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Plattform-Fee</p>
            <p className="mt-2 text-3xl font-semibold">{payoutInfo.fee}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Zahlungen</p>
            <p className="mt-2 text-xl text-white/80">{payoutInfo.billingPartners.join(' · ')}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Tipps</p>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              {payoutInfo.conversionTips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
