import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Introduction from "./pages/Introduction.tsx";
import Advertisement from "./pages/Advertisement.tsx";
import Products from "./pages/Products.tsx";
import NotFound from "./pages/NotFound.tsx";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    // First Page Where We Display Our Branding with Animations
    path: "/",
    element: <Introduction />,
    errorElement: <NotFound />,
  },
  {
    path: "/advertisement",
    element: <Advertisement />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
