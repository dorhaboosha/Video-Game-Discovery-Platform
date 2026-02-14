import { rawgClient } from "../lib/rawgClient";

/**
 * RAWG service: makes HTTP calls to RAWG and returns the raw JSON data.
 * No Express req/res logic here.
 */
export const rawgService = {
  async getGames(query: Record<string, any>) {
    const { data } = await rawgClient.get("/games", { params: query });
    return data;
  },

  async getGameBySlug(slug: string) {
    const { data } = await rawgClient.get(`/games/${encodeURIComponent(slug)}`);
    return data;
  },

  async getGenres() {
    const { data } = await rawgClient.get("/genres");
    return data;
  },

  async getParentPlatforms() {
    const { data } = await rawgClient.get("/platforms/lists/parents");
    return data;
  },

  async getScreenshots(gameId: string) {
    const { data } = await rawgClient.get(`/games/${encodeURIComponent(gameId)}/screenshots`);
    return data;
  },

  async getMovies(gameId: string) {
    const { data } = await rawgClient.get(`/games/${encodeURIComponent(gameId)}/movies`);
    return data;
  },
};
