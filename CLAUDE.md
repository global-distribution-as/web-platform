# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run test         # Run tests once (vitest run)
npm run test:watch   # Run tests in watch mode (vitest)
```

## Architecture

This is a **Global Distribution AS** web platform — a B2B distribution portal connecting European sporting goods suppliers with Asian buyers. Built with React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui.

### Three Portal System

The app serves three user roles, each with its own portal (route namespace, pages, and sidebar navigation):

- **Supplier Portal** (`/supplier/*`) — Product management, order fulfillment, CSV upload
- **Buyer Portal** (`/buyer/*`) — Product catalogue, quote requests, order tracking
- **Admin Portal** (`/admin/*`) — Supplier/buyer management, inventory, pricing with margins

Each portal shares a common `PortalLayout` component (sidebar + header) with role-specific accent colors (blue/green/purple). The landing page (`/`) is a public marketing page.

### Routing

All routes are defined in `src/App.tsx` as flat `<Route>` elements under `BrowserRouter`. Login pages at portal roots (`/supplier`, `/buyer`, `/admin`) use a shared `LoginPage` component. There is no auth/session management yet — login navigates directly to the dashboard.

### Data Layer

Currently uses **static mock data** in `src/lib/data/` (admin.ts, buyer.ts, supplier.ts). No backend API or database integration exists yet. Data is imported directly into page components.

### Key Conventions

- **Path alias**: `@/` maps to `src/` (configured in tsconfig + vite)
- **UI components**: `src/components/ui/` contains shadcn/ui primitives (do not manually edit — use `npx shadcn-ui@latest add <component>`)
- **Custom components**: `src/components/` for app-specific shared components (Logo, Aurora, NavLink, StatCard, StatusBadge)
- **Pages**: `src/pages/` organized by portal role (`admin/`, `buyer/`, `supplier/`)
- **Styling**: Dark-mode-only design using CSS custom properties in `src/index.css` with HSL color tokens. Uses `cn()` utility from `src/lib/utils.ts` for conditional class merging.
- **Icons**: lucide-react
- **Testing**: Vitest + @testing-library/react + jsdom. Test setup in `src/test/setup.ts`.
