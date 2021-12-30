import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};

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

  a {
    transition: opacity 0.4s;

    &:hover {
      opacity: 0.7;
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
