/**
 * useTrailers hook.
 *
 * Fetches trailer/movie clips for a game by RAWG game id via React Query. Used
 * by {@link GameTrailer} on the game detail page.
 */

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Trailer from "../entities/Trailer";

/**
 * Fetches trailers (movies) for a game.
 *
 * @param gameId - RAWG game id
 * @returns React Query result with trailers (data.results), loading, error
 */
const useTrailers = (gameId: number) => {
    const apiClient = useMemo(
        () => new APIClient<Trailer>(`/games/${gameId}/movies`),
        [gameId]
    );

    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: apiClient.getAll
    });
};

export default useTrailers;