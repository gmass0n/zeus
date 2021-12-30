import styled from 'styled-components';

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
