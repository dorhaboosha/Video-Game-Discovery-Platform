/**
 * Main navigation bar component.
 *
 * Horizontal bar with logo (link to home), {@link SearchInput}, and
 * {@link ColorModeSwitch}. Uses Chakra HStack.
 */

import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

/** Top nav: logo, search, and dark mode toggle. */
const NavBar = () => {
  return (
    <HStack padding="10px">
        <Link to='/'>
          <Image src={logo} boxSize="60px" objectFit='cover' />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar