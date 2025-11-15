import { create } from 'zustand';
import { reminderTemplates } from '@/lib/mockData';

type Role = 'fan' | 'creator';

type Reminder = {
  id: string;
  text: string;
  done: boolean;
};

interface AppState {
  searchTerm: string;
  genre: string;
  maxPrice: number;
  role: Role;
  reminders: Reminder[];
  setSearchTerm: (value: string) => void;
  setGenre: (value: string) => void;
  setMaxPrice: (value: number) => void;
  setRole: (value: Role) => void;
  toggleReminder: (id: string) => void;
  addReminder: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  searchTerm: '',
  genre: 'Alle',
  maxPrice: 3,
  role: 'fan',
  reminders: reminderTemplates.slice(0, 2).map((text, index) => ({
    id: `rem-${index}`,
    text,
    done: false
  })),
  setSearchTerm: (value) => set({ searchTerm: value }),
  setGenre: (value) => set({ genre: value }),
  setMaxPrice: (value) => set({ maxPrice: value }),
  setRole: (value) => set({ role: value }),
  toggleReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, done: !reminder.done } : reminder
      )
    })),
  addReminder: () =>
    set((state) => ({
      reminders: [
        ...state.reminders,
        {
          id: `rem-${state.reminders.length + 1}`,
          text: reminderTemplates[(state.reminders.length + 1) % reminderTemplates.length],
          done: false
        }
      ]
    }))
}));
