import { Box, Text, Spacer, Flex, Button, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ColorMode from './ColorMode';

// popidea 导航栏
function Header() {
  return (
    <Flex>
      <Box width="100px" height="50px" bg="popidea.yellow">
        <Link to="/index">
          <Text fontWeight="bold" mt="18px" ml="10px" fontSize="18">
            POPIDEA
          </Text>
        </Link>
      </Box>
      <Link to="/recommend">推荐</Link>
      <Link to="/hotspot">热点</Link>
      <Spacer />

      <ColorMode />

      <Button colorScheme="teal" variant="outline">
        登录
      </Button>

      <Button colorScheme="teal" variant="outline">
        注册
      </Button>

      <Avatar src="https://bit.ly/broken-link" />
    </Flex>
  );
}

export default Header;
