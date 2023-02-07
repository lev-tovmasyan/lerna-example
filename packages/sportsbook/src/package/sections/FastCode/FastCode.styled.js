import styled, { css } from 'styled-components';

export const FastCode__styled = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  background-color: var(--color-active-contrast);
  border-radius: 0.25rem;
`;

export const FastCodeHead__styled = styled.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-background);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      border: none;
    `}
`;

export const FastCodeTitle__styled = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-active);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: #000000;
      font-size: 1rem;
      font-weight: 700;
    `}
`;

export const FastCodeInfo__styled = styled.div`
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FastCodeInfoLink__styled = styled.a`
  padding: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FastCodeInfoSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      fill: #000000;
    `}
`;

export const FastCodeBody__styled = styled.div`
  padding: 1rem 0.5rem 0.75rem;
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-active);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
    `}
`;

export const FastCodeSearch__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FastCodeRapitMode__styled = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.25rem;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-text);
  }
`;

export const FastCodeRapitModeCheckbox__styled = styled.div`
  padding: 0.25rem;
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
