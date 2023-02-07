import styled, { css } from 'styled-components';

export const MarketTypes__styled = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MarketTypesList__styled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: var(--color-active-contrast);
  height: ${props => (props.allMarkets ? 'fit-content' : '6rem')};
  overflow: hidden;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: transparent;
    `}
`;

export const MarketTypesItem__styled = styled.li`
  width: calc(100% / 5);
  height: 3rem;
  border: 1px solid var(--color-background-dark);
  background-color: ${props =>
    props.active ? 'var(--color-active)' : 'var(--color-active-contrast)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${props =>
    props.active ? 'var(--color-active-contrast)' : 'var(--color-text)'};

  button {
    padding: 0;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: ${props => (props.active ? '#e8b116' : '#ffffff')};
      color: #000000;
      font-weight: 400;
      border: 1px solid #afafaf;
    `}
`;

export const MarketTypesView__styled = styled.div`
  margin-top: 0.75rem;
  width: 12.75rem;
  height: 3.06rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-text);
  border-radius: 0.375rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-active);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #8d8d8d;
      color: #ffffff;
      border-radius: 1.25rem;
      border: none;
    `}
`;
