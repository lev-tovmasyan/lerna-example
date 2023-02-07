import styled, { css } from 'styled-components';

export const Category__styled = styled.div`
  margin-bottom: 0.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      margin-bottom: 0.5625rem;
    `}
`;

export const CategoryList__styled = styled.ul`
  margin: 0;
  padding: 0 0 0.25rem 0;
  list-style-type: none;
  width: 100%;
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

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #434343;
      padding-bottom: 1px;
    `}

  @media screen and (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
