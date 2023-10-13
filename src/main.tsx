import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
