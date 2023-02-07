import styled, { css } from 'styled-components';

export const TopLeagues__styled = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  background-color: var(--color-active-contrast);

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
      border-radius: 0;
    `}
`;

export const TopLeaguesHead__styled = styled.div`
  padding: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-active);
  white-space: nowrap;
  text-align: start;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      color: #000000;
      font-size: 1rem;
      font-weight: 700;
      border-bottom: none;
    `}
`;

export const TopLeaguesBody__styled = styled.div`
  width: 100%;
`;

export const TopLeaguesList__styled = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`;
