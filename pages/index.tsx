import Head from 'next/head';
import { NextPage } from 'next';

import { SignIn } from '~/pages/SignIn';

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
