/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useRef } from 'react';

import { MdCancelPresentation, MdPresentToAll } from 'react-icons/md';
import { FiPower } from 'react-icons/fi';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';

import { useRouter } from 'next/router';

import { routes } from '~/constants/routes';

import { useScreenSharing } from '~/hooks/screenSharing';
import { useFullscreen } from '~/hooks/fullscreen';

import { ActionButton } from '~/components/ActionButton';

import { Container, Content } from './styles';

export const Home: FC<{ isAdmin: boolean }> = ({ isAdmin }) => {
  const router = useRouter();

  const localVideoRef = useRef<HTMLVideoElement>(null);

  const { toggle: toggleIsFullscreen, isFullscreen } = useFullscreen();
  const { toggle: toggleIsSharing, isSharing: isSharingScreen } =
    useScreenSharing(localVideoRef, isAdmin);

  return (
    <Container>
      <Content>
        <video ref={localVideoRef} autoPlay playsInline />
      </Content>

      <footer>
        {isAdmin && (
          <ActionButton
            tooltip={isSharingScreen ? 'Parar de apresentar' : 'Apresentar'}
            icon={isSharingScreen ? MdCancelPresentation : MdPresentToAll}
            onClick={toggleIsSharing}
          />
        )}

        <ActionButton
          tooltip={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
          icon={isFullscreen ? BiExitFullscreen : BiFullscreen}
          onClick={toggleIsFullscreen}
        />

        <ActionButton
          tooltip="Sair"
          icon={FiPower}
          onClick={() => router.push(routes.signIn)}
        />
      </footer>
    </Container>
  );
};
