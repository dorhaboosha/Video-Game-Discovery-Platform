/**
 * Error page component.
 *
 * React Router error boundary fallback: shows {@link NavBar} plus an "Oops"
 * message. For route errors (e.g. 404) shows "This page does not exist.";
 * for other errors shows "An unexpected error occurred."
 */

import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

/** Fallback page for route and runtime errors; different message for 404 vs other errors. */
const ErrorPage = () => {

    const error = useRouteError();

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'This page does not exist.' : 'An unexpected error occurred.'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;
