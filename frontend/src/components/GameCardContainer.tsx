/**
 * Game card container component.
 *
 * Wrapper that styles card content: full width, rounded corners, overflow hidden,
 * and a subtle hover scale effect. Typically wraps {@link GameCard} in the grid.
 */

import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';

/** @param children - Card content (e.g. GameCard). */
interface Props {
    children: ReactNode;
}

/** Wrapper with rounded corners and hover scale for game cards. */
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden" _hover={{transform: 'scale(1.03)', transition: 'transform .15s ease-in'}}>
        {children}
    </Box>
  )
}

export default GameCardContainer
