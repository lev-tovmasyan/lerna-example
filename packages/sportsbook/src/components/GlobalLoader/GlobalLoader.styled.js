import styled, { css } from 'styled-components';

export const GlobalLoader__styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-active-contrast);
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
    `}
`;
