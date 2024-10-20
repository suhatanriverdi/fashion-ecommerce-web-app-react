import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import Introduction from "./pages/Introduction.tsx";
import Advertisement from "./pages/Advertisement.tsx";
import NotFound from "./pages/NotFound.tsx";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/advertisement",
    element: <Advertisement />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Introduction />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
