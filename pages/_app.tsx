import Head from 'next/head';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Zeus</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
