# Technology Overview: TanStack Start + Convex Todo App

This document explains how each technology works in this project and what you'll learn.

## 🎯 The Stack

### **Convex** - Backend Database & API
- **What it does**: Provides a backend database and real-time API
- **In this project**: 
  - Stores todos in the cloud (or locally in dev mode)
  - Provides functions to add, delete, and update todos
  - Handles data validation
- **Files**: `convex/schema.ts` (database table definition), `convex/todos.ts` (API functions)
- **Key learning**: How to define a schema, write backend functions, and call them from the frontend

### **React** - UI Framework
- **What it does**: Renders the user interface and manages component state
- **In this project**:
  - `TodoApp` component displays the list of todos
  - State management for the input field
  - Rendering the UI based on data from Convex
- **Files**: `src/app.tsx`
- **Key learning**: React hooks (`useState`, `useMutation`, `useQuery`)

### **TanStack Start** - Meta-framework
- **What it does**: Provides structure for your React + backend application
- **In this project**:
  - Bridges the gap between frontend and backend
  - Sets up routing (not heavily used in this simple app)
  - Provides a dev experience with hot module replacement
- **Files**: `vite.config.ts`, `src/index.tsx`
- **Key learning**: How a meta-framework orchestrates frontend + backend development

### **Vite** - Build Tool & Dev Server
- **What it does**: Fast development server and build tool
- **In this project**:
  - Serves your React app locally with hot reload
  - Bundles your code for production
- **Command**: `bun run dev`
- **Key learning**: How modern dev servers provide rapid feedback

### **Bun** - JavaScript Runtime
- **What it does**: Alternative to Node.js, faster and simpler
- **In this project**:
  - Runs your dev server
  - Installs dependencies
- **Key learning**: Using a fast, modern JavaScript runtime

## 🔄 Data Flow

```
User interactions (click, type)
         ↓
React Component (src/app.tsx)
         ↓
Convex Mutation/Query via useQuery, useMutation
         ↓
Backend (convex/todos.ts)
         ↓
Database (defined in convex/schema.ts)
         ↓
Result sent back to React component
         ↓
UI updates automatically
```

## 📝 Key Files & What They Do

### Frontend
| File | Purpose |
|------|---------|
| `index.html` | Entry point loaded by browser |
| `src/index.tsx` | React entry + Convex provider setup |
| `src/app.tsx` | Main Todo component |

### Backend (Convex)
| File | Purpose |
|------|---------|
| `convex/schema.ts` | Database schema (defines `todos` table) |
| `convex/todos.ts` | Backend functions (queries & mutations) |

### Configuration
| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config |
| `vite.config.ts` | Vite dev server & build config |
| `convex.json` | Convex project config |

## 🚀 Understanding the Workflow

### When you run `bun run dev:full`

1. **Terminal 1** (Convex): `convex dev`
   - Starts local Convex backend at `http://localhost:8200`
   - Watches `convex/` files for changes
   - When you change `convex/todos.ts`, it hot-reloads

2. **Terminal 2** (Frontend): `vite`
   - Starts React dev server at `http://localhost:3000`
   - Watches `src/` files for changes
   - Hot module replacement: edit and see changes instantly

### When user interacts (e.g., adds a todo)

1. User types in input box, clicks "Add"
2. `app.tsx` calls `addTodo()` mutation
3. Mutation sends request to backend at `http://localhost:8200`
4. `convex/todos.ts` validates and inserts into database
5. Convex returns the ID of the new todo
6. React automatically queries for updated todos
7. UI re-renders with new todo

## 💡 Learning Outcomes

By working through this project, you'll understand:

✅ How to structure a full-stack React application
✅ Database schema definition with Convex
✅ Writing backend functions (queries & mutations)
✅ Calling backend from React components
✅ Real-time data synchronization
✅ TypeScript in a full-stack context
✅ Development workflow with hot-reload
✅ The role of different tools in the stack

## 🔧 Customization Ideas

Try these to deepen your learning:

1. **Add filtering**: Show only completed/incomplete todos
2. **Add due dates**: Update schema, add date picker to UI
3. **Add categories**: Multiple tables with relationships
4. **Add local storage**: Cache todos browser-side
5. **Add search**: Search todos by text using Convex search indexes
6. **Deploy**: Push to Convex cloud instead of running locally

## 📚 Resources

- [Convex Docs](https://docs.convex.dev)
- [React Docs](https://react.dev)
- [TanStack Start](https://tanstack.com/start)
- [Vite Docs](https://vitejs.dev)
- [Bun Docs](https://bun.sh/docs)
