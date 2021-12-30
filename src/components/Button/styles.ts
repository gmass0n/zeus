import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 52px;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 16px;
  text-transform: uppercase;

  font-weight: 700;

  transition: filter 0.3s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(0.75);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.45);
  }
`;

export const Loader = styled.span`
  width: 24px;
  height: 24px;
  border: ${({ theme }) => `3px solid ${theme.colors.background}`};
  border-top-color: ${({ theme }) => theme.colors.background}33;
  border-left-color: ${({ theme }) => theme.colors.background}33;
  border-radius: 50%;

  animation: ${spinAnimation} 0.6s linear infinite;
`;
