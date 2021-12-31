import { FC, ReactNode } from 'react';

import {
  PlacementWithLogical,
  Tooltip as ChakraTooltip,
} from '@chakra-ui/react';

interface TooltipProps {
  label: ReactNode;
  placement?: PlacementWithLogical;
}

export const Tooltip: FC<TooltipProps> = ({
  label,
  placement = 'bottom',
  children,
}) => {
  return (
    <ChakraTooltip
      label={label}
      hasArrow
      closeOnClick={false}
      placement={placement}
    >
      {children}
    </ChakraTooltip>
  );
};
