import { FC } from 'react';

import { FaLock, FaEnvelope } from 'react-icons/fa';

import Image from 'next/image';

import { Input } from '~/components/Input';
import { Button } from '~/components/Button';

import { Container, Content, LeftBox, Form } from './styles';

import logoImg from '~/assets/images/logo.png';

export const SignIn: FC = () => {
  return (
    <Container>
      <Content>
        <LeftBox>
          <a
            href="https://tiowill.com.br/setupzeus-bio/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={logoImg}
              height={60}
              width={150}
              objectFit="contain"
              quality={1}
              alt="Setup Zeus Logo"
            />
          </a>

          <h1>Faça o seu login na platafoma</h1>
        </LeftBox>

        <Form>
          <fieldset>
            <Input icon={FaEnvelope} placeholder="Digite seu e-mail" />

            <Input
              icon={FaLock}
              placeholder="Digite sua senha"
              type="password"
            />
          </fieldset>

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};
