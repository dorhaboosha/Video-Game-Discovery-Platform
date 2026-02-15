/**
 * Minimal RAWG API response types for type-safe service and controller usage.
 */

/** Single game in list or detail from RAWG. */
export interface RawgGame {
  id: number;
  name: string;
  slug: string;
  genres: RawgGenre[];
  publishers?: RawgPublisher[];
  description_raw?: string;
  background_image: string | null;
  parent_platforms?: { platform: RawgPlatform }[];
  metacritic: number | null;
  rating_top?: number;
}

/** Genre from RAWG (e.g. Action, RPG). */
export interface RawgGenre {
  id: number;
  name: string;
  image_background: string;
}

/** Platform from RAWG (child or parent). */
export interface RawgPlatform {
  id: number;
  name: string;
  slug: string;
}

/** Parent platform from RAWG (has nested platforms array). */
export interface RawgParentPlatform {
  id: number;
  name: string;
  slug: string;
  platforms: RawgPlatform[];
}

/** Publisher from RAWG. */
export interface RawgPublisher {
  id: number;
  name: string;
}

/** Screenshot item from RAWG. */
export interface RawgScreenshot {
  id: number;
  image: string;
  width?: number;
  height?: number;
}

/** Movie/trailer item from RAWG. */
export interface RawgMovie {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
