# Crisis Resource Tracker

A full-stack web application that helps communities locate essential crisis resources, such as food banks, shelters, and medical aid, on an interactive map. Designed to be easy to fork and run a new instance when needed.

This project is currently in active development to showcase **full-stack development** skills using **TypeScript, Node.js, PostgreSQL, Prisma, and Next.js**.  

---

## Features (Planned / In Progress)

- [x] **Backend API (Express + TypeScript)**
  - CRUD endpoints for managing resources
  - In-memory data store (to be replaced with PostgreSQL)
- [ ] **Database Layer (PostgreSQL + Prisma)**
  - Resource model with location data
  - Type-safe queries
- [ ] **Frontend (Next.js + React)**
  - Resource list and details
  - Interactive map (Google Maps)
  - Form to add new resources
- [ ] **Docker Compose Setup**
  - PostgreSQL container
  - Backend container (later)
  - Easy local development

---

## Tech Stack

- **Frontend**: Next.js (React + TypeScript)
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL (via Prisma ORM)
- **Dev Tools**: Docker, pnpm, ts-node-dev

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/ad20630/crisis-resource-tracker
cd crisis-resource-tracker
```

### 2. Backend Setup
```bash
cd backend
pnpm install
cp .env.example .env
```

Run the development server:
```bash
pnpm dev
```

API runs at `http://localhost:8080/api/resources`

---

## Database (PostgreSQL with Docker)

If you have Docker:
```bash
docker compose up -d
```

This will start a Postgres database named `crisis_db`.

Run Prisma migration:
```bash
cd backend
npx prisma migrate dev --name init
```

Open Prisma Studio to explore data:
```bash
npx prisma studio
```

---

## Project Structure

```
crisis-resource-tracker/
├── backend/         # Express + TypeScript + Prisma API
│   ├── prisma/      # Prisma schema and migrations
│   └── src/         # API source code
├── frontend/        # Next.js app (to be added)
└── docker-compose.yml
```

---

## Roadmap

- [ ] Implement full CRUD with Postgres
- [ ] Build Next.js frontend with resource map
- [ ] Add authentication (optional)
- [ ] Deploy to cloud (Render / Vercel + Railway / Supabase)

---

## License

Released under MIT License.
