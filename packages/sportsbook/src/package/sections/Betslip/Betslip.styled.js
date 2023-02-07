import styled, { css } from 'styled-components';

export const Betslip__styled = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: var(--color-betslip-bg);
  position: relative;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #272727;
      border-radius: 0;
    `}

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 29.23rem;
    max-height: calc(100% - 2rem);
    z-index: 110;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 850px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: unset;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: unset;
  }

  @media screen and (max-height: 500px) {
    min-height: 100%;
    max-height: unset;
    overflow-y: auto;
  }
`;

export const BetslipHead__styled = styled.div`
  padding: 0.75rem 0.56rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-bottom: 3px solid #e8b116;
    `}

  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

export const BetslipClose__styled = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipCloseBG__styled = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: var(--color-black--05);
  }
`;

export const BetslipTitle__styled = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-active);
  text-transform: uppercase;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-size: 0.875rem;
    `}
`;

export const BetslipCount__styled = styled.div`
  margin-left: 0.56rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.81rem;
  font-weight: 400;
  color: var(--color-active-contrast);
  background-color: var(--color-active);
`;

export const BetslipTabs__styled = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-color: var(--color-background);
    `}
`;

export const BetslipBody__styled = styled.div`
  padding: 0.5rem;
  width: 100%;
  border-bottom: 1px solid var(--color-background-dark);

  @media screen and (max-width: 1024px) {
    flex: 1;
    overflow-y: auto;
  }

  @media screen and (max-height: 500px) {
    flex: unset;
    overflow-y: unset;
  }

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      padding: 0;
      border-color: var(--color-background);
    `}
`;

export const BetslipEmpty__styled = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  background-color: var(--color-active-contrast);
`;

export const BetslipCombinations__styled = styled.div`
  padding: 0 0.56rem;
  width: 100%;
  border-bottom: 1px solid var(--color-background);
`;

export const BetslipCombination__styled = styled.div`
  padding: 0.56rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BetslipCombinationName__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;

export const BetslipCombinationAction__styled = styled.div`
  display: flex;
  align-items: center;
`;

export const BetslipCombinationMultiple__styled = styled.div`
  margin: 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;

export const BetslipCombinationBet__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipCombinationLabel__styled = styled.label`
  padding: 0.5rem;
  width: 5.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.125rem;
  background-color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-radius: 0.3125rem;
      border: 1px solid #434343;
      padding: 0.25rem;
    `}
`;

export const BetslipCombinationInput__styled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.875rem;
  background-color: transparent;
  color: var(--color-active-contrast);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      color: #7a7a7a;
    `}
`;

export const BetslipCombinationGift__styled = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background-color: var(--color-increment);
`;

export const BetslipCombinationGiftIcon__styled = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipCombinationSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  fill: var(--color-text);
`;

export const BetslipCombinationGiftPercent__styled = styled.div`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
`;

export const BetslipFooter__styled = styled.div`
  padding: 0.25rem 0.5rem 0.5rem;
  width: 100%;
`;

export const BetslipFinalInfo__styled = styled.div`
  width: 100%;
`;

export const BetslipFinalHead__styled = styled.div`
  margin-bottom: 0.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BetslipFinalBody__styled = styled.div`
  width: 100%;
`;

export const BetslipFinalInfoList__styled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
`;

export const BetslipFinalInfoItem__styled = styled.li`
  padding: 0.25rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BetslipFinalInfoName__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;

export const BetslipFinalCount__styled = styled.div`
  display: flex;
  align-items: center;
`;

export const BetslipFinalSum__styled = styled.div`
  margin-left: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;

export const BetslipAction__styled = styled.div`
  width: 100%;
`;

export const BetslipActionBet__styled = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  height: 2.81rem;
  background-color: var(--color-active);
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 9.4rem;
  overflow: hidden;
  color: var(--color-active-contrast);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
    `}
`;

export const BetslipActionBook__styled = styled.div`
  width: 100%;
  height: 2.81rem;
  background-color: var(--color-white);
  border-radius: 9.4rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-active-contrast);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
    `}
`;

export const BetslipSettings__styled = styled.div`
  margin-top: 0.25rem;
  width: 100%;
`;

export const BetslipSettingsHead__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipSettingsButton__styled = styled.button`
  width: 100%;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.81rem;
  border-radius: 9.4rem;
  border: 1px solid var(--color-text);
  cursor: pointer;
  position: relative;
`;

export const BetslipSettingsBody__styled = styled.div`
  width: 100%;
  height: ${props => (props.active ? '7rem' : '0')};
  overflow: hidden;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BetslipSettingsTitle__styled = styled.div`
  padding: 0.375rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-inactive);
`;

export const BetslipSettingsProps__styled = styled.div`
  width: 100%;
`;

export const BetslipSettingsList__styled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const BetslipSettingsItem__styled = styled.li`
  padding: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BetslipSettingsRadio__styled = styled.div`
  margin-right: 0.25rem;
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipSetting__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white);
`;

export const BetslipSettingsIcon__styled = styled.div`
  margin-right: 0.5rem;
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetslipSettingsSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-text);
`;

export const BetslipSettingsText__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
`;

export const BetslipSettingsOpen__styled = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%) rotate(${props => (props.open ? '180deg' : '0')});
  transition: 0.2s;
`;

export const BetslipSettingsOpenSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-text);
`;

export const BetslipError__styled = styled.div`
  padding: 1rem 0.5rem 1rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-decrement);
`;

export const BetslipErrorIcon__styled = styled.div`
  margin: 0 1.25rem 0 0.25rem;
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
`;

export const BetslipErrorSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  fill: var(--color-black--05);
`;

export const BetslipErrorTexts__styled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BetslipErrorText__styled = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0.3rem 0;
  line-height: 1.3;
`;

export const BetslipWaiting__styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-7);
`;

export const BetslipWaitingTimer__styled = styled.div`
  border: 3px solid var(--color-text);
  background-color: var(--color-active);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 0.6rem;
  color: var(--color-text);
  font-weight: bold;
  font-size: 2rem;
`;

export const BetslipWaitingText__styled = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text);
  margin: 1rem 0 1.5rem 0;
`;
