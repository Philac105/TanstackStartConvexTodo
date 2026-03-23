import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { TodoApp } from "./app";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL || "http://localhost:8200");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <TodoApp />
    </ConvexProvider>
  </React.StrictMode>,
);
