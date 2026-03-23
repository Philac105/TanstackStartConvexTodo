<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on correct Convex API usage and patterns. These rules override generic Convex assumptions.

Use these files as the main implementation map:
- Backend schema and functions: `convex/schema.ts`, `convex/todos.ts`
- Frontend Convex wiring and usage: `src/index.tsx`, `src/app.tsx`
- Generated references used by the client: `convex/_generated/api`, `convex/_generated/dataModel`

Current local workflow from `package.json`:
- `bun run convex` to run Convex locally
- `bun run dev` to run the Vite app
- `bun run dev:full` to run both together
- `bun run type-check` for TypeScript checks

Project-specific integration details:
- `src/index.tsx` requires `VITE_CONVEX_URL` and throws if it is missing.
- Keep Convex function names aligned between `convex/todos.ts` and `api.todos.*` usage in `src/app.tsx` (`getTodos`, `addTodo`, `toggleTodo`, `deleteTodo`).

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->
