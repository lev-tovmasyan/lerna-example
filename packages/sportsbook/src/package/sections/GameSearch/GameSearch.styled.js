import styled, { css } from 'styled-components';

export const GameSearch__styled = styled.div`
  padding: 0.56rem;
  width: 100%;
  border-radius: 0.375rem;
  background-color: var(--color-active-contrast);
  /* 
  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  } */

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
      border-radius: 0;
    `}
`;

export const GameSearchError = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  color: var(--color-background);
  margin-top: 0.5rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: var(--color-background-dark);
    `}
`;
