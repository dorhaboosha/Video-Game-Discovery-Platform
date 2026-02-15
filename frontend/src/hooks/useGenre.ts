/**
 * useGenre hook.
 *
 * Resolves a single genre by id from the genres list (via {@link useGenres}).
 * Used to get genre name from genreId, e.g. in {@link GameHeading}.
 */

import useGenres from "./useGenres";

/**
 * Returns the genre object for the given id, or undefined.
 *
 * @param id - Genre id (e.g. from game query store). Optional; undefined returns undefined.
 * @returns The matching genre or undefined
 */
const useGenre = (id?: number) => {
    
    const { data: genres } = useGenres();
    
    return genres?.results.find(g => g.id === id);
};

export default useGenre;