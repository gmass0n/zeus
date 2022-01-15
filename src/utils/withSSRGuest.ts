/* eslint-disable no-return-await */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { parseCookies, destroyCookie } from 'nookies';

import { routes } from '../constants/routes';
import { cookies } from '../constants/cookies';

export function withSSRGuest<P = any>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { [cookies.AUTH_TOKEN]: token } = parseCookies(ctx);

    if (token) {
      return {
        redirect: {
          destination: routes.HOME,
          permanent: false,
        },
      };
    }

    destroyCookie(ctx, cookies.AUTH_TOKEN);

    return await fn(ctx);
  };
}
