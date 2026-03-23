# Getting Started with TanStack Start + Convex Todo App

This guide walks you through running the app for the first time.

## Prerequisites
- **Bun** installed ([Install here](https://bun.sh))
- A terminal (bash, zsh, or PowerShell)

## Step 1: Dependencies Already Installed ✓
The dependencies have already been installed. If you need to reinstall them:
```bash
bun install
```

## Step 2: Start Convex Backend (First Terminal)

Open a terminal in the project directory and run:
```bash
bun run convex
```

You'll see output like:
```
$ convex dev
✔ Welcome to Convex...
Setting up a new project...
This command will run your Convex backend locally...
```

**Important**: The first time you run this, Convex will ask a few questions:
- **"Would you like to login to your account?"** → Answer: `n` (no) to run locally
- **"Continue?"** → Answer: `y` (yes)

This will:
- ✓ Start the local Convex backend on `http://localhost:8200`
- ✓ Generate the `convex/_generated/` directory with type definitions
- ✓ Watch for changes in the `convex/` directory

**Keep this terminal open and running!**

## Step 3: Start the React App (Second Terminal)

Open a **second terminal** in the project directory and run:
```bash
bun run dev
```

You'll see:
```
$ vite
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:3000/
```

Open `http://localhost:3000` in your browser. You should see the Todo App!

**Keep this terminal open and running!**

## Using the App

1. **Type in the input field** and click "Add" to create a new todo
2. **Click the checkbox** next to a todo to mark it complete/incomplete
3. **Click "Delete"** to remove a todo

## Understanding What's Happening

- **Convex** (backend): Stores your todos in a local database, processes requests
- **React/Vite** (frontend): Displays the UI, sends requests to Convex when you interact
- **Hot Reload**: Edit files and changes appear instantly without refreshing

## Editing Code

### Add a Todo Feature
Try editing `src/app.tsx`:
- Change the button text: `<button type="submit">Add</button>` → `<button type="submit">Create</button>`
- Save the file → the UI updates instantly in the browser

### Change Backend Logic
Try editing `convex/todos.ts`:
- Change line 12: `order("desc")` → `order("asc")` to sort todos differently
- Save the file → backend reloads automatically
- Refresh browser → todos appear in new order

## All Commands

| Command | Purpose | Terminal |
|---------|---------|----------|
| `bun run convex` | Start backend | Terminal 1 |
| `bun run dev` | Start frontend | Terminal 2 |
| `bun run dev:full` | Start both together | Single terminal (uses `concurrently`) |
| `bun run type-check` | Check TypeScript errors | Anytime |

## Troubleshooting

### "Cannot find module '_generated'"
**Solution**: Did you run `bun run convex` first? Wait a few seconds for Convex to generate files.

### "Connection refused on localhost:8200"
**Solution**: Make sure `bun run convex` is actually running in another terminal.

### React app won't load on localhost:3000
**Solution**: Check that `bun run dev` is running and there are no TypeScript errors.

### "Port 3000 is already in use"
**Solution**: 
- Close other applications using port 3000, or
- Edit `vite.config.ts` and change `port: 3000` to another number like `3001`

## Next Steps

1. ✅ Get the app running (you just did this!)
2. 📚 Read `TECH_OVERVIEW.md` to understand each technology
3. 🔧 Make code changes and see them live
4. 💡 Try one of the customization ideas from `TECH_OVERVIEW.md`
5. 📖 Explore the official docs:
   - [Convex Docs](https://docs.convex.dev)
   - [React Docs](https://react.dev)
   - [Vite Docs](https://vitejs.dev)

## Need Help?

- Check the error messages—they're usually helpful!
- Look at the official documentation
- Try stopping and restarting the servers
- Make sure you have Bun installed: `bun --version`

Happy coding! 🚀
