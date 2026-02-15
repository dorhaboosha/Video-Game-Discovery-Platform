/**
 * Trailer entity.
 *
 * Type for a game trailer/movie from the RAWG API. Includes preview image URL
 * and video URLs (480p, max). Used when displaying trailers (e.g. in
 * {@link GameTrailer}).
 */

export default interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: {480: string, max: string};
}