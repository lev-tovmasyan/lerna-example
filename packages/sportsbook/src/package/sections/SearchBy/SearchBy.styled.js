import styled, { css } from 'styled-components';

export const SearchBy__styled = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  background-color: var(--color-active-contrast);
  border-radius: 0.25rem;

  @media screen and (max-width: 1024px) {
    ${props =>
      props.theme.mode === 'starsBet' &&
      css`
        margin-bottom: 0;
        border-radius: 0;
      `}
  }
`;

export const SearchByHead__styled = styled.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-active);
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      border: none;
      font-size: 1rem;
      color: #000000;
      font-weight: 700;
    `}
`;

export const SearchByBody__styled = styled.div`
  padding: 1rem 0.5rem 0.75rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
    `}
`;

export const SearchByInner__styled = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 0.25rem;
`;

export const SearchBySelect__styled = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      @media screen and (max-width: 800px) {
        max-width: 88px;
      }
    `}
`;

export const SearchBySearch__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-left: 2px solid #515151;

      @media screen and (max-width: 800px) {
        flex-grow: 1;
      }
    `}
`;

export const SearchByFooter__styled = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 70%;
    text-align: center;
    padding: 0.5rem 0;
    background-color: var(--color-active);
    border-radius: 0.5rem;
    color: var(--color-second);
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
  }
`;
