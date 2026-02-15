/**
 * Expandable text component.
 *
 * Shows text with an optional "Read More" / "Show Less" toggle. Text longer than
 * 300 characters is truncated with "..." until expanded. Shorter text is shown as-is.
 */

import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

/** @param children - The full text to display (truncated at 300 chars when collapsed). */
interface Props {
    children: string;
}

/** Text block with Read More / Show Less; truncates at 300 characters. */
const ExpandableText = ({ children } : Props) => {

    const [expanded, setExpanded] = useState(false);

    const limit = 300;

    if (!children) {
        return null;
    }

    if (children.length <= limit) {
        return <Text>{children}</Text>;
    }

    const summary = expanded ? children : children.substring(0, limit) + '...';

    return (
        <Text>
            {summary}
            <Button marginLeft={1} size='xs' fontWeight='bold' colorScheme="yellow" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </Text>
    );
}

export default ExpandableText;
