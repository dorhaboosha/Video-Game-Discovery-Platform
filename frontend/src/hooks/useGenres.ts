/**
 * useGenres hook.
 *
 * Fetches the list of game genres from the API via React Query. Uses static
 * genres from {@link ../data/genres} as initialData so the sidebar shows
 * immediately. Data is considered fresh for 24h. Used by {@link GenreList} and
 * {@link useGenre}.
 */

import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import ms from 'ms';
import APIClient from '../services/api-client';
import Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

/**
 * Fetches genres list; uses static data as initialData for instant display.
 *
 * @returns React Query result with genres (data.results), loading, error
 */
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
});

export default useGenres;