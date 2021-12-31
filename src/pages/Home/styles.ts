import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};

  > footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};

    height: 80px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Content = styled.div`
  flex: 1;
`;
