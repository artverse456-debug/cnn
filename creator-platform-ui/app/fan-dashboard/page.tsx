import DashboardStat from '@/components/DashboardStat';
import ReminderList from '@/components/ReminderList';
import RewardList from '@/components/RewardList';
import SectionHeader from '@/components/SectionHeader';
import { challenges, fanHistory, rewardsCatalog } from '@/lib/mockData';

export default function FanDashboardPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Fan Dashboard"
        title="Deine Punkte & Rewards"
        description="Bleib im Flow: Challenges abschließen, Punkte stapeln, Rewards claimen."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardStat label="Punkte" value="340" trend="+65 diese Woche" />
        <DashboardStat label="Upvotes" value="1.240" trend="+12%" />
        <DashboardStat label="Eingelöste Rewards" value="6" trend="Letzter Claim vor 3 Tagen" />
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <SectionHeader title="Challenge Historie" description="Mini-Übersicht der letzten Einsendungen." />
          <ul className="mt-6 space-y-3 text-sm">
            {fanHistory.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#090613] px-4 py-3">
                <div>
                  <p className="text-base font-semibold text-white">{entry.id}</p>
                  <p className="text-white/50">{entry.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/70">{entry.earned}</p>
                  <p className="text-white/40 text-xs">{entry.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <SectionHeader title="Rewards" description="Punkte einlösen für Creator-Benefits." />
          <div className="mt-6">
            <RewardList rewards={rewardsCatalog} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <SectionHeader title="Neue Challenges" description="Reminder & Schnellbeitritt." />
          <div className="mt-6 space-y-4 text-sm">
            {challenges.slice(0, 3).map((challenge) => (
              <div key={challenge.id} className="rounded-2xl border border-white/10 bg-[#090613] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{challenge.reward}</p>
                <p className="text-lg font-semibold">{challenge.title}</p>
                <p className="text-white/60">{challenge.points} Punkte · {challenge.upvotes} Upvotes</p>
                <div className="mt-3 flex gap-3 text-xs">
                  <button className="flex-1 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-2 font-semibold">
                    Teilnehmen
                  </button>
                  <button className="flex-1 rounded-full border border-white/10 py-2 text-white/70">
                    Reminder setzen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <SectionHeader title="Reminder" description="Bleib im Flow mit personalisierten Alerts." />
          <div className="mt-6">
            <ReminderList />
          </div>
        </div>
      </section>
    </div>
  );
}
