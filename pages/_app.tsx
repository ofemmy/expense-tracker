import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import {Fonts} from '../styles/Fonts';

const theme = extendTheme({
  styles: {
    global:{
      "html, body":{
        fontSize:"sm",
        color:"gray.600",
        lineHeight:"tall",
        backgroundColor:"gray.100"
      }
    },
  fonts: {
    body: "Lato",
    heading: "Lato",
  },
}});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
