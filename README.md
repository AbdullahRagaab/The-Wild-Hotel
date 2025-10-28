# The Wild Hotel

A modern single-page admin/dashboard application for managing a small hotel (The Wild Hotel). Built with React and Vite, the app provides features for booking management, cabins, guest data, check-in/out, reporting, user authentication, and site settings. It integrates with Supabase for backend services and is prepared for static hosting (Netlify).

## Project status

Prototype / production-ready admin UI (depends on backend configuration). This repository contains the frontend application and client-side integration with Supabase.

## Table of contents

- Project overview
- Features
- Technologies & libraries (complete list)
- Folder structure (high level)
- Setup & run
- Environment variables
- Deployment notes
- Contributing
- License
- Contact

## Features

- User authentication (signup, login, update profile, change password)
- Bookings CRUD and table operations
- Cabin management (create, edit, delete)
- Check-in / check-out workflows and today activity
- Dashboard with charts and filters
- File upload UI and avatar handling
- Reusable UI components and responsive layout
- Client-side validation and toast notifications

## Technologies & libraries

This section lists every main technology and library used in this project and a short note about its role.

Core platform
- Node.js / npm (project runtime and package management)
- Vite (development server and build tool)
- React (UI library)

Hosting / deployment
- Netlify (static hosting; repository contains a `netlify.toml` with SPA redirect)

Backend / data
- Supabase (`@supabase/supabase-js`) — primary backend-as-a-service for auth, database, and file storage (client integration).

State, data fetching & caching
- @tanstack/react-query — server-state management, queries and cache for API calls
- @tanstack/react-query-devtools — devtools for debugging query cache

Routing & forms
- react-router-dom — client-side routing
- react-hook-form — form handling and validation

UI & styling
- styled-components — CSS-in-JS styling solution for components
- react-icons — iconography

Validation, errors & UX
- react-error-boundary — safe error boundaries for React components
- react-hot-toast — toast notifications

Charts & date utilities
- recharts — charts for dashboards and analytics components
- date-fns — date formatting and helpers

Developer tooling
- Vite plugin React (`@vitejs/plugin-react`) — React support for Vite
- vite-plugin-eslint — ESLint plugin for Vite
- eslint — static linting
- eslint-config-react-app — shared ESLint config used by the project
- Type definitions for dev experience: `@types/react`, `@types/react-dom`

Other utilities (project code)
- Project contains a set of internal utilities under `src/utils` and `src/services` such as API wrappers (`apiAuth.js`, `apiBookings.js`, `apiCabins.js`, `apiSettings.js`) and `services/supabase.js`.

> All dependencies are declared in `package.json`.

## High-level folder structure

- `src/` — main source
  - `features/` — feature modules (auth, bookings, cabins, check-in/out, dashboard, settings)
  - `services/` — API wrappers and `supabase` client
  - `ui/` — shared UI components (buttons, forms, tables, etc.)
  - `pages/` — route pages
  - `styles/` — global styles and theming
  - `context/` — React contexts (e.g., dark mode)
  - `hooks/` — custom hooks
  - `data/` — fixtures and sample data

## Setup & run

Prerequisites
- Node.js (recommend v18+)
- npm (or yarn/pnpm if you prefer; scripts assume npm)

Install dependencies

```powershell
# from repository root
npm install
```

Development server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

## Environment variables

The app integrates with Supabase. Create a `.env` file (or set system environment variables) with the values required by `services/supabase.js`. Typical variables:

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key

Notes: Vite requires env variables used in client code to be prefixed with `VITE_`.

## Deployment notes

- Netlify is a recommended target for static hosting. This repo includes `netlify.toml` for SPA routing redirects.
- Ensure environment variables (`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`) are set in your Netlify site settings.

## Contributing

Small contributions are welcome. Suggested process:

1. Fork the repository and create a branch for your change.
2. Run `npm install` and `npm run dev` to test locally.
3. Open a pull request with a clear description of changes.

Please keep changes scoped, add tests for new behaviors where appropriate, and follow the project's code style.

## License

Add your preferred license here (e.g., MIT) or consult the project owner.

## Contact

If you want help customizing this README (badges, screenshots, more deployment docs) or adding CI/CD, tell me what you'd like and I can add it.
