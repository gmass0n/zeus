import { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '~/hooks/auth';

import { theme } from '~/styles/theme';

export const AppProvider: FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ChakraProvider>{children}</ChakraProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
