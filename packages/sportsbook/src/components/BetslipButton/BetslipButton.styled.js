import styled from 'styled-components';

export const BetslipButtonContainer__styled = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 3rem;
  transform: translateY(-50%);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-active);
  box-shadow: 0 3px 8px rgb(0 0 0 / 30%);
  cursor: pointer;
  z-index: 109;
`;

export const BetslipButton__styled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-active);
  position: relative;

  span {
    margin-top: 0.5rem;
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-background);
  }
`;

export const BetslipButtonIcon__styled = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-background);
  }
`;

export const BetslipButtonCount__styled = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  transform: translateY(-50%);
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-active);
`;
