import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasIcon: boolean;
  hasPasswordButton: boolean;
  hasError: boolean;
}

export const Container = styled.div``;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;

  width: 100%;
  height: 52px;

  border: ${({ theme }) => `2px solid ${theme.colors.background}`};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  transition: all 0.2s ease-in;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[600]};
    transition: color 0.2s ease-in;
  }

  > input {
    flex: 1;
    height: 100%;
    width: 100%;

    background: transparent;
    color: ${({ theme }) => theme.colors.onBackground};
    font-size: 16px;

    padding-left: ${({ hasIcon }) => (hasIcon ? '0' : '16px')};
    padding-right: ${({ hasPasswordButton }) =>
      hasPasswordButton ? '0' : '16px'};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors.danger} !important;

      svg {
        color: ${theme.colors.danger} !important;
      }
    `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 52px;
  max-width: 52px;
  width: 52px;
  height: 52px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    > svg {
      font-size: 20px;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: inline-block;
  font-size: 14px;

  letter-spacing: 0.5px;
`;
