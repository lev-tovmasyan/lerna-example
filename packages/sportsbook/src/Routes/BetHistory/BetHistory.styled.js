import styled, { css } from 'styled-components';

export const HistoryOuter__styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
  height: 100%;
  margin-right: 1.5rem;
  max-height: 100%;
  //overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1366px) {
    max-width: calc(100% - 38.7rem);
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 84.37%;
    min-width: calc(100% - 19.35rem);
  }

  @media screen and (max-width: 1366px) {
    max-width: calc(100% - 38.7rem);
    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        max-width: calc(100% - 35.7rem);
      `}
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    max-height: unset;
    //overflow-y: unset;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      width: calc(71.35% - 2rem);
      max-width: calc(100% - 34.375rem);
      margin: 0 1rem;
    `}
`;

export const HistoryNavigation__styled = styled.div`
  width: 100%;
`;
