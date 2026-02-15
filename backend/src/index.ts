/**
 * Backend entry point.
 *
 * Loads env from dotenv, creates the Express app via {@link createApp},
 * and starts the HTTP server. Port from PORT env or 5000.
 */

import "dotenv/config";
import { createApp } from "./app";

const app = createApp();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});