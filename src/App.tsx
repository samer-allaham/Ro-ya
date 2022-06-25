import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme
} from '@chakra-ui/react';
import Header from "./components/header"
import Footer from './components/Footer'
import { Landing } from './pages/landing/landing';
import "./styles.css"



const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Landing />
      <Footer />

    </ChakraProvider>
  );
}

export default App;
