import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
