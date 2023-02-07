import styled, { css } from 'styled-components';

export const Wrapper__styled = styled.section`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: var(--color-background);
    `}
`;
export const WrapperInner__styled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Children__styled = styled.div`
  width: calc(100% - 2.7rem);
`;

export const Button__styled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.5rem;
  background-color: var(--color-active-contrast);
  z-index: 2;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-white);

    @media screen and (max-width: 1024px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  border-radius: 0.25rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #272727;
      border-radius: 0;
    `}

  ${props =>
    props.dates &&
    css`
      height: ${props.theme.mode === 'starsBet' ? '3.15rem' : '2.95rem'};
    `}
`;

export const Body__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0.5rem;
  z-index: 2;
  color: var(--color-white);
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const Close__styled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-white);
  }
`;

export const BodyInner__styled = styled.div`
  background-color: var(--color-betslip-bg);
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const Title__styled = styled.div`
  text-align: center;
  font-weight: 700;
`;

export const Theme__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const ThemeTitle__styled = styled.div`
  font-weight: 700;
`;
export const ThemeCheckbox__styled = styled.div``;
export const Select__styled = styled.div`
  margin-top: 1rem;
`;
export const SelectHead__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.81rem;
  font-weight: 700;
  border-top: 1px solid var(--color-white);
`;
export const SelectBody__styled = styled.div``;
export const SelectItem__styled = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.75rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-white);
  }
`;
export const SelectSquare__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  border: 2px solid var(--color-white);
  background-color: transparent;
`;
export const SelectSquareInner__styled = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-white);
  border-radius: 50%;
`;
export const SelectText__styled = styled.div``;
export const SelectRatio__styled = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
`;
