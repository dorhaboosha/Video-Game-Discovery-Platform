/**
 * Color mode (light/dark) toggle component.
 *
 * Uses Chakra UI's useColorMode to switch between light and dark theme.
 * Renders a labeled switch; "Dark Mode" indicates the current target state.
 */

import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

/** Toggle for app light/dark mode. Switch is on when dark mode is active. */
const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    
    return (
        <HStack>
            <Switch colorScheme='green' isChecked={ colorMode === 'dark' } onChange={ toggleColorMode } />
            <Text whiteSpace='nowrap'>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch