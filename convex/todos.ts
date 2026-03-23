import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Query to get all todos
export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db
      .query("todos")
      .order("desc")
      .collect();
    return todos;
  },
});

// Mutation to add a new todo
export const addTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.text.trim()) {
      throw new Error("Todo text cannot be empty");
    }
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      completed: false,
      createdAt: Date.now(),
    });
    return todoId;
  },
});

// Mutation to toggle todo completion
export const toggleTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    await ctx.db.patch(args.id, {
      completed: !todo.completed,
    });
    return args.id;
  },
});

// Mutation to delete a todo
export const deleteTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
