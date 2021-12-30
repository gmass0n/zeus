import styled, { keyframes } from 'styled-components';

import signinBackground from '~/assets/images/signin-background.jpeg';

const fadeFromBottomAnimation = keyframes`
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1 }
`;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};

  background-size: cover;
  background-position: 10% 0;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(transparent, ${theme.colors.background}de), url(${signinBackground.src})`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.aside`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 480px;
  width: 100%;

  animation: ${fadeFromBottomAnimation} 0.7s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;

  a {
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.75);
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.onBackground};
    font-size: 48px;
    line-height: 64px;
    margin-top: ${({ theme }) => theme.spacing.xlg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;

    h1 {
      text-align: center;
      font-size: 32px;
      max-width: 70%;
      line-height: 48px;
      margin-top: ${({ theme }) => theme.spacing.lg};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 24px;
      line-height: 42px;
    }
  }
`;

export const Form = styled.form`
  max-width: 480px;
  width: 100%;

  background: ${({ theme }) => theme.colors.shape};
  padding: ${({ theme }) => theme.spacing.xlg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  animation: ${fadeFromBottomAnimation} 0.7s ease-out forwards;
  opacity: 0;
  animation-delay: 0.12s;

  > fieldset {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const FormFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing.lg};

  span {
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.onShape};
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.colors.primary};
      white-space: nowrap;

      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.75);
      }
    }
  }
`;
