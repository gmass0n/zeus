/* eslint-disable consistent-return */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { destroyCookie, parseCookies } from 'nookies';

import { routes } from '../constants/routes';
import { cookies } from '../constants/cookies';

import { AuthTokenError } from '../errors/AuthTokenError';

export function withSSRAuth<P = any>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { [cookies.AUTH_TOKEN]: token } = parseCookies(ctx);

    if (!token && ctx.resolvedUrl !== routes.SIGNIN) {
      return {
        redirect: {
          destination: routes.SIGNIN,
          permanent: false,
        },
      };
    }

    if (token && ctx.resolvedUrl !== routes.HOME) {
      return {
        redirect: {
          destination: routes.HOME,
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(undefined, cookies.AUTH_TOKEN);

        return {
          redirect: {
            destination: routes.SIGNIN,
            permanent: false,
          },
        };
      }
    }
  };
}
