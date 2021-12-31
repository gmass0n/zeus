/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useState } from 'react';

import useEventListener from '~/utils/eventListener';

interface UseFullscreenResponse {
  toggle(): void;
  isFullscreen: boolean;
}

export const useFullscreen = (): UseFullscreenResponse => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEventListener('fullscreenchange', () => {
    if (document.fullscreenElement !== null) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  });

  const request = useCallback(() => {
    // @ts-ignore;
    document.fullscreenEnabled =
      document.fullscreenEnabled ||
      // @ts-ignore;
      document.mozFullScreenEnabled ||
      // @ts-ignore;
      document.documentElement.webkitRequestFullScreen;

    const requestFullscreen = (element: any): void => {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        // @ts-ignore;
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    };

    if (document.fullscreenEnabled) {
      requestFullscreen(document.documentElement);
    }
  }, []);

  const exit = useCallback(() => {
    document.exitFullscreen();
  }, []);

  const toggle = useCallback(() => {
    if (isFullscreen) {
      exit();
    } else {
      request();
    }
  }, [exit, isFullscreen, request]);

  return { toggle, isFullscreen };
};
