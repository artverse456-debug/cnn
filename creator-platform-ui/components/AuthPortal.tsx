'use client';

import { useAppStore } from '@/store/useAppStore';

export default function AuthPortal() {
  const role = useAppStore((state) => state.role);
  const setRole = useAppStore((state) => state.setRole);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b0616]/90 p-6 backdrop-blur">
      <div className="flex flex-wrap gap-3">
        {['fan', 'creator'].map((variant) => (
          <button
            key={variant}
            onClick={() => setRole(variant as 'fan' | 'creator')}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
              role === variant ? 'bg-white text-black' : 'bg-white/10 text-white/70'
            }`}
          >
            {variant === 'fan' ? 'Fan Login' : 'Creator Login'}
          </button>
        ))}
      </div>
      <form className="mt-5 space-y-4 text-sm">
        <div>
          <label className="text-white/60">E-Mail</label>
          <input
            type="email"
            placeholder={role === 'fan' ? 'fan@community.me' : 'creator@studio.co'}
            className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/30"
          />
        </div>
        <div>
          <label className="text-white/60">Passwort</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/30"
          />
        </div>
        <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-brand-500 to-pink-500 py-3 font-semibold">
          Weiter
        </button>
        <p className="text-center text-xs text-white/50">
          Dummy Auth aktiv – du wirst auf die jeweiligen Dashboards geroutet.
        </p>
      </form>
    </div>
  );
}
