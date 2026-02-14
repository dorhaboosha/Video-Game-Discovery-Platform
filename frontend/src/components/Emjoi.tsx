/**
 * Rating emoji component.
 *
 * Shows an image (meh / thumbs up / bulls eye) based on a 3–5 rating.
 * Renders nothing when rating is below 3. Uses Chakra Image.
 */

import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

/** @param rating - Score 3–5: 3 = meh, 4 = recommended, 5 = exceptional. Below 3 renders nothing. */
interface Props {
    rating: number;
}

/** Emoji image for rating: meh (3), thumbs up (4), bulls eye (5). */
const Emjoi = ({rating}: Props) => {

    if (rating < 3) {
        return null;
    }

    const emojiMap: { [key: number]: ImageProps} = {
        3: {src: meh, alt:'meh', boxSize: '25px'},
        4: {src: thumbsUp, alt:'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt:'mehexceptional', boxSize: '35px'}
    };

    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    )
}

export default Emjoi