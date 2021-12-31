import { FC, ReactNode } from 'react';

import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

interface TooltipProps {
  label: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ label, children }) => {
  return (
    <ChakraTooltip label={label} hasArrow closeOnClick={false}>
      {children}
    </ChakraTooltip>
  );
};
