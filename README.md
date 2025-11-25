# Beam Analyzer (React + Vite)

Interactive structural beam analyzer with charts, presets, sharing, and exports. Built in React/Vite with Recharts and Lucide icons.

## Features
- Geometry/material selection with self-weight toggle and load factors (ULS) plus effective length K.
- Loads: point, distributed, triangular, moment; presets for quick setup; keyboard shortcuts (A add, P midspan point, U uniform).
- Supports: two-support model (pinned/roller/fixed) with clamped positions inside the span.
- Results: shear/moment/deflection/stress diagrams, LTB check (Mcr/FS), reactions, summaries.
- Exports: JSON, text/PDF-style report, CSV diagrams; copy shareable URL (state encoded in hash); state persists to localStorage.
- Styling: dark UI, gradients, responsive charts, basic accessibility (focus states, ARIA labels), ES/EN toggle.
- Tooling: TypeScript-ready configs, ESLint/Prettier, Husky pre-commit lint hook, GitHub Actions CI (lint).

## Quick start
```bash
npm install
npm run dev
# open the printed localhost URL
```

## Keyboard shortcuts
- `A` add load
- `P` add midspan point load
- `U` add full-span uniform load

## Presets
- Simple span: pinned + roller, midspan point load.
- Voladizo: fixed + roller, uniform load.
- 2-span preset currently maps to two supports (0 and 12 m) for compatibility with the solver.

## Sharing / persistence
- State auto-saves to `localStorage` and updates the URL hash (`#state=...`).
- Use the “Copy link” button to share; loading the link restores the scenario.

## Scripts
- `npm run dev` — start Vite dev server.
- `npm run build` — production build.
- `npm run preview` — preview build.
- `npm run lint` — ESLint (JS/TS/JSX/TSX).
- `npm run prepare` — sets up Husky (installed automatically on install).

## Notes / Limitations
- Solver is single-span/two-support; multi-support/continuous analysis not implemented.
- TypeScript migration is partial; `noImplicitAny` is relaxed to keep the build running.
- PDF export is text-based (saved with .pdf extension); replace with a proper PDF generator if needed.

## Tech stack
- React 18, Vite, Recharts, Lucide icons
- ESLint + Prettier, Husky, GitHub Actions CI
