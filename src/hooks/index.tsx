import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '~/styles/theme';

export const AppProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
