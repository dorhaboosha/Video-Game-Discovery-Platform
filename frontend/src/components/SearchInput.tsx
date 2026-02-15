/**
 * Search input component.
 *
 * Text field with search icon; on submit updates the game query search text
 * via {@link useGameQueryStore} (setSearchText) and navigates to the home page.
 * Uses Chakra Input and a controlled ref for the input value.
 */

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

/** Search box; submit sets search filter and navigates to /. */
const SearchInput = () => {
    
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value);
                navigate('/');
            }
        }}>
            <InputGroup>
            <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput;