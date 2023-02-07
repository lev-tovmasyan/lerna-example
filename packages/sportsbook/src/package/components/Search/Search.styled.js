import styled, { css } from 'styled-components';

export const Search__styled = styled.div`
  width: 100%;
`;

export const SearchForm__styled = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchLabel__styled = styled.label`
  padding: 0.25rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background-color: var(--color-white);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      height: 1.69rem;
      padding: 0;
    `}
`;

export const SearchInput__styled = styled.input`
  padding-left: 0.25rem;
  width: calc(100% - 1.375rem);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-placeholder);
  background-color: transparent;
  outline: none;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-size: 0.75rem;
    `}

  &::placeholder {
    color: var(--color-placeholder);
    font-size: 0.875rem;
    font-weight: 400;

    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        font-size: 0.75rem;
      `}
  }
`;

export const SearchIcon__styled = styled.span`
  padding: 0.25rem;
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.2rem;
`;

export const SearchSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-active);
`;
