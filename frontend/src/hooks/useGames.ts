/**
 * useGames hook.
 *
 * Fetches a paginated list of games with infinite scroll. Filters (genre,
 * platform, sort order, search) come from {@link useGameQueryStore}. Data
 * is considered fresh for 24h. Used by {@link GameGrid}.
 */

import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse} from "../services/api-client";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

/**
 * Fetches games list with infinite pagination; filters from game query store.
 *
 * @returns React Query infinite query result (data.pages, fetchNextPage, hasNextPage, etc.)
 */
const useGames = () => {

    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1}) => apiClient.getAll(
            {
                params: {
                    genres: gameQuery.genreId, 
                    parent_platforms: gameQuery.platformId, 
                    ordering: gameQuery.sortOrder, 
                    search: gameQuery.searchText,
                    page: pageParam
                }}
        ),
        getNextPageParam: (lastpage, allPages) => {
            return lastpage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h')
    });

}
    

export default useGames;