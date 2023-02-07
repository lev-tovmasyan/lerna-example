import styled, { css } from 'styled-components';

export const SearchEventsRow__styled = styled.li`
  padding-bottom: 0.5rem;
  width: 100%;
  cursor: pointer;
  background-color: #212733;
  border-top: 1px solid var(--color-background);
  overflow: hidden;

  &:hover {
    background-color: var(--color-betslip-bg);

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        background-color: #bbbbbb;
      `}
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
    `}
`;
