/**
 * Critic score badge component.
 *
 * Renders a numeric score (e.g. Metacritic) as a colored Chakra Badge:
 * green > 75, yellow > 60, red otherwise.
 */

import { Badge } from '@chakra-ui/react';

/** @param score - Numeric critic score (e.g. 0–100). */
interface Props {
    score: number;
}

/** Badge showing a critic score with color by range (green / yellow / red). */
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  );
};

export default CriticScore