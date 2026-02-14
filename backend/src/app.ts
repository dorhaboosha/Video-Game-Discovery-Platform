import express from "express";
import cors from "cors";
import path from "path";
import rawgRoutes from "./routes/rawg.routes";

export function createApp() {
  const app = express();

  // Middleware
  // In production (same-origin), CORS isn't required.
  // Keeping it enabled for now is fine (dev + flexibility).
  if (process.env.NODE_ENV !== "production") {
    app.use(cors());
  }
  app.use(express.json());

  // Health check
  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  // API routes (proxy to RAWG)
  app.use("/api", rawgRoutes);

  /**
   * Serve frontend build (when it exists)
   * backend/dist/app.js -> go up 2 levels -> frontend/dist
   */
  const frontendDistPath = path.join(__dirname, "../../frontend/dist");
  app.use(express.static(frontendDistPath));

  /**
   * SPA fallback (React Router) - Express 5 safe
   * IMPORTANT: Do NOT use app.get("*") or app.get("/*") in Express 5 here.
   */
  app.use((_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });

  // Basic error handler (keep last)
  app.use(
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const message = err instanceof Error ? err.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  );

  return app;
}
