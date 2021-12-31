import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '~/styles/theme';
import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Setup Zeus</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />

          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
