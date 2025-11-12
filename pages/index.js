// index.js — Creator Challenge Network Frontend
// Vollständige React + Next.js Oberfläche (Designansicht)

import React, { useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';


export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


// ----------------------------
// Utils
// ----------------------------
function timeLeft(deadlineISO) {
  const d = new Date(deadlineISO).getTime();
  const diff = Math.floor((d - Date.now()) / 1000);
  if (diff <= 0) return 'abgelaufen';
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  return `${h}h ${m}m`;
}

function isOpenForUser(opensAtISO, premium) {
  const open = new Date(opensAtISO).getTime();
  const now = Date.now();
  if (open <= now) return true;
  if (premium && open - 12 * 3600 * 1000 <= now) return true;
  return false;
}

// ----------------------------
// Mock-Daten
// ----------------------------
const currentUser = {
  id: 'me',
  name: 'You',
  avatar: 'https://i.pravatar.cc/100?img=12',
  role: 'fan',
  points: 840,
  premium: true,
  fanClubs: ['creator-1']
};

const creators = [
  { id: 'creator-1', name: 'NovaPixel', avatar: 'https://i.pravatar.cc/100?img=32' },
  { id: 'creator-2', name: 'BeatSmith', avatar: 'https://i.pravatar.cc/100?img=5' }
];

const challengesSeed = [
  {
    id: 'ch-1',
    title: 'Make a 10s Looping Synth Riff',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    creatorId: 'creator-2',
    rewardPoints: 300,
    rewardLabel: 'Shoutout + Sample Pack',
    status: 'open',
    opensAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
    deadline: new Date(Date.now() + 2 * 24 * 3600 * 1000).toISOString(),
    premiumOnly: false,
    fanClubOnly: false,
    votes: 321
  },
  {
    id: 'ch-2',
    title: 'Thumbnail Redesign for Sci-Fi Video',
    cover: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
    creatorId: 'creator-1',
    rewardPoints: 600,
    rewardLabel: 'Merch Bundle',
    status: 'open',
    opensAt: new Date(Date.now() + 9 * 3600 * 1000).toISOString(),
    deadline: new Date(Date.now() + 3 * 24 * 3600 * 1000).toISOString(),
    premiumOnly: true,
    fanClubOnly: false,
    votes: 88
  },
  {
    id: 'ch-3',
    title: 'Design a Logo Variation',
    cover: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop',
    creatorId: 'creator-1',
    rewardPoints: 200,
    rewardLabel: 'Discord Role + Shoutout',
    status: 'closed',
    opensAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    deadline: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString(),
    premiumOnly: false,
    fanClubOnly: true,
    votes: 712
  }
];
const signIn = async () => {
  await supabase.auth.signInWithOAuth({ provider: 'google' });
};
const signOut = async () => {
  await supabase.auth.signOut();
};

const ideasSeed = [
  { id: 'idea-1', title: 'VR Reactions to fan builds', author: 'You', votes: 41 },
  { id: 'idea-2', title: '24h Stream Challenge with polls', author: 'NovaPixel', votes: 64 }
];

const rewardsSeed = [
  { id: 'rw-1', title: 'Creator Shoutout', cost: 200 },
  { id: 'rw-2', title: 'Exclusive Wallpaper Pack', cost: 350 },
  { id: 'rw-3', title: 'Signed Digital Poster', cost: 600 }
];

// ----------------------------
// Komponenten
// ----------------------------
function Card({ children }) {
  return (
    <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', padding: 16, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function ChallengeCard({ c }) {
  const creator = creators.find(x => x.id === c.creatorId);
  const open = isOpenForUser(c.opensAt, currentUser.premium);
  const gated = (!open) || (c.fanClubOnly && !currentUser.fanClubs.includes(c.creatorId));
  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <img src={c.cover} alt={c.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12 }} />
        {!open && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
            🔒 Frühzugang – öffnet bald
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <strong>{c.title}</strong>
        <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 12, background: c.status === 'open' ? 'rgba(16,185,129,.25)' : 'rgba(239,68,68,.25)' }}>
          {c.status === 'open' ? 'offen' : 'geschlossen'}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.75)', fontSize: 13, marginTop: 6 }}>
        <img src={creator.avatar} alt={creator.name} width={20} height={20} style={{ borderRadius: 999 }} />
        <span>{creator.name}</span>
        <span>•</span>
        <span>Belohnung: {c.rewardLabel} ({c.rewardPoints} Punkte)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Restzeit: {timeLeft(c.deadline)}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => {
              if (gated || c.status !== 'open') { window.alert('Diese Challenge ist derzeit gesperrt.'); return; }
              window.alert('Upvote gezählt! (+1 Punkt)');
            }}
            style={{ fontSize: 14, padding: '6px 10px', borderRadius: 12, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.12)' }}
          >⬆️ Upvote</button>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,.8)' }}>{c.votes}</span>
        </div>
      </div>
    </Card>
  );
}

function IdeaBox({ ideas }) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <strong>Ideen-Box</strong>
        <button onClick={() => window.alert('Idee eingereicht! (+10 Punkte)')} style={{ fontSize: 14, padding: '6px 10px', borderRadius: 12, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.12)' }}>Idee posten</button>
      </div>
      <ul style={{ marginTop: 8 }}>
        {ideas.map((i, idx) => (
          <li key={i.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, padding: '6px 0' }}>
            <span>{idx + 1}. {i.title} <span style={{ opacity: .6 }}>– {i.author}</span></span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => window.alert('Upvote gezählt! (+1 Punkt)')} style={{ fontSize: 12, padding: '4px 8px', borderRadius: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.12)' }}>⬆️ Upvote</button>
              <span style={{ fontSize: 12, opacity: .7 }}>{i.votes}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Rewards({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 600 }}>Deine Punkte</div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>{currentUser.points}</div>
        </div>
        <button onClick={() => setOpen(true)} style={{ fontSize: 14, padding: '8px 14px', borderRadius: 12, background: 'rgba(37,99,235,.8)', border: '1px solid rgba(37,99,235,.9)', color: '#fff' }}>Rewards</button>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={() => setOpen(false)}>
          <div style={{ width: '100%', maxWidth: 520, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16, padding: 16 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong>Belohnungen einlösen</strong>
              <button onClick={() => setOpen(false)} aria-label="close" style={{ background: 'transparent', border: 0, color: '#fff' }}>✖</button>
            </div>
            <ul style={{ marginTop: 12 }}>
              {items.map(r => (
                <li key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderRadius: 12, background: 'rgba(255,255,255,.06)', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{r.title}</div>
                    <div style={{ fontSize: 12, opacity: .7 }}>Kosten: {r.cost} Punkte</div>
                  </div>
                  <button onClick={() => window.alert('Belohnung eingelöst! Punkte abgezogen.')} style={{ fontSize: 14, padding: '6px 12px', borderRadius: 10, background: 'rgba(124,58,237,.7)', border: '1px solid rgba(124,58,237,.9)', color: '#fff' }}>Einlösen</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
}

// ----------------------------
// App
// ----------------------------
export default function App() {
  const [challenges, setChallenges] = useState([]);

useEffect(() => {
  async function loadChallenges() {
    const { data, error } = await supabase.from('challenges').select('*');
    if (!error) setChallenges(data);
  }
  loadChallenges();
}, []);

  const ideas = useMemo(() => ideasSeed, []);
  const rewards = useMemo(() => rewardsSeed, []);
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 16, color: 'white', background: 'black', minHeight: '100vh', fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(6px)', background: 'rgba(0,0,0,.45)', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong style={{ letterSpacing: .5 }}>CCN</strong>
          <nav style={{ display: 'flex', gap: 12, fontSize: 14, opacity: .8 }}>
            <a href="#">Feed</a>
            <a href="#">FanClubs</a>
            <a href="#">Abo</a>
            <a href="#">Rewards</a>
            <a href="#">Challenge erstellen</a>
          </nav>
          <a href="#profile" style={{ fontSize: 14, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.12)', padding: '6px 10px', borderRadius: 12 }}>Mein Profil</a>
        </div>
      </header>

      <div style={{ marginTop: 16 }}>
        {challenges.map(c => <ChallengeCard key={c.id} c={c} />)}
      </div>

      <IdeaBox ideas={ideas} />
      <Rewards items={rewards} />

            <footer style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: 16, textAlign: 'center', fontSize: 12, opacity: .6 }}>
        © {new Date().getFullYear()} Creator Challenge Network
      </footer>
    </div>
  );
}

