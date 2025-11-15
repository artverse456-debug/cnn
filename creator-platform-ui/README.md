# Creator Platform UI

Frontend-Prototyp für eine Creator-Fan-Plattform auf Basis von Next.js 14 (App Router), TypeScript, TailwindCSS und Zustand. Alle Daten werden über Mock-Daten bereitgestellt – keine API- oder Backend-Abhängigkeiten.

## Quickstart

```bash
npm install
npm run dev
```

- `npm run dev` – startet die Development-Umgebung
- `npm run build && npm start` – erstellt und startet den Production-Build

## Struktur

```
app/          # App Router Pages & Layouts
components/   # UI-Bausteine (Cards, Filter, Nav, etc.)
lib/          # Mock-Daten & Helper
store/        # Zustand Store für globale UI-States
styles/       # Tailwind Styles & globale Utilities
```

## Features
- Landing, Explore, Creator-, Fan- & Challenge-Pages
- Dashboards für Creator & Fans inkl. Rewards, Historie und Remindern
- Login/Register Mock, Payment UI für PayPal/Kreditkarte
- Responsive Social-Media-Look mit TailwindCSS
- Globaler State (Filter, Auth-Rolle, Reminder) via Zustand
- Payment/Reward Infos mit Dummy-Daten
