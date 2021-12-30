import { FC, InputHTMLAttributes, useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconType } from 'react-icons';

import { Container, IconContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
}

export const Input: FC<InputProps> = ({
  icon: Icon,
  type = 'text',
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordIsVisible = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container hasIcon={!!Icon}>
      {!!Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}

      <input
        type={
          type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
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
    </Container>
  );
};
