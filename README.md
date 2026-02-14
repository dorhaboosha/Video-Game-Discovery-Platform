# Video Game Discovery Platform 🎮

A **React + TypeScript** web app for discovering video games — browse, search, filter, and sort games using the **RAWG Video Games Database API**.

This repository is a fullstack monorepo:
- **frontend/** (React + Vite)
- **backend/** (Node + Express + TypeScript) — proxies RAWG so the API key stays server-side and serves the built frontend in production

## Live Demo
- https://video-game-discovery-platform.onrender.com

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
- React Router

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
git clone https://github.com/dorhaboosha/Video-Game-Discovery-Platform.git
cd Video-Game-Discovery-Platform
```

### 2) Install dependencies (one command)
From the **repo root**:
```bash
npm install
npm run install:all
```

### 3) Configure environment variables (backend)
Create `backend/.env`:
```env
RAWG_API_KEY=your_rawg_key_here
PORT=5000
```

You can use `backend/.env.example` as a template.

Get an API key from RAWG: https://rawg.io/apidocs

### 4) Start the app (development)
From the **repo root**:
```bash
npm run dev
```

Open:
- Frontend (Vite): http://localhost:5173  
- Backend health: http://localhost:5000/health  

✅ The frontend calls `/api/...` and Vite proxies it to the backend.

---

## Production-style run (single server, one port)
This mimics the deployed setup (backend serves the built frontend):

```bash
npm run build:all
npm run start:prod
```

Open:
- http://localhost:5000

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

## Project Structure
```text
frontend/        # React app (UI)
backend/         # Express API proxy + serves frontend/dist in production
```

---

## Deployment (Render)
This project is deployed as a **single Render Web Service** (one domain):
- The backend builds the frontend (`frontend/dist`) and serves it
- The RAWG key is stored as an environment variable on Render (`RAWG_API_KEY`)

Render build/start commands used:
- Build: `npm install && npm run install:all && npm run build:all`
- Start: `npm run start:prod`

---

## Acknowledgements
Inspired by the “Video Game Discovery App / GameHub” style project commonly built while learning modern React tooling.
