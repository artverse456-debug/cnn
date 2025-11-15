'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Creator entdecken' },
  { href: '/fan-dashboard', label: 'Fan Dashboard' },
  { href: '/creator-dashboard', label: 'Creator Dashboard' }
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-[#080512]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="rounded-full bg-gradient-to-tr from-brand-500 to-pink-400 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            beta
          </span>
          CreatorSphere
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white/70 transition hover:text-white ${pathname === link.href ? 'text-white' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="text-white/70 transition hover:text-white">
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-brand-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
          >
            Jetzt loslegen
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Menü öffnen">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0b0718] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/80" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="text-white/80" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-gradient-to-r from-brand-500 to-pink-500 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Jetzt loslegen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
