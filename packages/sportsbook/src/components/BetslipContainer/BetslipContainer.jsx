import { useDispatch, useSelector } from 'react-redux';
import Betslip from '../../package/sections/Betslip/Betslip';
import {
  selectBalance,
  selectCurrency,
  selectIsAuth,
} from '../../redux/reducers/auth/auth.slice';
import {
  clearBetslipBook,
  closeBetslip,
  removeBet,
  resetBetslip,
  selectBetslip,
  toggleBetslipTimer,
  updateBetslip,
} from '../../redux/reducers/betslip/betslip.slice';
import {
  betslipBookThunk,
  placeBetThunk,
} from '../../redux/reducers/betslip/betslip.thunk';
import { selectIsSportBonusAvailable } from '../../redux/reducers/configs/configs.slice';

const BetslipContainer = () => {
  const dispatch = useDispatch();
  const betslip = useSelector(selectBetslip);
  const isAuth = useSelector(selectIsAuth);
  const currency = useSelector(selectCurrency);
  const balance = useSelector(selectBalance);
  const isBonusAvailable = useSelector(selectIsSportBonusAvailable);

  const onClose = () => {
    dispatch(closeBetslip());
  };

  const onBetDelete = ref => {
    dispatch(removeBet(ref));
  };

  const toggleTimer = value => {
    dispatch(toggleBetslipTimer(value));
  };

  const onPlaceBet = async (data, isSingle, betsList) => {
    if (isSingle) {
      for (let index = 0; index < betsList.length; index++) {
        const bet = betsList[index];
        await dispatch(
          placeBetThunk({ ...data, bets: [bet], amount: bet.amount }),
        );
      }
    } else {
      dispatch(placeBetThunk(data));
    }
  };

  const onBook = () => {
    dispatch(betslipBookThunk());
  };

  const onReset = () => {
    dispatch(resetBetslip());
  };

  const clearBook = () => {
    dispatch(clearBetslipBook());
  };

  return (
    <Betslip
      betslip={betslip}
      onPlaceBet={onPlaceBet}
      onClose={onClose}
      onBetDelete={onBetDelete}
      updateBetslip={params => dispatch(updateBetslip(params))}
      isAuth={isAuth}
      currency={currency}
      balance={balance}
      onBook={onBook}
      onReset={onReset}
      clearBook={clearBook}
      toggleTimer={toggleTimer}
      isBonusAvailable={isBonusAvailable}
    />
  );
};

export default BetslipContainer;
