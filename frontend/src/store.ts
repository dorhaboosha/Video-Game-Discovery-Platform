/**
 * Game query store (Zustand).
 *
 * Global state for the games list filters: genre, platform, sort order, and
 * search text. Used by {@link useGames}, {@link GameHeading}, {@link GenreList},
 * {@link PlatformSelector}, {@link SortSelector}, {@link SearchInput}.
 */

import { create } from "zustand";

/** Current filter values for the games list API. */
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

/** Store shape: gameQuery plus setters for each filter. */
interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

/** Zustand hook for game list filters; subscribe and update from any component. */
const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder }}))
}));

export default useGameQueryStore;

