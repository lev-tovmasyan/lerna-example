import styled, { css } from 'styled-components';

export const Tree__styled = styled.section`
  width: calc(68.74% - 3rem);
  max-width: calc(100% - 40.5rem);
  height: 100%;
  margin: 0 1.5rem;
  max-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1366px) {
    max-width: calc(100% - 38.7rem);
    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        max-width: calc(100% - 18.85rem);
      `}
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 84.37%;
    min-width: calc(100% - 19.35rem);
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
    height: unset;
    overflow-y: unset;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      width: calc(71.35% - 2rem);
      max-width: calc(100% - 34.375rem);
      margin: 0 1rem;
    `}
`;

export const TreeTabs__styled = styled.section`
  background-color: var(--color-active-contrast);
  margin-bottom: 1px;
`;
