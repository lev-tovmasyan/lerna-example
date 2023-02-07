import styled, { css, keyframes } from 'styled-components';

const animatedTab = keyframes`
  25% {
    color: var(--color-active);
    transform: scale(.95)
  }
  50% {
    transform: scale(1)
  }
  75% {
    transform: scale(1.05)
  }
  to {
    color: var(--color-decrement2);
    transform: scale(1.1)
  }
`;

export const Tab__styled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${props =>
    props.forBetslip &&
    css`
      width: calc(100% / 3);
      ${TabsButton__styled} {
        width: 100%;
      }

      ${TabsName__styled} {
        ${props =>
          props.theme.mode === 'starsBet' &&
          css`
            text-transform: uppercase;
            font-weight: 700;
          `}
      }
    `};
`;

export const TabsButton__styled = styled.button`
  padding: 0.56rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 0.19rem solid transparent;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      border-bottom: 0.19rem solid var(--color-active);
      ${props =>
        props.theme.mode === 'starsBet' &&
        css`
          border-color: #e8b116;
        `}
      ${TabsName__styled} {
        color: var(--color-active);

        ${props =>
          props.theme.mode === 'starsBet' &&
          css`
            color: #e8b116;
          `}
      }
      ${TabsSvg__styled} {
        fill: var(--color-active);

        ${props =>
          props.theme.mode === 'starsBet' &&
          css`
            fill: #e8b116;
          `}
      }
    `};
`;

export const TabsIcon__styled = styled.span`
  margin-right: 0.25rem;
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const TabsSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-inactive);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      fill: #ffffff;
    `}
`;

export const TabsName__styled = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--color-inactive);
  white-space: nowrap;
  // animation: ${animatedTab} 0.75s linear infinite;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: #ffffff;
      font-weight: 700;
    `}
`;
