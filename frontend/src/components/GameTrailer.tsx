/**
 * Game trailer component.
 *
 * Fetches trailer/movie data for a game by RAWG game id and shows the first
 * one as a video (480p, with preview poster). Uses {@link useTrailers};
 * returns null while loading or when no trailer, throws on error.
 */

import useTrailers from '../hooks/useTrailers'

/** @param gameId - RAWG game id to load trailers for. */
interface Props {
    gameId: number;
}

/** Video player for the first game trailer; null when loading or none available. */
const GameTrailer = ({ gameId }: Props) => {

    const {data, error, isLoading } = useTrailers(gameId);

    if (isLoading) {
        return null;
    }

    if (error) {
        throw error;
    }

    const first = data?.results[0];

    return first ? <video src={first.data[480]} poster={first.preview} controls /> : null;
}

export default GameTrailer;
