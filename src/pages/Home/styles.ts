import styled, { keyframes } from 'styled-components';

const fadeFromBottomAnimation = keyframes`
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1 }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  overflow: hidden;

  > footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};

    height: 80px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.background};

    animation: ${fadeFromBottomAnimation} 0.4s ease-out forwards;
    opacity: 0;
    animation-delay: 0.12s;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > video {
    max-width: 680px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
