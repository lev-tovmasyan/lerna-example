import styled, { css } from 'styled-components';

export const Favourites__styled = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: var(--color-active-contrast);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-radius: 0;
    `}
`;

export const FavouritesHead__styled = styled.div`
  padding: 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-background);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      border: none;
    `}
`;

export const FavouritesIcon__styled = styled.div`
  margin-right: 0.75rem;
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavouritesSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-active);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      fill: #000000;
    `}
`;

export const FavouritesTitle__styled = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-active);
  text-transform: uppercase;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: #000000;
      font-weight: 500;
    `}
`;

export const FavouritesBody__styled = styled.div`
  width: 100%;
`;

export const FavouritesList__styled = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const FavouritesItem__styled = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-background);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
    `}
`;

export const FavouritesSportIcon__styled = styled.div`
  margin: 0 0.25rem 0 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FavouritesSportSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-active);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      fill: #000000;
    `}
`;

export const FavouritesEvent__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow: hidden;
`;
