import styled, { css } from 'styled-components';

export const SingleEvent__styled = styled.section`
  width: calc(68.34% - 3rem);
  max-width: calc(100% - 40.5rem);
  height: 100%;
  margin: 0 1.5rem;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1366px) {
    max-width: calc(100% - 38.7rem);

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        max-width: calc(100% - 37.7rem);
      `}
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    width: calc(100% - 19.35rem);
    max-width: none;

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        margin-right: 1rem;
        width: calc(100% - 18.85rem);
      `}
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }

  //@media screen and (max-width: 800px) {
  //  margin: 0;
  //}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      width: calc(71.35% - 2rem);
      max-width: calc(100% - 36.375rem);
      margin: 0 1rem;
    `}
`;

export const SingleSideBar__styled = styled.div`
  width: calc(25.32% - 1.5rem);
  margin-right: 1.5rem;
  height: 100%;
  overflow-y: auto;
  min-width: 15.625rem;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1366px) {
    min-width: 17.85rem;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      width: calc(21.14% - 1rem);
      margin-right: 1rem;
    `}
`;

export const SingleEventSportsBook__styled = styled.div`
  //width: 74.68%;
  //max-width: calc(100% - 17.125rem);
  height: 100%;
  overflow-y: auto;
  flex-grow: 1;

  &::-webkit-scrollbar {
    display: none;
  }

  //@media screen and (max-width: 1366px) {
  //  max-width: calc(100% - 18.625rem);
  //}
  //
  //@media screen and (max-width: 800px) {
  //  width: 100%;
  //  max-width: 100%;
  //  overflow-y: unset;
  //}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      //width: unset;
      //max-width: unset;
    `}
`;

export const SingleEventSportsBookHead__styled = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: var(--color-background);
    `}
`;
