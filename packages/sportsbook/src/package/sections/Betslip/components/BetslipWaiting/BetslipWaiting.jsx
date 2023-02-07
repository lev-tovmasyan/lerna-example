import React, { useEffect, useState } from 'react';
import ButtonLoader from '../../../../components/UI/Button/ButtonLoader/ButtonLoader';
import {
  BetslipWaitingText__styled,
  BetslipWaitingTimer__styled,
  BetslipWaiting__styled,
} from '../../Betslip.styled';

const BetslipWaiting = ({ cb }) => {
  const [timer, setTimer] = useState(8);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTimer(prev => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        }),
      1000,
    );

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      cb && cb();
    }
  }, [timer]);

  return (
    <BetslipWaiting__styled>
      <BetslipWaitingTimer__styled>{timer}</BetslipWaitingTimer__styled>
      <BetslipWaitingText__styled>Please wait...</BetslipWaitingText__styled>
      <ButtonLoader big />
    </BetslipWaiting__styled>
  );
};

export default BetslipWaiting;
