/**
 * Game screenshots component.
 *
 * Fetches and displays screenshot images for a game by RAWG game id.
 * Uses {@link useScreenshots}; shows nothing while loading, throws on error.
 * Responsive grid: 1 column (base), 2 columns (md+).
 */

import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

/** @param gameId - RAWG game id to load screenshots for. */
interface Props {
    gameId: number;
}

/** Grid of screenshot images for a game; loading = null, error = thrown. */
const GameScreenshots = ({ gameId } : Props) => {
    
    const {data, isLoading, error} = useScreenshots(gameId);

    if (isLoading) {
        return null;
    }

    if (error) {
        throw error;
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
            {data?.results?.map(file => <Image key={file.id} src={file.image} />)}
        </SimpleGrid>
    ); 
}

export default GameScreenshots
