# TanStack Start + Convex Todo App

A simple todo application built with **TanStack Start**, **React**, and **Convex** to learn how these technologies work together.

## Features

- ✅ Add, delete, and mark todos as complete
- ✅ Convex backend for real-time data (local dev mode)
- ✅ TanStack Start for the frontend framework
- ✅ TypeScript for type safety
- ✅ Minimal, simple UI

## Prerequisites

- **Bun** (v1.0+) - [install here](https://bun.sh)
- **Node.js** (for Convex CLI compatibility)

## Setup

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Verify Convex is set up:**
   ```bash
   bun convex
   ```

## Running the App

### Option 1: Run Both Convex and App Together
```bash
bun run dev:full
```

This will start:
- Convex backend (`convex dev`) on http://localhost:8200
- React app on http://localhost:3000 (or another available port)

### Option 2: Run Them Separately

**Terminal 1 - Start Convex backend:**
```bash
bun run convex
```

**Terminal 2 - Start the app:**
```bash
bun run dev
```

## Project Structure

```
.
├── convex/
│   ├── schema.ts          # Database schema (todos table)
│   └── todos.ts           # Convex functions (queries & mutations)
├── src/
│   ├── index.tsx          # React entry point with Convex provider
│   └── app.tsx            # Main Todo component
├── index.html             # HTML entry point
├── package.json           # Dependencies & scripts
└── tsconfig.json          # TypeScript configuration
```

## How It Works

1. **Convex Backend** (`convex/todos.ts`):
   - Stores todos in the database
   - Provides functions: `getTodos`, `addTodo`, `toggleTodo`, `deleteTodo`

2. **React Frontend** (`src/app.tsx`):
   - Uses `useQuery` to fetch todos
   - Uses `useMutation` to update todos
   - Simple form to add new todos

3. **Convex Provider** (`src/index.tsx`):
   - Wraps the app to enable real-time data sync

## Available Scripts

- `bun run dev` - Start development server
- `bun run convex` - Start Convex backend
- `bun run dev:full` - Run both together
- `bun run build` - Build for production
- `bun run type-check` - Check TypeScript errors

## Notes

- This is a **local-only** setup using Convex's development mode
- No authentication is configured
- UI is intentionally minimal to focus on learning the technologies
