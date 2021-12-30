import { ButtonHTMLAttributes, FC } from 'react';

import { Container, Loader } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <Container disabled={isLoading ? true : disabled} {...props}>
      {isLoading ? <Loader /> : children}
    </Container>
  );
};
