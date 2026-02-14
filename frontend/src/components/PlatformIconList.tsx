/**
 * Platform icon list component.
 *
 * Renders a horizontal row of platform icons (Windows, PlayStation, Xbox,
 * Nintendo, Mac, Linux, Android, iOS, Web) keyed by platform slug from the
 * {@link Platform} entity. Uses react-icons and Chakra Icon.
 */

import Platform from "../entities/Platform";
import { HStack, Icon } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

/** @param platforms - List of platforms to show icons for (slug used for mapping). */
interface Props {
    platforms: Platform[];
}

/** Horizontal list of platform icons by slug (pc, playstation, xbox, etc.). */
const PlatformIconList = ({platforms}: Props) => {

    const iconMap: { [key: string] : IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    };

  return (
    <HStack marginY={"10px"}>
        {platforms.map((platform) => (
            <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
        ))}
    </HStack>
  )
}

export default PlatformIconList