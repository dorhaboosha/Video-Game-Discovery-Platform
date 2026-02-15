/**
 * Game card skeleton (loading placeholder).
 *
 * Matches the layout of {@link GameCard}: image-area skeleton (200px) and
 * text skeletons in the card body. Used while game list data is loading.
 */

import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

/** Loading placeholder that mirrors GameCard layout. */
const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton