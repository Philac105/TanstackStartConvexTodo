import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import type { Doc } from "../convex/_generated/dataModel";

export function TodoApp() {
  const [input, setInput] = useState("");
  const todos = useQuery(api.todos.getTodos) as Doc<"todos">[];
  const addTodo = useMutation(api.todos.addTodo);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      await addTodo({ text: input });
      setInput("");
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleTodo({ id: id as any });
    } catch (error) {
      console.error("Failed to toggle todo:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo({ id: id as any });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const completedCount = todos?.filter((t) => t.completed).length || 0;
  const totalCount = todos?.length || 0;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Todo App</h1>

      <form onSubmit={handleAddTodo} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          style={{
            padding: "8px",
            marginRight: "8px",
            fontSize: "16px",
            width: "70%",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <div style={{ marginBottom: "20px", fontSize: "14px", color: "#666" }}>
        {completedCount} of {totalCount} completed
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos?.map((todo) => (
          <li
            key={todo._id}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo._id)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo._id)}
              style={{
                padding: "4px 8px",
                marginLeft: "8px",
                cursor: "pointer",
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {(!todos || todos.length === 0) && (
        <div style={{ textAlign: "center", color: "#999", padding: "20px" }}>
          No todos yet. Add one to get started!
        </div>
      )}
    </div>
  );
}
