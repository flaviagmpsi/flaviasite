# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional website for Flávia Gonçalves Moreira, a clinical psychologist (Psicologia Analítica / Jungian approach) based in Belo Horizonte, Brazil. The site is a single-page React application in Brazilian Portuguese (pt-BR).

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint with react-hooks and react-refresh plugins)
- **Preview prod build:** `npm run preview`

## Tech Stack

- React 19 + Vite 8 (JavaScript, no TypeScript)
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Framer Motion for animations
- Lucide React for icons
- No router — single-page with anchor navigation

## Architecture

The app is a single-page layout composed of sequential section components, all rendered in `App.jsx`:

`Navbar → Hero → StatementStrip → About → Projects → FAQ → Contact → Footer`

All components live in `src/components/`. There is no routing, state management, or API integration. Some component files exist in `src/components/` but are not currently rendered in `App.jsx` (e.g., `ApproachQuote`, `Services`).

## Styling

- Tailwind v4 with custom theme tokens defined in `src/index.css` under `@theme`
- Color palette: warm beige/sand tones (`surface-*`), ruby accents (`rubi`), purple (`lilas`, `roxo-suave`), dark warm browns (`dark-*`), text colors (`text-primary`, `text-secondary`, `text-muted`, `text-light`)
- Typography: "Cormorant Garamond" (display/headings) and "DM Sans" (body), loaded via Google Fonts in `index.html`
- A subtle noise texture overlay is applied via `body::after`
- Custom CSS animations: `marquee` (statement strip), `breathe` (hero)
- Utility class `drop-cap` applies a styled first-letter (Cormorant Garamond, ruby color)

## ESLint Config

- `no-unused-vars` ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`)

## Other Files

- `psicologa-estetica.html` — standalone HTML prototype/reference of the site design (not part of the React app)
