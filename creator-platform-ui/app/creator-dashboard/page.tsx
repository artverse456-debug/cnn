import SectionHeader from '@/components/SectionHeader';
import { rewardsCatalog, challenges } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

export default function CreatorDashboardPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Creator Dashboard"
        title="Manage deine Challenges"
        description="Neue Aufgaben, Rewards & Gewinner in einem Interface."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Neue Challenge</h3>
          <form className="mt-6 space-y-4 text-sm">
            <label className="block">
              <span className="text-white/60">Titel</span>
              <input type="text" placeholder="Challenge Name" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
            </label>
            <label className="block">
              <span className="text-white/60">Beschreibung</span>
              <textarea rows={4} placeholder="Worum geht's?" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-white/60">
                Punkte
                <input type="number" defaultValue={80} className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
              </label>
              <label className="block text-white/60">
                Deadline
                <input type="datetime-local" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
              </label>
            </div>
            <button type="button" className="w-full rounded-2xl bg-gradient-to-r from-brand-500 to-pink-500 py-3 font-semibold">
              Challenge veröffentlichen
            </button>
          </form>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Reward Tabelle</h3>
          <table className="mt-6 w-full text-left text-sm">
            <thead className="text-white/50">
              <tr>
                <th className="pb-2">Reward</th>
                <th className="pb-2">Kosten</th>
                <th className="pb-2">Verfügbar</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              {rewardsCatalog.map((reward) => (
                <tr key={reward.id} className="border-t border-white/10">
                  <td className="py-3">{reward.title}</td>
                  <td className="py-3">{reward.cost} Punkte</td>
                  <td className="py-3">{reward.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-6 w-full rounded-2xl border border-white/20 py-3 text-sm text-white/70">Reward hinzufügen</button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Abo Preis</h3>
          <p className="mt-2 text-4xl font-semibold">{formatCurrency(2.5)}</p>
          <p className="text-sm text-white/60">Fans zahlen monatlich, wir ziehen Fee automatisch ab.</p>
          <button className="mt-5 w-full rounded-2xl bg-white/10 py-3 text-sm text-white/80">Preis anpassen</button>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold">Challenge Gewinner</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {challenges.slice(0, 2).map((challenge) => (
              <div key={challenge.id} className="rounded-2xl border border-white/10 bg-[#090613] p-4 text-sm">
                <p className="text-white/40 text-xs uppercase tracking-[0.3em]">{challenge.reward}</p>
                <p className="text-lg font-semibold">{challenge.title}</p>
                <p className="text-white/60">{challenge.totalEntries} Einsendungen</p>
                <button className="mt-4 w-full rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-2 text-sm font-semibold">
                  Gewinner auswählen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
