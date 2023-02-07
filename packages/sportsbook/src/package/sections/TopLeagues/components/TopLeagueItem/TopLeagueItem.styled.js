import styled from 'styled-components';
import { css } from 'styled-components';
import { getRandomNumber } from '../../../../helpers/utils';

export const TopLeaguesItem__styled = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-bottom: 1px solid #bbbbbb;
    `}

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TopLeaguesItemButton__styled = styled.button`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border: none;
  outline: none;
  text-align: start;
  background-color: transparent;
  ${props =>
    !props.skeleton &&
    css`
      cursor: pointer;
    `}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      @media screen and (max-width: 1024px) {
        padding: 0.7rem 0.5rem 0.7rem 1rem;
      }
    `}
`;

export const TopLeaguesIcon__styled = styled.div`
  margin-right: 0.5rem;
  width: 1.19rem;
  height: 1.19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
`;

export const TopLeaguesImg__styled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const TopLeaguesName__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
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
      font-weight: 400;
      @media screen and (max-width: 1024px) {
        font-size: 1rem;
      }
    `}
`;
