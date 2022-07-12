import { IconButton, useColorMode } from '@chakra-ui/react';

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton

    mr={4}
    mt ={30}
      onClick={toggleColorMode}
      colorScheme="blue"
      aria-label="Search database"
      size="md"

      
    >
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </IconButton>
  );
}

export default ColorMode;
