import { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <Container {...props}>{isLoading ? 'carregando...' : children}</Container>
  );
};