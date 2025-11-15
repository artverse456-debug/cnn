'use client';

import { Challenge, Reward } from '@/lib/mockData';
import { useState } from 'react';
import ChallengeCard from './ChallengeCard';
import RewardList from './RewardList';

interface CreatorTabsProps {
  challenges: Challenge[];
  rewards: Reward[];
}

const tabs = ['Challenges', 'Rewards', 'Fanfeed'];

export default function CreatorTabs({ challenges, rewards }: CreatorTabsProps) {
  const [activeTab, setActiveTab] = useState('Challenges');

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              activeTab === tab ? 'bg-white text-black' : 'bg-white/10 text-white/70'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === 'Challenges' && (
          <div className="grid gap-5 md:grid-cols-2">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
            {challenges.length === 0 && <p className="text-white/60">Keine Challenges aktiv.</p>}
          </div>
        )}
        {activeTab === 'Rewards' && <RewardList rewards={rewards} />}
        {activeTab === 'Fanfeed' && (
          <div className="space-y-4 text-sm text-white/70">
            <p>Fanfeed Highlights werden hier gestreamt. Upvotes, Reactions und Vorschläge laufen live ein.</p>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="font-semibold text-white">Upvote-Peak</p>
              <p className="text-white/60">+320 Upvotes · Fanfeed Sprint · Letzte Stunde</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="font-semibold text-white">Neue Vorschläge</p>
              <ul className="mt-2 space-y-1">
                <li>• Mini-Studio-Tour requested</li>
                <li>• Fan-Remix Voting</li>
                <li>• New Merch Drop Reminder</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
