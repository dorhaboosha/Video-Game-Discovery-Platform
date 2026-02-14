/**
 * Game grid component.
 *
 * Renders the main games list with infinite scroll. Uses {@link useGames} for data;
 * shows skeletons while loading, error text on failure, and {@link GameCard}s inside
 * {@link GameCardContiner}. Responsive columns: 1 (sm) to 4 (xl).
 */

import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContiner from './GameCardContiner';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

/** Infinite-scrolling grid of game cards with loading skeletons and error state. */
const GameGrid = () => {
    
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (error) {
        return <Text>{error.message}</Text>;
    }

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} 
            next={() => fetchNextPage()} loader={<Spinner />}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={6}>
                {isLoading && skeletons.map((skeleton) => 
                <GameCardContiner key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContiner>)}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                            <GameCardContiner key={game.id}>
                                <GameCard game={game} />
                            </GameCardContiner>
                        )}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid