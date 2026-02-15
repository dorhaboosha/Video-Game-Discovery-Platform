/**
 * Game detail page.
 *
 * Full-page view for a single game: name, expandable description, attributes
 * (platforms, metascore, genres, publishers), trailer video, and screenshots.
 * Slug comes from route params; uses {@link useGame}. Spinner while loading;
 * throws on error so the router can show {@link ErrorPage}.
 */

import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

/** Detail page for a game by slug: description, attributes, trailer, screenshots. */
const GameDetailPage = () => {

  const { slug }  = useParams();
  
  const {data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage
