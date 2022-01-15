import styled, { keyframes } from 'styled-components';

const fadeFromBottomAnimation = keyframes`
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1 }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  max-width: 480px;
  margin: 30px;
  width: 100%;

  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xlg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow};

  animation: ${fadeFromBottomAnimation} 0.7s ease-out forwards;
  opacity: 0;
  animation-delay: 0.12s;

  margin: ${({ theme }) => theme.spacing.lg};

  p {
    color: ${({ theme }) => theme.colors.onBackground};

    & + p {
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactWays = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: inline-flex;

    a {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.xs};

      svg {
        color: ${({ theme }) => theme.colors.primary};
        transition: filter 0.3s ease-in-out;
      }

      span {
        color: ${({ theme }) => theme.colors.onBackground};
        transition: filter 0.3s ease-in-out;
      }

      &:hover {
        svg,
        span {
          filter: brightness(0.75);
        }
      }
    }

    & + li {
      margin-top: ${({ theme }) => theme.spacing.xs};
    }
  }
`;
