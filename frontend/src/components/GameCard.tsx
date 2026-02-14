/**
 * Game card component.
 *
 * Card for the game grid: cropped image, platform icons, Metacritic score,
 * game name (link to detail page), and rating emoji. Uses Chakra Card and
 * PlatformIconList, CriticScore, Emjoi.
 */

import Game from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emjoi from './Emjoi';
import { Link } from 'react-router-dom';

/** @param game - Game entity to display in the card. */
interface Props {
    game: Game;
}

/** Single game card with image, platforms, score, name link, and rating emoji. */
const GameCard = ({ game }: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">
              <Link to={'/games/' + game.slug}>{game.name}</Link>
              <Emjoi rating={game.rating_top} />
              </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard