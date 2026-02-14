/**
 * App layout component.
 *
 * Wraps all page content with {@link NavBar} at the top and a padded container
 * for the current route (via React Router {@link Outlet}). Used as the root
 * layout in the router.
 */

import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

/** Root layout: NavBar + padded Outlet for child routes. */
const Layout = () => {
    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
