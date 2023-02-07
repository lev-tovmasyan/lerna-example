import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TopCards from '../../package/sections/TopCards/TopCards';
import {
  selectBetslipBets,
  toggleBet,
} from '../../redux/reducers/betslip/betslip.slice';
import {
  selectIsTopCardsLoading,
  selectTopCards,
} from '../../redux/reducers/topEvents/topEvents.slice';

const TopCardsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTopCardsLoading);
  const events = useSelector(selectTopCards);
  const betslip = useSelector(selectBetslipBets);

  const onEventClick = event => {
    console.log('event', event);
    navigate(`/event/${event.id}`);
  };

  const onOddClick = odd => {
    dispatch(toggleBet(odd));
  };

  return (
    <TopCards
      isLoading={isLoading}
      events={events}
      onEventClick={onEventClick}
      onOddClick={onOddClick}
      betslip={betslip}
    />
  );
};

export default TopCardsContainer;
