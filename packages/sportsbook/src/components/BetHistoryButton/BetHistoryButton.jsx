import React from 'react';
import {
  BetHistoryButton__styled,
  BetHistoryButtonContainer__styled,
  BetHistoryButtonIcon__styled,
} from './BetHistoryButton.styled';
import { Link } from 'react-router-dom';

const BetHistoryButton = () => {
  return (
    <BetHistoryButtonContainer__styled as={Link} to={'/bet-history'}>
      <BetHistoryButton__styled>
        <BetHistoryButtonIcon__styled>
          <svg>
            <use xlinkHref={'#betslip'} />
          </svg>
        </BetHistoryButtonIcon__styled>
        <span>
          Bet <br /> History
        </span>
      </BetHistoryButton__styled>
    </BetHistoryButtonContainer__styled>
  );
};

export default BetHistoryButton;
