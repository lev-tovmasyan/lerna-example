import styled from 'styled-components';
import { css } from 'styled-components';

export const Events__styled = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: max-content;
  border-radius: 0.25rem;
  background-color: var(--color-active-contrast);

  &:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: rgb(229, 229, 229);
    `}
`;

export const EventsHead__styled = styled.div`
  width: 100%;
`;

export const EventsTitle__styled = styled.div`
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-active);
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      color: #000000;
      font-size: 1rem;
      font-weight: 500;
      border-bottom: none;
    `}
`;

export const EventsSport__styled = styled.div`
  width: 100%;
`;

export const EventsFilter__styled = styled.div`
  padding: 0.5rem 2.375rem 0.5rem 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid var(--color-background-dark);
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
      border-color: #bbbbbb;
    `}
`;

export const EventsBetTypes__styled = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 699px) {
    margin-left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const EventsBody__styled = styled.div`
  width: 100%;
`;

export const EventsFooter__styled = styled.div`
  padding: 0.375rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #ffffff;
    `}
`;

export const EventsViewAll__styled = styled.div`
  min-width: 16.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-active);
  border-radius: 0.375rem;
  color: var(--color-active-contrast);
  font-weight: 800;

  ${({ skeleton }) =>
    skeleton &&
    css`
      height: 2.5rem;
      background-color: unset;
    `}

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #8d8d8d;
      color: #ffffff;
      font-weight: 500;
      border-radius: 1.25rem;
    `}
`;
