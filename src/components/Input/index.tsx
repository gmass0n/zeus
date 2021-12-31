import { FC, InputHTMLAttributes, useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconType } from 'react-icons';

import {
  Container,
  InputContainer,
  IconContainer,
  ErrorMessage,
} from './styles';

import { Collapse } from '../Collapse';

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  error?: string;
}

export const Input: FC<InputProps> = ({
  icon: Icon,
  type = 'text',
  error = '',
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordIsVisible = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <InputContainer
        hasIcon={!!Icon}
        hasPasswordButton={type === 'password'}
        hasError={!!error}
      >
        {!!Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}

        <input
          type={
            type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          {...props}
        />

        {type === 'password' && (
          <IconContainer>
            <button
              type="button"
              onClick={handleTogglePasswordIsVisible}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </IconContainer>
        )}
      </InputContainer>

      <Collapse isOpen={!!error}>
        <ErrorMessage>{error}</ErrorMessage>
      </Collapse>
    </Container>
  );
};
