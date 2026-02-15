/**
 * useScreenshots hook.
 *
 * Fetches screenshot images for a game by RAWG game id via React Query. Used
 * by {@link GameScreenshots} on the game detail page.
 */

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/Screenshot";

/**
 * Fetches screenshots for a game.
 *
 * @param gameId - RAWG game id
 * @returns React Query result with screenshots (data.results), loading, error
 */
const useScreenshots = (gameId: number) => {
    
    const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    });
};

export default useScreenshots;
