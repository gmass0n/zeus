import Head from 'next/head';
import type { AppProps } from 'next/app';

import { AppProvider } from '~/hooks';

import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Setup Zeus</title>
      </Head>

      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
