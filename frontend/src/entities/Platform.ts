/**
 * Platform entity.
 *
 * Type for a game platform from the RAWG API (e.g. PC, PlayStation 4, Xbox).
 * Used in game cards (platform icons), filters, and game attributes. Slug is
 * used to map to icons in {@link PlatformIconList}.
 */

export default interface Platform {
    id: number;
    name: string;
    slug: string;
}
