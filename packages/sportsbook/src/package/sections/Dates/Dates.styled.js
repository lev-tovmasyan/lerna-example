import styled, { css } from 'styled-components';

export const Date__styled = styled.div`
  margin-bottom: 0.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #272727;
      margin-bottom: 0.5625rem;
    `}
`;

export const DateList__styled = styled.ul`
  margin: 0;
  padding: 0 0 0.25rem 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    height: 100%;
    background-color: var(--color-active);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DateItem__styled = styled.li`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6.5rem;

  ${props =>
    props.count &&
    css`
      width: calc(
        100% / ${props.count} - ((0.5rem * ${props.count - 1}) / ${props.count})
      );
    `};

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      min-width: fit-content;
    `}
`;

export const DateButton__styled = styled.button`
  width: 100%;
  height: 2.94rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  background-color: var(--color-active-contrast);
  padding: 0 0.25rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: transparent;
      /* border: none; */
      border-radius: 0;
    `}

  ${props =>
    props.active &&
    css`
      border-bottom: 0.19rem solid var(--color-active);
    `};
`;

export const DateWeekDay__styled = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 700;
      text-transform: uppercase;
    `}
`;

export const DateMonthDay__styled = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 700;
    `}
`;
