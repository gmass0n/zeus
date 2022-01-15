/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useRef } from 'react';

import { MdPresentToAll } from 'react-icons/md';
import { FiPower } from 'react-icons/fi';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';

import { useFullscreen } from '~/hooks/fullscreen';
import { signOut, useAuth } from '~/hooks/auth';

import { UnauthorizedCard } from '~/components/UnauthorizedCard';
import { ActionButton } from '~/components/ActionButton';

import { Container, Content } from './styles';

import { UserTypeEnum } from '~/enums/UserTypeEnum';
import { UserStatusEnum } from '~/enums/UserStatusEnum';

interface HomeProps {
  isAdmin: boolean;
}

export const Home: FC<HomeProps> = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);

  const { user } = useAuth();
  const { toggle: toggleIsFullscreen, isFullscreen } = useFullscreen();

  if (!user) return null;

  return (
    <Container>
      <Content>
        {user &&
          (user.type === UserTypeEnum.admin ||
          user.status === UserStatusEnum.authorized ? (
            <video ref={localVideoRef} autoPlay playsInline />
          ) : (
            <UnauthorizedCard />
          ))}
      </Content>

      {(user.type === UserTypeEnum.admin ||
        user.status === UserStatusEnum.authorized) && (
        <footer>
          {user.type === UserTypeEnum.admin && (
            // <ActionButton
            //   tooltip={isSharingScreen ? 'Parar de apresentar' : 'Apresentar'}
            //   icon={isSharingScreen ? MdCancelPresentation : MdPresentToAll}
            //   onClick={toggleIsSharing}
            // />

            <ActionButton tooltip="Apresentar" icon={MdPresentToAll} />
          )}

          <ActionButton
            tooltip={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            icon={isFullscreen ? BiExitFullscreen : BiFullscreen}
            onClick={toggleIsFullscreen}
          />

          <ActionButton tooltip="Sair" icon={FiPower} onClick={signOut} />
        </footer>
      )}
    </Container>
  );
};
