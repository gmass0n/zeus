import { MutableRefObject, useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import PeerType from 'peerjs';

import { usePeerConnection } from './peerConnection';

interface UseScreenSharingResponse {
  isSharing: boolean;
  toggle(): Promise<void>;
  isAdmin?: boolean;
}

const RANDOM_ID = '97425b58-bdf3-4f2a-9069-985133040c75';

export const useScreenSharing = (
  videoElement: MutableRefObject<HTMLVideoElement>,
  isAdmin: boolean
): UseScreenSharingResponse => {
  console.log(isAdmin);

  const [isSharing, setIsSharing] = useState(false);

  const [peer, setPeer] = useState<PeerType | null>(null);
  const [currentPeer, setCurrentPeer] =
    useState<PeerType.MediaConnection | null>(null);

  useEffect(() => {
    if (isAdmin) {
      try {
        import('peerjs').then(async ({ default: Peer }) => {
          const newPeer = new Peer(RANDOM_ID);

          setPeer(newPeer);

          newPeer.on('open', (id) => console.log(id));
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) {
      import('peerjs').then(async ({ default: Peer }) => {
        const newPeer = new Peer();

        setPeer(newPeer);

        newPeer.on('open', async (id) => {
          console.log(`Connected with Id: ${id}`);

          const videoTargetElement = videoElement?.current;

          if (!videoTargetElement) return;

          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });

          const call = newPeer.call(RANDOM_ID, stream);

          call.on('stream', (remoteStream) => {
            console.log(videoTargetElement);

            videoTargetElement.srcObject = remoteStream;
          });

          setCurrentPeer(call);
        });
      });
    }
  }, [isAdmin, videoElement]);

  const start = useCallback(async () => {
    try {
      const videoTargetElement = videoElement?.current;

      if (!videoTargetElement || isSharing) return;

      const mediaStream = await navigator.mediaDevices.getDisplayMedia();

      videoTargetElement.srcObject = mediaStream;

      setIsSharing(true);
    } catch (error) {
      console.log('Error to start sharing!', error);
    }
  }, [videoElement, isSharing]);

  const stop = useCallback(async () => {
    try {
      const videoTargetElement = videoElement?.current;

      if (!videoTargetElement || !isSharing) return;

      videoTargetElement.srcObject = null;

      setIsSharing(false);
    } catch (error) {
      console.log('Error to stop sharing!', error);
    }
  }, [isSharing, videoElement]);

  const toggle = useCallback(async () => {
    if (isSharing) {
      await stop();
    } else {
      await start();
    }
  }, [isSharing, start, stop]);

  return { toggle, isSharing };
};
