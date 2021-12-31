import { FC } from 'react';

import { MdPresentToAll } from 'react-icons/md';
import { FiPower } from 'react-icons/fi';
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';

import { useRouter } from 'next/router';

import { routes } from '~/constants/routes';

import { useFullscreen } from '~/hooks/fullscreen';

import { ActionButton } from '~/components/ActionButton';

import { Container, Content } from './styles';

export const Home: FC = () => {
  const router = useRouter();

  const { toggle: toggleFullscreen, isFullscreen } = useFullscreen();

  return (
    <Container>
      <Content />

      <footer>
        <ActionButton tooltip="Apresentar" icon={MdPresentToAll} />

        <ActionButton
          tooltip={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
          icon={isFullscreen ? BiExitFullscreen : BiFullscreen}
          onClick={toggleFullscreen}
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
