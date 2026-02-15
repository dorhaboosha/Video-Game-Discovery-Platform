/**
 * Game entity.
 *
 * Type for a single game from the RAWG API. Used in game lists, cards, and
 * detail views. References {@link Genre}, {@link Platform}, and {@link Publisher}.
 */

import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

/** Game from RAWG: id, name, slug, genres, platforms, metacritic, rating, etc. */
export default interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}
