/**
 * Genre list (sidebar) component.
 *
 * Fetches genres via {@link useGenres} and renders a "Genres" heading plus
 * a list of genre buttons with cropped images. Selection is synced with
 * {@link useGameQueryStore} (setGenreId). Shows Spinner while loading, null on error.
 */

import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

/** Sidebar list of genres; selecting one updates the game query filter. */
const GenreList = () => {

    const { data, isLoading, error } = useGenres();

    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    if (error) {
        return null;
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => 
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image objectFit='cover' boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal' } onClick={() => setSelectedGenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList