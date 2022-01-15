import { useCallback } from 'react';

import { useToast as useChakraToast } from '@chakra-ui/react';

interface ShowToastData {
  title: string;
  description?: string;
  variant?: 'warning' | 'error' | 'success' | 'info';
}

interface UseToastResponse {
  show(data: ShowToastData): void;
}

export const useToast = (): UseToastResponse => {
  const chakraToast = useChakraToast();

  const show = useCallback(
    (data: ShowToastData) => {
      const tag = `${data.title}${
        data.description ? `-${data.description}` : ''
      }`;

      const isToastActive = chakraToast.isActive(tag);

      if (isToastActive) return;

      chakraToast({
        isClosable: true,
        position: 'top-right',
        id: tag,
        title: data.title,
        status: data.variant,
        description: data.description,
      });
    },
    [chakraToast]
  );

  return { show };
};
