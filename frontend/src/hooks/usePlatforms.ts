/**
 * usePlatforms hook.
 *
 * Fetches the list of parent platforms from the API via React Query. Uses
 * static platforms from data/platforms as initialData so the dropdown shows
 * immediately. Data is considered fresh for 24h. Used by {@link PlatformSelector}
 * and {@link usePlatform}.
 */

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

/**
 * Fetches parent platforms list; uses static data as initialData for instant display.
 *
 * @returns React Query result with platforms (data.results), loading, error
 */
const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
});

export default usePlatforms;