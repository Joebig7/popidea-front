import { extendTheme } from '@chakra-ui/react';

const config = {
  colors: {
    popidea: {
      black: '#222429',
      blue: '#3481EF',
      oragne: '#FF4E00',
      yellow: '#F7DF1E',
      gray: '#979797',
      white: '#F5F6F6',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#222429' : '#F5F6F6',
      },
    }),
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(config);

export default theme;
