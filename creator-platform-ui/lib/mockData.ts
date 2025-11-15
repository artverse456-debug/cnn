export type Challenge = {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  endDate: string;
  reward: string;
  points: number;
  totalEntries: number;
  upvotes: number;
};

export type Creator = {
  id: string;
  name: string;
  username: string;
  genre: string;
  price: number;
  avatarColor: string;
  bio: string;
  followerCount: string;
  conversion: string;
  focus: string[];
  highlights: string[];
};

export type Reward = {
  id: string;
  title: string;
  cost: number;
  description: string;
  stock: number;
};

export const genres = ['Music', 'Gaming', 'Art', 'Comedy', 'Education', 'Lifestyle'];

export const creators: Creator[] = [
  {
    id: 'luna-nova',
    name: 'Luna Nova',
    username: '@lunanova',
    genre: 'Music',
    price: 2.5,
    avatarColor: 'from-pink-500 to-orange-400',
    bio: 'Indie-Pop Songwriterin mit wöchentlichen Fan-Challenges & Studio-Livestreams.',
    followerCount: '145k',
    conversion: '+18% Aktivität',
    focus: ['Live Sessions', 'Song Snippets', 'Behind the Scenes'],
    highlights: ['Top 10 Spotify', 'Gold Creator Award']
  },
  {
    id: 'kai-bytes',
    name: 'Kai Bytes',
    username: '@kaibytes',
    genre: 'Gaming',
    price: 2.9,
    avatarColor: 'from-blue-500 to-cyan-400',
    bio: 'eSports-Analyst & Challenge-Guru für Aim-Trainings mit Leaderboard.',
    followerCount: '210k',
    conversion: '+24% Retention',
    focus: ['Custom Maps', 'Coachings', 'Live Review'],
    highlights: ['Twitch Rivals Champion']
  },
  {
    id: 'mara-sketch',
    name: 'Mara Sketch',
    username: '@marasketch',
    genre: 'Art',
    price: 2.2,
    avatarColor: 'from-violet-500 to-brand-500',
    bio: 'Illustratorin für futuristische Fashion-Postings & Fan-Kollabs.',
    followerCount: '98k',
    conversion: '+32% Fanfeed',
    focus: ['Digital Art', 'Workshops', 'Fan Collabs'],
    highlights: ['Adobe Creator Fund']
  },
  {
    id: 'leo-fit',
    name: 'Leo Fit',
    username: '@leofit',
    genre: 'Lifestyle',
    price: 2.0,
    avatarColor: 'from-emerald-500 to-lime-400',
    bio: 'Functional Fitness mit Mikro-Challenges für Busy Creators.',
    followerCount: '305k',
    conversion: '+12% Abo-Steigerung',
    focus: ['HIIT', 'Mindfulness', 'Meal Prep'],
    highlights: ['Nike Well Collective']
  }
];

export const challenges: Challenge[] = [
  {
    id: 'dream-hook',
    creatorId: 'luna-nova',
    title: 'Dream Hook Challenge',
    description: 'Schick deine 15s Hook – Luna pickt den Chorus für den nächsten Drop.',
    endDate: '2025-02-12T18:00:00Z',
    reward: 'Feature im Studio-Stream',
    points: 80,
    totalEntries: 128,
    upvotes: 742
  },
  {
    id: 'speed-edit',
    creatorId: 'mara-sketch',
    title: 'Speed Edit 60',
    description: '60 Minuten, eine Mood-Board Datei, Mara zeichnet live deine Vision.',
    endDate: '2025-01-28T20:00:00Z',
    reward: 'Signierter Print + Social Feature',
    points: 65,
    totalEntries: 76,
    upvotes: 421
  },
  {
    id: 'aim-rush',
    creatorId: 'kai-bytes',
    title: 'Aim Rush Trials',
    description: 'Drei Custom Maps – poste dein Scoreboard für Coaching Feedback.',
    endDate: '2025-02-04T14:00:00Z',
    reward: '1:1 Review im Stream',
    points: 95,
    totalEntries: 210,
    upvotes: 1010
  },
  {
    id: 'reset-ritual',
    creatorId: 'leo-fit',
    title: 'Reset Ritual Week',
    description: '7 Tage Micro-Goals für Schlaf, Mobility und Hydration.',
    endDate: '2025-02-01T07:00:00Z',
    reward: 'Premium Coaching Slot',
    points: 55,
    totalEntries: 189,
    upvotes: 512
  }
];

export const rewardsCatalog: Reward[] = [
  { id: 'studio-pass', title: 'Studio Livestream Pass', cost: 120, description: 'VIP Q&A im privaten Stream', stock: 32 },
  { id: 'merch-pack', title: 'Limited Merch Drop', cost: 220, description: 'Signiertes Hoodie + Patch', stock: 14 },
  { id: 'voice-note', title: 'Individuelle Voice Note', cost: 80, description: 'Persönlicher Motivationsbooster', stock: 54 },
  { id: 'meetup', title: 'Mini Meetup Slot', cost: 420, description: '15 Minuten 1:1 Call', stock: 8 }
];

export const fanHistory = [
  { id: 'dream-hook', status: 'Abgeschlossen', earned: '+80 Punkte', date: '12. Jan' },
  { id: 'aim-rush', status: 'Läuft', earned: '+95 Punkte', date: '15. Jan' },
  { id: 'reset-ritual', status: 'Reminder', earned: '+55 Punkte', date: '18. Jan' }
];

export const reminderTemplates = [
  'Neue Challenge morgen um 10 Uhr',
  'Rewards fast erreicht – 40 Punkte fehlen',
  'Creator hat soeben live gepostet',
  'Fanfeed explodiert – vote jetzt'
];

export const paymentPlans = [
  { id: 'fan-basic', title: 'Fan Access', price: 2.0, features: ['Daily Fanfeed', 'Community Votes', 'Neue Challenges zuerst'] },
  { id: 'fan-plus', title: 'Fan Boost', price: 3.0, features: ['Alles aus Fan Access', 'Rewards Rabatt 10%', 'VIP AMA monatlich'] }
];

export const payoutInfo = {
  fee: '15-20% Plattform-Fee',
  billingPartners: ['PayPal', 'Kreditkarte'],
  conversionTips: ['Aktiviere Mini-Challenges', 'Droppen Reminder 2x pro Woche', 'Belohnungen klar benennen']
};

export const getCreatorById = (id: string) => creators.find((creator) => creator.id === id);
export const getChallengeById = (id: string) => challenges.find((challenge) => challenge.id === id);
export const getChallengesForCreator = (creatorId: string) => challenges.filter((challenge) => challenge.creatorId === creatorId);
