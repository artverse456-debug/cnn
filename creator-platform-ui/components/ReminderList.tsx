'use client';

import { useAppStore } from '@/store/useAppStore';

export default function ReminderList() {
  const reminders = useAppStore((state) => state.reminders);
  const toggleReminder = useAppStore((state) => state.toggleReminder);
  const addReminder = useAppStore((state) => state.addReminder);

  return (
    <div className="space-y-3">
      {reminders.map((reminder) => (
        <label key={reminder.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm">
          <input
            type="checkbox"
            checked={reminder.done}
            onChange={() => toggleReminder(reminder.id)}
            className="h-4 w-4 rounded border-white/30 bg-transparent text-brand-400 focus:ring-brand-400"
          />
          <span className={reminder.done ? 'text-white/40 line-through' : 'text-white/80'}>{reminder.text}</span>
        </label>
      ))}
      <button
        onClick={addReminder}
        className="w-full rounded-xl border border-dashed border-white/30 px-4 py-3 text-sm font-semibold text-white/70"
      >
        Reminder hinzufügen
      </button>
    </div>
  );
}
