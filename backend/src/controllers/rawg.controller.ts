/**
 * RAWG API controller.
 *
 * Handles HTTP requests for game data from the RAWG service: games list,
 * single game by slug, genres, platforms, screenshots, and trailer movies.
 * All handlers delegate to {@link rawgService} and pass errors to Express via `next`.
 */

import { Request, Response, NextFunction } from "express";
import { rawgService } from "../services/rawg.service";

/**
 * Normalizes a route param to a single string.
 *
 * Express v5 typings can type route params as `string | string[]`.
 * This helper guarantees we always use a single string value.
 *
 * @param value - The raw param from `req.params`
 * @param name - Param name for error messages
 * @returns The param as a string
 * @throws {Error} When the param is missing or not a string/string[]
 */
function getSingleParam(value: unknown, name: string): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  const err = new Error(`Missing or invalid route param: ${name}`) as Error & { status?: number };
  err.status = 400;
  throw err;
}

/**
 * RAWG controller: handles Express req/res, delegates data fetching to service.
 */
export const rawgController = {
  /**
   * GET games list with optional query filters (e.g. page, search, genres, platforms).
   * Responds with the RAWG games list payload.
   */
  async getGames(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getGames(req.query as Record<string, any>);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET a single game by its URL slug (e.g. "grand-theft-auto-v").
   * Responds with the full game details from RAWG.
   */
  async getGameBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = getSingleParam(req.params.slug, "slug");
      const data = await rawgService.getGameBySlug(slug);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET list of game genres from RAWG (e.g. Action, RPG, Indie).
   */
  async getGenres(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getGenres();
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET list of parent platforms (e.g. PC, PlayStation, Xbox, Nintendo).
   */
  async getParentPlatforms(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getParentPlatforms();
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET screenshot images for a game by RAWG game id.
   * Expects route param: `id`.
   */
  async getScreenshots(req: Request, res: Response, next: NextFunction) {
    try {
      const id = getSingleParam(req.params.id, "id");
      const data = await rawgService.getScreenshots(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * GET trailer/movie clips for a game by RAWG game id.
   * Expects route param: `id`.
   */
  async getMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const id = getSingleParam(req.params.id, "id");
      const data = await rawgService.getMovies(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },
};
