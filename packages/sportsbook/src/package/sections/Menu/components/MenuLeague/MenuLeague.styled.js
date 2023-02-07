import styled, { css } from 'styled-components';

export const MenuLeague__styled = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
      border-color: #bbbbbb;
    `}
`;

export const MenuCheckbox__styled = styled.div`
  padding: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      div {
        border: 2px solid #000000;

        div {
          border: none;
          background-color: #000000;

          svg {
            fill: #ffffff;
          }
        }
      }
      color: #000000;
    `}
`;

export const MenuLeagueName__styled = styled.div`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: normal;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: #000000;
      font-weight: 400;
    `}
`;

export const MenuLeagueLive__styled = styled.span`
  padding: 0.2rem 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  font-size: 0.69rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-active-contrast);
  background-color: var(--color-active);
  border-radius: 3.125rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      padding: 0 0.25rem;
      background: red;
      border-radius: 2px;
      color: #ffffff;
      font-weight: 500;
    `}
`;
