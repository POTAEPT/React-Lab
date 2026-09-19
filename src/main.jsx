import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// TODO Lab A: ครอบ <App /> ด้วย <BrowserRouter> (ลืม = จอขาว "useRoutes() may be used only in the context of a <Router>")

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
