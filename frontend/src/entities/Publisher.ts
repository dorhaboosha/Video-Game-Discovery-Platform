/**
 * Publisher entity.
 *
 * Type for a game publisher from the RAWG API (e.g. Nintendo, EA).
 * Used in game detail views and attributes (e.g. {@link GameAttributes}).
 */

export default interface Publisher {
    id: number;
    name: string;
}