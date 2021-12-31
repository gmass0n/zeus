import Head from 'next/head';
import { NextPage } from 'next';

import { Home } from '~/pages/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | Setup Zeus</title>
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
