# Video Game Discovery App 🎮

A **React + TypeScript** web app for discovering video games — browse, search, filter, and sort games using the **RAWG Video Games Database API**.

This repo includes:
- **frontend/** (React + Vite)
- **backend/** (Node + Express + TypeScript) — proxies RAWG so the API key stays server-side

---

## Features
- Browse games
- Search by game name
- Filter by genre / platform
- Sort results (e.g., popularity, rating, release date)
- Responsive UI (desktop + mobile)

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Query

### Backend
- Node.js
- Express
- TypeScript
- Axios (RAWG API requests)

---

## Why a backend?
If the frontend calls RAWG directly, the API key can be seen in the browser Network tab.  
The backend acts as a **proxy**:
- Browser calls: `/api/...`
- Backend calls RAWG with the secret key
- The key is never exposed to the client

---

## Getting Started (Run Locally)

### 1) Clone the repo
```bash
git clone https://github.com/dorhaboosha/Video-Game-Discovery-App.git
cd Video-Game-Discovery-App
```

### 2) Install dependencies

#### Option A: One command (root scripts)
From the **repo root**:
```bash
npm install
npm run install:all
```

#### Option B: Install manually
Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd ../frontend
npm install
```

### 3) Configure environment variables (backend)
Create `backend/.env`:
```env
RAWG_API_KEY=your_rawg_key_here
PORT=5000
```

You can use `backend/.env.example` as a template.

Get an API key from RAWG: https://rawg.io/apidocs

### 4) Start the app

#### Option A: One command (runs backend + frontend together)
From the **repo root**:
```bash
npm run dev
```

#### Option B: Two terminals
Terminal 1 (backend):
```bash
cd backend
npm run dev
```

Terminal 2 (frontend):
```bash
cd frontend
npm run dev
```

Open:
- Frontend: http://localhost:5173  
- Backend health: http://localhost:5000/health  

✅ The frontend calls `/api/...` and Vite proxies it to the backend.

---

## Backend API (proxy endpoints)
The backend exposes these endpoints (mirroring RAWG):
- `GET /api/games`
- `GET /api/games/:slug`
- `GET /api/genres`
- `GET /api/platforms/lists/parents`
- `GET /api/games/:id/screenshots`
- `GET /api/games/:id/movies`

---

## Root scripts (required for `npm run dev` at repo root)

To make `npm run dev` start **both** frontend + backend, create a **root** `package.json` (at the repo root) like this:

```json
{
  "name": "video-game-discovery-app",
  "private": true,
  "devDependencies": {
    "concurrently": "^9.0.0"
  },
  "scripts": {
    "dev": "concurrently \"npm --prefix backend run dev\" \"npm --prefix frontend run dev\"",
    "install:all": "npm --prefix backend install && npm --prefix frontend install"
  }
}
```

Then run (from repo root):
```bash
npm install
npm run dev
```

---

## Deployment Notes
If you deploy **frontend only** (e.g., GitHub Pages), it won’t have the backend `/api` routes.

Recommended deployment options:
1) **Deploy frontend + backend together** (backend serves the built frontend) → same origin, no CORS needed.
2) Deploy them separately and configure allowed origins + env vars.

---

## Project Structure (high level)
```text
frontend/        # React app (UI)
backend/         # Express API proxy (RAWG key stored server-side)
```

---

## Acknowledgements
Inspired by the “Video Game Discovery App / GameHub” style project commonly built while learning modern React tooling.
