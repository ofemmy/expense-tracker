import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
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