import Head from 'next/head';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

import { Home } from '~/pages/Home';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { isAdmin: context.query.isAdmin === 'true' },
  };
};

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
