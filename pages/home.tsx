import Head from 'next/head';
import { InferGetServerSidePropsType, NextPage } from 'next';

import { Home } from '~/pages/Home';

import { withSSRAuth } from '~/utils/withSSRAuth';

export const getServerSideProps = withSSRAuth(async (context) => {
  return {
    props: { isAdmin: context.query.isAdmin === 'true' },
  };
});

const HomePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ isAdmin }) => {
  return (
    <>
      <Head>
        <title>Início | Setup Zeus</title>
      </Head>

      <Home isAdmin={isAdmin} />
    </>
  );
};

export default HomePage;
