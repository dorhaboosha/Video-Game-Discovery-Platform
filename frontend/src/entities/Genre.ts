/**
 * Genre entity.
 *
 * Type for a game genre from the RAWG API (e.g. Action, RPG, Indie).
 * Used in game filters and genre lists.
 */

export default interface Genre {
    id: number;
    name: string;
    image_background: string;
}
