import styled from 'styled-components';
import { css } from 'styled-components';
import { getRandomNumber } from '../../../../helpers/utils';

export const MenuSportItem__styled = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-color: #bbbbbb;
    `}
`;

export const MenuSportButton__styled = styled.button`
  width: 100%;
  padding: ${props =>
    props.isSingleEvent ? '0.5rem' : '0.5rem 0.5rem 0.5rem 1rem'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #272727;
    `}
`;

export const MenuSportInfo__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //border-bottom: 1px solid var(--color-background);
`;

export const MenuSportIcon__styled = styled.span`
  margin-right: 0.5rem;
  width: 1.19rem;
  height: 1.19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${props =>
    props.skeleton &&
    css`
      overflow: hidden;
      border-radius: 50%;
    `}
`;

export const MenuSportSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-sport-icon);
`;

export const MenuSportName__styled = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-text);

  ${props =>
    props.skeleton &&
    css`
      height: 1rem;
      width: ${getRandomNumber(30, 60) + '%'};
    `}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 700;
    `}
`;

export const MenuSportCount__styled = styled.span`
  width: 2rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  flex-shrink: 0;
  ${props =>
    props.skeleton &&
    css`
      height: 1rem;
    `}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;

export const MenuSportEvents__styled = styled.div`
  padding: 0.5rem;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: var(--color-betslip-bg);
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
    `}
`;

export const MenuSportEventsShow__styled = styled.div`
  width: 100%;
  height: 3.06rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: var(--color-active);
  border-radius: 0.375rem;
  font-weight: 700;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #8d8d8d;
      color: #ffffff;
      border-radius: 1.25rem;
    `}
`;
