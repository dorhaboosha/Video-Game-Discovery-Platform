/**
 * React Router configuration.
 *
 * Browser router with {@link Layout} as root (nav + outlet). Child routes:
 * / = {@link HomePage}, /games/:slug = {@link GameDetailPage}. Unhandled
 * errors render {@link ErrorPage}.
 */

import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
