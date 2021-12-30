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

  font-weight: 600;

  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.75);
  }
`;
