import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerContextProvider } from "contexts/SidebarDrawerContext";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerContextProvider>
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
