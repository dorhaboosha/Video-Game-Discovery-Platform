import { Router } from "express";
import { rawgController } from "../controllers/rawg.controller";

const router = Router();

/**
 * These routes mirror what the frontend currently uses, but under /api
 */
router.get("/games", rawgController.getGames);
router.get("/games/:slug", rawgController.getGameBySlug);

router.get("/genres", rawgController.getGenres);
router.get("/platforms/lists/parents", rawgController.getParentPlatforms);

router.get("/games/:id/screenshots", rawgController.getScreenshots);
router.get("/games/:id/movies", rawgController.getMovies);

export default router;
