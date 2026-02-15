/**
 * useGame hook.
 *
 * Fetches a single game by slug from the API via React Query. Used on the
 * game detail page to load full game data.
 */

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

/**
 * Fetches a single game by URL slug.
 *
 * @param slug - Game slug (e.g. "grand-theft-auto-v")
 * @returns React Query result with game data, loading, and error state
 */
const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useGame;