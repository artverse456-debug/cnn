import Link from 'next/link';

export default function FooterCTA() {
  return (
    <footer className="border-t border-white/5 bg-[#080512]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-center sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Creator Ökosystem</p>
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Monetarisiere deine Community smarter</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/explore"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 transition hover:border-white/60"
          >
            Creator entdecken
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-brand-500 via-pink-500 to-emerald-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30"
          >
            Jetzt loslegen
          </Link>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} CreatorSphere – Made for Fans & Maker</p>
      </div>
    </footer>
  );
}
