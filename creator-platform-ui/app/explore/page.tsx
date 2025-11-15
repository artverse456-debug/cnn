'use client';

import { useMemo } from 'react';
import CreatorCard from '@/components/CreatorCard';
import ChallengeCard from '@/components/ChallengeCard';
import SectionHeader from '@/components/SectionHeader';
import { creators, genres, challenges } from '@/lib/mockData';
import { useAppStore } from '@/store/useAppStore';

export default function ExplorePage() {
  const searchTerm = useAppStore((state) => state.searchTerm);
  const genre = useAppStore((state) => state.genre);
  const maxPrice = useAppStore((state) => state.maxPrice);
  const setSearchTerm = useAppStore((state) => state.setSearchTerm);
  const setGenre = useAppStore((state) => state.setGenre);
  const setMaxPrice = useAppStore((state) => state.setMaxPrice);

  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = genre === 'Alle' || creator.genre === genre;
      const matchesPrice = creator.price <= maxPrice;
      return matchesSearch && matchesGenre && matchesPrice;
    });
  }, [searchTerm, genre, maxPrice]);

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Explore"
        title="Alle Creator im Überblick"
        description="Filtere nach Genre, Preis und finde direkt passende Challenges."
      />

      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
        <label className="text-sm text-white/70 sm:col-span-1">
          Suche
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Creator oder Genre"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3"
          />
        </label>
        <label className="text-sm text-white/70 sm:col-span-1">
          Genre
          <select
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#080512] px-4 py-3"
          >
            <option value="Alle">Alle</option>
            {genres.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-white/70 sm:col-span-1">
          Max Preis: {maxPrice.toFixed(1)} €
          <input
            type="range"
            min={2}
            max={3}
            step={0.1}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredCreators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
        {filteredCreators.length === 0 && (
          <p className="text-white/60">Keine Creator gefunden – passe deine Filter an.</p>
        )}
      </div>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Challenges"
          title="Vorschau der aktiven Challenges"
          description="Kleine Aufgaben, hoher Impact. Fans sammeln Punkte & Upvotes."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </section>
    </div>
  );
}
