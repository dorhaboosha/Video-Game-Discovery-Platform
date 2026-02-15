/**
 * Game attributes panel component.
 *
 * Renders a 2-column definition list of game details: Platforms, Metascore,
 * Genres, and Publishers. Uses DefinitionItem, CriticScore, and Chakra SimpleGrid.
 */

import Game  from '../entities/Game'
import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';

/** @param game - Game entity with platforms, metacritic, genres, publishers. */
interface Props {
    game: Game;
}

/** Definition list of platforms, metascore, genres, and publishers for a game. */
const GameAttributes = ({ game } : Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term='Platforms'>
          {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
      
        <DefinitionItem term='Metascore'>
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      
        <DefinitionItem term='Genres'>
          {game.genres?.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>

        <DefinitionItem term='Publishers'>
          {game.publishers?.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
      </SimpleGrid>
  )
}

export default GameAttributes
