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


## ScreenShoots
<img width="1266" height="619" alt="Image" src="https://github.com/user-attachments/assets/63404342-31b6-46cb-b818-82a38b46152d" />

<img width="1270" height="626" alt="Image" src="https://github.com/user-attachments/assets/dacceadc-324a-471f-8411-20cde0b89799" />

<img width="1294" height="577" alt="Image" src="https://github.com/user-attachments/assets/445ff9c3-40a0-47f7-8200-37e995af3e07" />

<img width="1323" height="554" alt="Image" src="https://github.com/user-attachments/assets/fe085f09-f364-488a-8c27-9a4ea02cf902" />

<img width="1319" height="635" alt="Image" src="https://github.com/user-attachments/assets/069b7175-1016-42dd-a0b1-a82734157f93" />

<img width="1320" height="630" alt="Image" src="https://github.com/user-attachments/assets/c56261a9-f180-4e67-b0ce-bfdbbf62c878" />

<img width="1316" height="616" alt="Image" src="https://github.com/user-attachments/assets/dd3ecc28-3fe5-4da5-8a4b-0df42747c7d5" />

<img width="1285" height="617" alt="Image" src="https://github.com/user-attachments/assets/1d0e49f3-4b85-4d58-ad5a-1ae3fd7917c9" />

<img width="1339" height="569" alt="Image" src="https://github.com/user-attachments/assets/8f94a015-acab-4a33-b8bc-0d12357a7036" />

<img width="1324" height="609" alt="Image" src="https://github.com/user-attachments/assets/3bbf4904-4f91-43fa-b171-70413beb4191" />

<img width="1316" height="623" alt="Image" src="https://github.com/user-attachments/assets/6c5596b0-bb70-4268-8d8e-9df8439b0b25" />

<img width="1317" height="630" alt="Image" src="https://github.com/user-attachments/assets/574466e1-bf6f-4a1b-8a1f-9a9a1acd0727" />

<img width="1312" height="621" alt="Image" src="https://github.com/user-attachments/assets/8e54d024-c8a8-4acf-9ae8-c1c679ff9984" />

