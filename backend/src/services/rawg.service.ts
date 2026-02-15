/**
 * RAWG API service layer.
 *
 * Performs HTTP calls to the RAWG API via {@link rawgClient} and returns
 * the response data. No Express req/res logic; used by {@link rawgController}.
 */

import { rawgClient } from "../lib/rawgClient";
import type {
  RawgGame,
  RawgGenre,
  RawgMovie,
  RawgParentPlatform,
  RawgScreenshot,
} from "../types/rawg.types";

/** RAWG paginated list response shape. */
export interface RawgPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/** Throws a 400 Error if value is not a non-empty numeric string. */
function assertNumericId(value: string, paramName: string): void {
  const trimmed = value.trim();
  if (trimmed.length === 0 || !/^\d+$/.test(trimmed)) {
    const err = new Error(`Invalid ${paramName}: expected a numeric game id`) as Error & { status?: number };
    err.status = 400;
    throw err;
  }
}

/**
 * RAWG service: makes HTTP calls to RAWG and returns the raw JSON data.
 * No Express req/res logic here.
 */
export const rawgService = {
  /**
   * Fetches a paginated/filtered list of games from RAWG.
   *
   * @param query - Query params (e.g. page, search, genres, platforms, ordering)
   * @returns RAWG games list response (results array + count, etc.)
   */
  async getGames(query: Record<string, any>): Promise<RawgPaginatedResponse<RawgGame>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<RawgGame>>("/games", { params: query });
    return data;
  },

  /**
   * Fetches a single game by its URL slug.
   *
   * @param slug - Game slug (e.g. "grand-theft-auto-v")
   * @returns RAWG game details object
   */
  async getGameBySlug(slug: string): Promise<RawgGame> {
    const { data } = await rawgClient.get<RawgGame>(`/games/${encodeURIComponent(slug)}`);
    return data;
  },

  /**
   * Fetches the list of game genres from RAWG.
   *
   * @returns RAWG genres list response
   */
  async getGenres(): Promise<RawgPaginatedResponse<RawgGenre>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<RawgGenre>>("/genres");
    return data;
  },

  /**
   * Fetches the list of parent platforms (PC, PlayStation, Xbox, etc.).
   *
   * @returns RAWG parent platforms list response
   */
  async getParentPlatforms(): Promise<RawgPaginatedResponse<RawgParentPlatform>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<RawgParentPlatform>>("/platforms/lists/parents");
    return data;
  },

  /**
   * Fetches screenshot images for a game by RAWG game id.
   *
   * @param gameId - RAWG game id (numeric string); validated before request.
   * @returns RAWG screenshots response
   */
  async getScreenshots(gameId: string): Promise<RawgPaginatedResponse<RawgScreenshot>> {
    assertNumericId(gameId, "gameId");
    const { data } = await rawgClient.get<RawgPaginatedResponse<RawgScreenshot>>(
      `/games/${encodeURIComponent(gameId)}/screenshots`
    );
    return data;
  },

  /**
   * Fetches trailer/movie clips for a game by RAWG game id.
   *
   * @param gameId - RAWG game id (numeric string); validated before request.
   * @returns RAWG movies response
   */
  async getMovies(gameId: string): Promise<RawgPaginatedResponse<RawgMovie>> {
    assertNumericId(gameId, "gameId");
    const { data } = await rawgClient.get<RawgPaginatedResponse<RawgMovie>>(
      `/games/${encodeURIComponent(gameId)}/movies`
    );
    return data;
  },
};
