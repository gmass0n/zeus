import Head from 'next/head';
import { NextPage } from 'next';

import { SignIn } from '~/pages/SignIn';

import { withSSRAuth } from '~/utils/withSSRAuth';

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Setup Zeus</title>
      </Head>

      <SignIn />
    </>
  );
};

export default SignInPage;
