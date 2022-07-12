import { IconButton, useColorMode } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton

    mr={4}
    mt ={30}
      onClick={toggleColorMode}
      colorScheme="blue"
      aria-label="Search database"
      icon={<SearchIcon />}
      size="md"

      
    >
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </IconButton>
  );
}

export default ColorMode;
