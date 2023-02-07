import styled, { css } from 'styled-components';

export const Coupons__styled = styled.div`
  width: 100%;
  background-color: var(--color-active-contrast);
  border-radius: 0.375rem;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-radius: 0;
    `}
`;

export const CouponsHead__styled = styled.div`
  padding: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-active);
  border-bottom: 1px solid var(--color-background);
  text-transform: uppercase;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      color: #000000;
      font-size: 1rem;
      border-bottom: none;
    `}
`;

export const CouponsBody__styled = styled.div`
  padding: 0.75rem;
  width: 100%;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
    `}
`;

export const CouponsList__styled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CouponsItem__styled = styled.div`
  margin: 0 0.5rem 0.5rem 0;
  width: 9.375rem;
  border: 1px solid var(--color-inactive);

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 800px) {
    width: calc(100% / 2 - 0.5rem / 2);

    &:nth-child(2n + 2) {
      margin-right: 0;
    }
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-color: #afafaf;
    `}
`;

export const CouponsLink__styled = styled.a`
  padding: 0.875rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CouponsIcon__styled = styled.div`
  width: 2.125rem;
  height: 2.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-white);
  }
`;

export const CouponsTitle__styled = styled.div`
  max-width: 100%;
  margin: 0.313rem 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
`;

export const CouponsCount__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
`;
