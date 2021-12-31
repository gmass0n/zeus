import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.shape};

  height: 48px;
  width: 48px;

  transition: filter 0.2s ease-in;

  > svg {
    color: #ffffff;
    font-size: 16px;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
