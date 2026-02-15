/**
 * RAWG API service layer.
 *
 * Performs HTTP calls to the RAWG API via {@link rawgClient} and returns
 * the response data. No Express req/res logic; used by {@link rawgController}.
 */

import { rawgClient } from "../lib/rawgClient";

/** RAWG paginated list response shape. */
export interface RawgPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
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
  async getGames(query: Record<string, any>): Promise<RawgPaginatedResponse<unknown>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<unknown>>("/games", { params: query });
    return data;
  },

  /**
   * Fetches a single game by its URL slug.
   *
   * @param slug - Game slug (e.g. "grand-theft-auto-v")
   * @returns RAWG game details object
   */
  async getGameBySlug(slug: string): Promise<unknown> {
    const { data } = await rawgClient.get<unknown>(`/games/${encodeURIComponent(slug)}`);
    return data;
  },

  /**
   * Fetches the list of game genres from RAWG.
   *
   * @returns RAWG genres list response
   */
  async getGenres(): Promise<RawgPaginatedResponse<unknown>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<unknown>>("/genres");
    return data;
  },

  /**
   * Fetches the list of parent platforms (PC, PlayStation, Xbox, etc.).
   *
   * @returns RAWG parent platforms list response
   */
  async getParentPlatforms(): Promise<RawgPaginatedResponse<unknown>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<unknown>>("/platforms/lists/parents");
    return data;
  },

  /**
   * Fetches screenshot images for a game by RAWG game id.
   *
   * @param gameId - RAWG game id (numeric string)
   * @returns RAWG screenshots response
   */
  async getScreenshots(gameId: string): Promise<RawgPaginatedResponse<unknown>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<unknown>>(`/games/${encodeURIComponent(gameId)}/screenshots`);
    return data;
  },

  /**
   * Fetches trailer/movie clips for a game by RAWG game id.
   *
   * @param gameId - RAWG game id (numeric string)
   * @returns RAWG movies response
   */
  async getMovies(gameId: string): Promise<RawgPaginatedResponse<unknown>> {
    const { data } = await rawgClient.get<RawgPaginatedResponse<unknown>>(`/games/${encodeURIComponent(gameId)}/movies`);
    return data;
  },
};
