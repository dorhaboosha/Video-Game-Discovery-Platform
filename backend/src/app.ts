/**
 * Express application factory.
 *
 * Creates and configures the main app: CORS (non-production), JSON body parser,
 * health check, RAWG API routes under /api, static frontend serve, SPA fallback,
 * and a global error handler.
 */

import express from "express";
import cors from "cors";
import path from "path";
import rawgRoutes from "./routes/rawg.routes";

/**
 * Builds the Express app with middleware, routes, static serve, and error handling.
 *
 * @returns Configured Express application (not yet listening)
 */
export function createApp() {
  const app = express();

  /** CORS in non-production only; production is same-origin. Kept for dev and flexibility. */
  if (process.env.NODE_ENV !== "production") {
    app.use(cors());
  }
  app.use(express.json());

  /** GET /health — simple liveness check. */
  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  /** RAWG API proxy routes mounted at /api. */
  app.use("/api", rawgRoutes);

  /** Serve frontend build from frontend/dist (from backend/dist, go up 2 levels). */
  const frontendDistPath = path.join(__dirname, "../../frontend/dist");
  app.use(express.static(frontendDistPath));

  /** SPA fallback for React Router; serves index.html for non-API routes. Express 5: avoid app.get("*"). */
  app.use((_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });

  /** Global error handler; must be registered last. */
  app.use(
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const message = err instanceof Error ? err.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  );

  return app;
}
