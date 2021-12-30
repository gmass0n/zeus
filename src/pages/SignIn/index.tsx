import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { FaLock, FaEnvelope } from 'react-icons/fa';

import Image from 'next/image';

import { Input } from '~/components/Input';
import { Button } from '~/components/Button';

import logoImg from '~/assets/images/logo.png';

import { Container, Content, LeftBox, Form, FormFooter } from './styles';

import { validateEmail } from '~/utils/validateEmail';

interface FormData {
  email: string;
  password: string;
}

type FormErrors = Record<keyof FormData, string>;

export const SignIn: FC = () => {
  const [formData, setFormData] = useState({} as FormData);
  const [formErrors, setFormErrors] = useState({} as FormErrors);
  const [isSigning, setIsSigning] = useState(false);

  const canSignIn = useMemo(() => {
    const hasNotValue = !formData.email || !formData.password;
    const hasError = !!formErrors.email || !!formErrors.password;

    return !(hasNotValue || hasError);
  }, [formData, formErrors]);

  const handleChangeInputValue: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }));

        if (formErrors[name]) {
          setFormErrors((prevState) => ({ ...prevState, [name]: '' }));
        }
      },
      [formErrors]
    );

  const validateFormData = (): boolean => {
    let isValid = true;

    if (!formData.email) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'O e-mail é obrigatório.',
      }));
      isValid = false;
    }

    if (!formData.password) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: 'A senha é obrigatório.',
      }));
      isValid = false;
    }

    if (formData.email && !validateEmail(formData.email)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'O formato do e-mail está incorreto.',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setIsSigning(true);

    const isFormDataValid = validateFormData();

    setIsSigning(false);

    if (!isFormDataValid) return;

    console.log({ formData });
  };

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

          <h1>Faça o seu login na platafoma.</h1>
        </LeftBox>

        <Form onSubmit={handleSignIn}>
          <fieldset>
            <Input
              name="email"
              icon={FaEnvelope}
              placeholder="Digite seu e-mail"
              inputMode="email"
              value={formData.email}
              error={formErrors.email}
              onChange={handleChangeInputValue}
            />

            <Input
              name="password"
              icon={FaLock}
              placeholder="Digite sua senha"
              type="password"
              value={formData.password}
              error={formErrors.password}
              onChange={handleChangeInputValue}
              autoComplete="current-password"
            />
          </fieldset>

          <Button type="submit" disabled={!canSignIn} isLoading={isSigning}>
            Entrar
          </Button>

          <FormFooter>
            <span>
              Não tem uma conta?{' '}
              <a
                href="https://tiowill.com.br/setupzeus-bio/"
                target="_blank"
                rel="noreferrer"
              >
                Cadastre-se
              </a>
            </span>
          </FormFooter>
        </Form>
      </Content>
    </Container>
  );
};
