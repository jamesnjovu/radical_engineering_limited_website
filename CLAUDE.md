# CLAUDE.md

## Project Overview

Company website for Radical Engineering Limited, a Zambia-based EPC company. Built with React 19 + Vite 8.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Architecture

- **Framework**: React 19 (JSX, no TypeScript) with Vite 8
- **Routing**: React Router DOM 7 — routes defined in `src/App.jsx`
- **Styling**: Component-scoped CSS files (e.g., `Navbar.css` alongside `Navbar.jsx`), plus `src/index.css` for globals
- **Data**: Static JS files in `src/data/` (services, products, projects) — no backend/API
- **Images**: Stored in `/images/` (root level) and `/public/images/`, referenced via absolute paths like `/images/filename.jpeg`

## Conventions

- Components use `.jsx` extension, one component per file
- Each page component has a matching `.css` file in the same directory
- Data files export a default array of objects
- No TypeScript — plain JavaScript throughout
- Fonts loaded via Google Fonts CDN in `index.html` (Poppins + Inter)
- ESLint configured with react-hooks and react-refresh plugins

## Key Files

- `src/App.jsx` — Route definitions and layout (Navbar + Footer wrap all pages)
- `src/main.jsx` — Entry point with BrowserRouter and StrictMode
- `src/data/services.js` — Service definitions with slugs for dynamic routes
- `src/data/products.js` — Product catalog with categories
- `src/data/projects.js` — Project portfolio entries
- `src/components/WhatsAppButton.jsx` — Floating WhatsApp CTA
- `src/components/ScrollReveal.jsx` — Scroll-triggered animations
