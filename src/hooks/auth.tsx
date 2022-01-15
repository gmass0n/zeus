import {
  FC,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import Router from 'next/router';

import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { routes } from '~/constants/routes';
import { cookies } from '~/constants/cookies';

import { api } from '~/services/api';

import { IUser } from '~/interfaces/IUser';

import { SignInResponseDTO } from '~/dtos/SignInResponseDTO';
import { SignInRequestDTO } from '~/dtos/SignInRequestDTO';

interface IAuthContextData {
  user: IUser;
  signIn(data: SignInRequestDTO): Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

const signOut = (ctx = undefined): void => {
  destroyCookie(ctx, cookies.AUTH_TOKEN);
  Router.push(routes.SIGNIN);
};

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = useMemo(() => !!user, [user]);

  useEffect(() => {
    (async () => {
      const { [cookies.AUTH_TOKEN]: token } = parseCookies();

      if (token) {
        try {
          const response = await api.get<IUser>('/users/me');

          if (response.data) {
            setUser(response.data);
          } else {
            signOut();
          }
        } catch {
          signOut();
        }
      }
    })();
  }, []);

  const signIn = useCallback(async (data: SignInRequestDTO) => {
    const response = await api.post<SignInResponseDTO>('/signin', data);

    setCookie(null, cookies.AUTH_TOKEN, response.data.token);

    setUser(response.data.user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth, signOut };
