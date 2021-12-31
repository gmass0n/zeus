import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Container, Loader } from './styles';

import { Tooltip } from '../Tooltip';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  tooltip?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  tooltip,
  disabled,
  ...props
}) => {
  return (
    <Tooltip label={tooltip}>
      <div>
        <Container disabled={isLoading ? true : disabled} {...props}>
          {isLoading ? <Loader /> : children}
        </Container>
      </div>
    </Tooltip>
  );
};
