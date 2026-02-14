import { Request, Response, NextFunction } from "express";
import { rawgService } from "../services/rawg.service";

/**
 * Express v5 typings can type route params as string | string[].
 * This helper guarantees we always use a single string value.
 */
function getSingleParam(value: unknown, name: string): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  throw new Error(`Missing or invalid route param: ${name}`);
}

/**
 * RAWG controller: handles Express req/res, delegates data fetching to service.
 */
export const rawgController = {
  async getGames(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getGames(req.query as Record<string, any>);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async getGameBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = getSingleParam(req.params.slug, "slug");
      const data = await rawgService.getGameBySlug(slug);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async getGenres(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getGenres();
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async getParentPlatforms(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await rawgService.getParentPlatforms();
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async getScreenshots(req: Request, res: Response, next: NextFunction) {
    try {
      const id = getSingleParam(req.params.id, "id");
      const data = await rawgService.getScreenshots(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

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
