import { FC, InputHTMLAttributes, useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconType } from 'react-icons';

import {
  Container,
  InputContainer,
  IconContainer,
  ErrorMessage,
} from './styles';

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
            <button type="button" onClick={handleTogglePasswordIsVisible}>
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </IconContainer>
        )}
      </InputContainer>

      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
