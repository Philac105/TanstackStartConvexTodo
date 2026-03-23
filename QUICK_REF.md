# Quick Reference

## 🚀 Quick Start
```bash
# Terminal 1: Start backend
bun run convex

# Terminal 2: Start frontend  
bun run dev

# Visit: http://localhost:3000
```

## 📁 Project Structure
```
project/
├── convex/              # Backend logic
│   ├── schema.ts       # Database definition
│   └── todos.ts        # Backend functions
├── src/                # Frontend
│   ├── index.tsx       # React entry point
│   └── app.tsx         # Main todo component
├── index.html          # HTML entry
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config
└── README.md           # Full documentation
```

## 🔑 Key Technologies
- **Convex**: Backend & database (local mode)
- **React**: UI framework
- **TanStack Start**: Meta-framework
- **Vite**: Dev server & bundler
- **Bun**: JavaScript runtime
- **TypeScript**: Type safety

## 📚 Documentation Files
- `README.md` - Project overview
- `GETTING_STARTED.md` - Detailed setup guide
- `TECH_OVERVIEW.md` - Technology explanations
- `QUICK_REF.md` - This file

## 🎯 What You Can Learn
- Full-stack application structure
- Backend database design (schema)
- Backend function creation (queries & mutations)
- Frontend React hooks & state
- Real-time data sync
- Development workflow

## 🐛 TypeScript Errors?
They're expected! The `_generated/` files from Convex are created when you run `bun run convex`. Errors will disappear after:
1. Running `bun run convex` in terminal 1
2. Waiting for Convex to start (5-10 seconds)
3. Errors should resolve automatically

## ✨ Features
✅ Add todos
✅ Mark complete/incomplete  
✅ Delete todos
✅ Progress counter
✅ Local storage (backend)
✅ Type-safe (TypeScript)

## 🔄 Common Workflows

### Edit UI
→ Edit `src/app.tsx` → Browser reloads automatically

### Edit Backend
→ Edit `convex/todos.ts` → Backend reloads → Refresh browser

### Add New Feature
1. Update `convex/schema.ts` (if adding fields)
2. Add function to `convex/todos.ts`
3. Update `src/app.tsx` to use new function

## 💻 Commands
```bash
bun run dev          # Frontend dev server
bun run convex       # Backend dev server
bun run dev:full     # Both together
bun run type-check   # TypeScript check
bun run build        # Production build
bun run preview      # Preview production build
bun install          # Install dependencies
```

## 🌐 URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:8200 (internal)
- Convex local dev: automatic

## 📖 Learn More
- [docs.convex.dev](https://docs.convex.dev)
- [react.dev](https://react.dev)
- [vitejs.dev](https://vitejs.dev)
- [tanstack.com/start](https://tanstack.com/start)
- [bun.sh](https://bun.sh)
