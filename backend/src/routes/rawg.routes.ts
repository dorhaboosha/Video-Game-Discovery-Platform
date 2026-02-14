/**
 * RAWG API routes.
 *
 * Express router for game data from RAWG. Mount under `/api` (or similar);
 * these paths mirror what the frontend expects. All handlers live in
 * {@link rawgController}.
 */

import { Router } from "express";
import { rawgController } from "../controllers/rawg.controller";

const router = Router();

/** GET /games — list games (query: page, search, genres, platforms, etc.) */
router.get("/games", rawgController.getGames);
/** GET /games/:slug — single game details by URL slug */
router.get("/games/:slug", rawgController.getGameBySlug);

/** GET /genres — list of genres */
router.get("/genres", rawgController.getGenres);
/** GET /platforms/lists/parents — list of parent platforms */
router.get("/platforms/lists/parents", rawgController.getParentPlatforms);

/** GET /games/:id/screenshots — screenshots for a game by RAWG id */
router.get("/games/:id/screenshots", rawgController.getScreenshots);
/** GET /games/:id/movies — trailer/movies for a game by RAWG id */
router.get("/games/:id/movies", rawgController.getMovies);

export default router;
