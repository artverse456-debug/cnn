import SectionHeader from '@/components/SectionHeader';

export default function RegisterPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Register"
        title="Werde Teil der Creator Platform"
        description="Registriere dich als Creator oder Fan. Daten bleiben lokal – Dummy Workflow."
      />
      <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="text-white/60">Vorname</span>
            <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
          </label>
          <label>
            <span className="text-white/60">Nachname</span>
            <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
          </label>
        </div>
        <label className="block">
          <span className="text-white/60">E-Mail</span>
          <input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
        </label>
        <label className="block">
          <span className="text-white/60">Rolle</span>
          <select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#090613] px-4 py-3">
            <option>Fan</option>
            <option>Creator</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white/60">Abo Preis (falls Creator)</span>
          <input type="number" defaultValue={2.5} className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3" />
        </label>
        <button className="w-full rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-3 text-base font-semibold">
          Dummy Account anlegen
        </button>
        <p className="text-center text-xs text-white/50">UI Only – Daten werden nicht gespeichert.</p>
      </form>
    </div>
  );
}
