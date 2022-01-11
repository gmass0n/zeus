import { useCallback, useEffect, useRef, useState } from 'react';

import { io, Socket } from 'socket.io-client';

interface UsePeerConnectionResponse {
  peerConnection: RTCPeerConnection;
  makeCall(): Promise<void>;
  setRemoteStream(mediaStream: MediaStream): void;
}

interface SocketMessage {
  event: 'OFFER' | 'ASNWER' | 'CANDIDATE';
  message: RTCIceCandidate | RTCSessionDescriptionInit;
}

export const usePeerConnection = (): UsePeerConnectionResponse => {
  const isMain = useRef<boolean>(false);

  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection>(null);
  const [socket, setSocket] = useState<Socket>(null);
  const [remoteStream, _setRemoteStream] = useState<MediaStream>(null);

  useEffect(() => {
    const newPeerConnection = new RTCPeerConnection();

    setPeerConnection(newPeerConnection);

    setSocket(
      io('ws://localhost:3333', {
        transports: ['websocket'],
      })
    );
  }, []);

  const sendMessage = useCallback(
    (message: SocketMessage) => {
      if (!socket) return;

      socket.emit('message', message);
    },
    [socket]
  );

  const makeCall = useCallback(async () => {
    isMain.current = true;

    const localDescription = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(localDescription);

    sendMessage({
      event: 'OFFER',
      message: localDescription,
    });
  }, [peerConnection, sendMessage]);

  const setRemoteDescription = useCallback(
    async (description: RTCSessionDescriptionInit) => {
      if (!peerConnection) return;

      await peerConnection.setRemoteDescription(description);

      if (!isMain.current) {
        const localDescription = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(localDescription);

        sendMessage({
          event: 'ASNWER',
          message: localDescription,
        });
      }
    },
    [peerConnection, sendMessage]
  );

  const setRemoteCandidate = useCallback(
    async (candidate: RTCIceCandidate) => {
      await peerConnection.addIceCandidate(candidate);
    },
    [peerConnection]
  );

  useEffect(() => {
    if (!socket) return;

    socket.on('message', async (message: SocketMessage) => {
      switch (message.event) {
        case 'OFFER':
          await setRemoteDescription(
            message.message as RTCSessionDescriptionInit
          );
          break;

        case 'ASNWER':
          await setRemoteDescription(
            message.message as RTCSessionDescriptionInit
          );
          break;

        case 'CANDIDATE':
          await setRemoteCandidate(message.message as RTCIceCandidate);
          break;

        default:
          break;
      }
    });
  }, [setRemoteCandidate, setRemoteDescription, socket]);

  const setRemoteStream = useCallback((mediaStream: MediaStream) => {
    _setRemoteStream(mediaStream);
  }, []);

  useEffect(() => {
    if (!peerConnection) return;

    peerConnection.onicecandidate = (candidate) => {
      if (candidate.candidate) {
        sendMessage({
          event: 'CANDIDATE',
          message: candidate.candidate,
        });
      }
    };

    peerConnection.onconnectionstatechange = (event: any) => {
      console.log('connection', event);
    };

    if (remoteStream) {
      peerConnection.ontrack = (event) => {
        (remoteStream as any).addTrack(event.track, remoteStream);
      };
    }
  }, [peerConnection, remoteStream, sendMessage]);

  return { peerConnection, setRemoteStream, makeCall };
};
