import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { IconType } from 'react-icons';

import { Container } from './styles';

import { Tooltip } from '../Tooltip';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  tooltip: ReactNode;
}

export const ActionButton: FC<ActionButtonProps> = ({
  icon: Icon,
  tooltip,
  ...props
}) => {
  return (
    <Tooltip label={tooltip} placement="top">
      <div>
        <Container {...props}>
          <Icon />
        </Container>
      </div>
    </Tooltip>
  );
};
