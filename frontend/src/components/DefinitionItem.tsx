/**
 * Definition list item component.
 *
 * Renders a term (label) and value as semantic dt/dd, e.g. for game details
 * like "Platform", "Metacritic", "Genres". Styled with Chakra Box and Heading.
 */

import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props {
    /** Label for the item (e.g. "Platform", "Genres"). */
    term: string;
    /** Value content (text or elements). */
    children : ReactNode | ReactNode[];
}

/** Single term-value row for definition lists (dt + dd). */
const DefinitionItem = ({ term, children } : Props) => {
  return (
    <Box marginY={5}>
        <Heading as='dt' fontSize='md' color='gray.600'>{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem
