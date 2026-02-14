/**
 * Screenshot entity.
 *
 * Type for a game screenshot from the RAWG API. Used when displaying
 * screenshot images (e.g. in {@link GameScreenshots}).
 */

export default interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
}