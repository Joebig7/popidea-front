import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/index';
import Header from './component/Header';
import {Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Header />
        <Outlet/>
      </ChakraProvider>
    </>
  );
}

export default App;
