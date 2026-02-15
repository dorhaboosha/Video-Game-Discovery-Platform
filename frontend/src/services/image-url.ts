/**
 * Image URL utilities.
 *
 * Builds cropped image URLs for RAWG media (600×400) or returns a placeholder
 * when no URL is provided.
 */

import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

/**
 * Returns a 600×400 cropped version of a RAWG media URL, or placeholder if empty.
 *
 * @param url - Full RAWG media image URL (e.g. background_image)
 * @returns Cropped image URL or placeholder asset path
 */
const getCroppedImageUrl = (url: string) => {

    if (!url) {
        return noImage;
    }

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;