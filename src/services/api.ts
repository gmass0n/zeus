/* eslint-disable import/no-cycle */
import { parseCookies } from 'nookies';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { AuthTokenError } from '~/errors/AuthTokenError';

import { cookies } from '../constants/cookies';

import { signOut } from '~/hooks/auth';

export function setupApi(ctx = undefined): AxiosInstance {
  const parsedCookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      ...(parsedCookies &&
        parsedCookies[cookies.AUTH_TOKEN] && {
          Authorization: `Bearer ${parsedCookies[cookies.AUTH_TOKEN]}`,
        }),
    },
  });

  api.interceptors.response.use(
    (success) => success,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response?.data?.code === 'token_expired') {
          if (process.browser) {
            signOut(ctx);
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}

export const api = setupApi();
