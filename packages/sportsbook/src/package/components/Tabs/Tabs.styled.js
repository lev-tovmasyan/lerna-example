import styled, { css } from 'styled-components';

export const Tabs__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const TabsList__styled = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0 0 0.25rem 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 0.25rem;

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        height: 0.6rem;
      `}
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    height: 100%;
    background-color: var(--color-active);
    cursor: pointer;

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        background-color: #292b2c;
        border: 0.15rem solid #ffffff;
      `}
  }

  @media screen and (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #272727;
      padding-bottom: 1px;
    `}
`;
