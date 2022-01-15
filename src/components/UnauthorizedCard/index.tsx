import { FC } from 'react';

import { IoLogoWhatsapp } from 'react-icons/io';
import { FaEnvelope } from 'react-icons/fa';

import { signOut, useAuth } from '~/hooks/auth';

import { ContactWays, Container } from './styles';

import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

const whatsappLink =
  'https://api.whatsapp.com/send?phone=+5541996284760&text=Ol%C3%A1,%20gostaria%20de%20saber%20o%20motivo%20de%20minha%20conta%20n%C3%A3o%20estar%20autorizada.';

const emailLink = 'mailto:insertemailhere@xyz.com';

export const UnauthorizedCard: FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <div>
        <p>
          Seja bem vindo, <b>{user.name}</b>.
        </p>

        <p>
          Sua conta não está autorizada no momento. Em caso de dúvidas, entre em
          contato com a nossa equipe sobre o ocorrido.
        </p>
      </div>

      <ContactWays>
        <li>
          <Tooltip label="Enviar mensagem no Whatsapp">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <IoLogoWhatsapp />

              <span>(41) 9 9628-4760</span>
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip label="Enviar e-mail">
            <a href={emailLink}>
              <FaEnvelope />

              <span>example@email.com.br</span>
            </a>
          </Tooltip>
        </li>
      </ContactWays>

      <Button onClick={signOut}>Sair</Button>
    </Container>
  );
};
