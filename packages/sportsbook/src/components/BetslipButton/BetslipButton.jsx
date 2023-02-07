import React from 'react';
import {
  BetslipButton__styled,
  BetslipButtonContainer__styled,
  BetslipButtonCount__styled,
  BetslipButtonIcon__styled,
} from './BetslipButton.styled';

const BetslipButton = ({ count = 4, onClick }) => {
  return (
    <BetslipButtonContainer__styled onClick={onClick}>
      <BetslipButton__styled>
        <BetslipButtonIcon__styled>
          <svg>
            <use xlinkHref={'#betslip'} />
          </svg>
        </BetslipButtonIcon__styled>
        <span>Betslip</span>
        <BetslipButtonCount__styled>{count}</BetslipButtonCount__styled>
      </BetslipButton__styled>
    </BetslipButtonContainer__styled>
  );
};

export default BetslipButton;
