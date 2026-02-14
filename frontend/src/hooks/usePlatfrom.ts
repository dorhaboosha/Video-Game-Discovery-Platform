/**
 * usePlatform hook.
 *
 * Resolves a single parent platform by id from the platforms list (via
 * {@link usePlatforms}). Used to get platform name from platformId, e.g. in
 * {@link GameHeading} and {@link PlatformSelector}.
 */

import usePlatforms from "./usePlatforms";

/**
 * Returns the platform object for the given id, or undefined.
 *
 * @param id - Platform id (e.g. from game query store). Optional; undefined returns undefined.
 * @returns The matching platform or undefined
 */
const usePlatform = (id?: number) => {
    
    const { data: platforms } = usePlatforms();
    
    return platforms?.results.find(p => p.id === id);
};

export default usePlatform;