import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SPORT_NAME_BY_ID } from '../../constants/sports.constants';
import LiveEvents from '../../package/sections/Events/LiveEvents';
import {
  selectBetslipBets,
  toggleBet,
} from '../../redux/reducers/betslip/betslip.slice';
import {
  selectIsLiveLoading,
  selectLiveActiveSportId,
  selectLiveEventIds,
  selectLiveEvents,
  selectLiveSportIds,
  selectLiveSports,
  setLiveSportId,
} from '../../redux/reducers/live/live.slice';
import {
  selectFavouriteMarkets,
  toggleFavouriteMarket,
} from '../../redux/reducers/sportsbook/sportsbook.slice';

const LiveEventsContainer = ({ sportId, isHome, isAll }) => {
  const navigate = useNavigate();
  const stateActiveSportId = useSelector(selectLiveActiveSportId);
  const activeSportId = sportId || stateActiveSportId;
  const dispatch = useDispatch();
  const sportIds = useSelector(selectLiveSportIds);
  const sports = useSelector(selectLiveSports);
  const favouriteMarkets = useSelector(selectFavouriteMarkets);
  // const events = useSelector(state =>
  //   selectLiveEvents(state, activeSportId, isHome),
  // );
  const events = useSelector(selectLiveEvents);
  const isLoading = useSelector(selectIsLiveLoading);
  const betslip = useSelector(selectBetslipBets);

  const eventIds = useSelector(state =>
    selectLiveEventIds(state, activeSportId),
  );

  const filteredEventIds = useMemo(() => {
    const ids = [...eventIds];
    if (isHome && ids.length > 10) {
      ids.length = 10;
    }
    return ids;
  }, [eventIds, isHome]);

  const tabs = useMemo(() => {
    if (sportId) {
      return [];
    }
    return sportIds.map(id => ({
      id,
      name: SPORT_NAME_BY_ID[id],
      cb: () => dispatch(setLiveSportId(id)),
    }));
  }, [sportId, sportIds]);

  const onOddClick = useCallback(odd => {
    dispatch(toggleBet({ ...odd, isLive: true }));
  }, []);

  const onEventClick = useCallback(
    eventId => {
      navigate(`/live-event/${eventId}`);
    },
    [navigate],
  );

  const onViewAllClick = () => {
    navigate('/live');
  };

  const onMarketFavourite = code => {
    dispatch(toggleFavouriteMarket(code));
  };

  return (
    <LiveEvents
      title={'Live Now'}
      isLoading={isLoading}
      sports={sports}
      sportIds={sportIds}
      activeSportId={activeSportId}
      tabs={tabs}
      eventIds={filteredEventIds}
      events={events}
      onOddClick={onOddClick}
      betslip={betslip}
      onEventClick={onEventClick}
      onViewAllClick={!isAll && onViewAllClick}
      onMarketFavourite={onMarketFavourite}
      favouriteMarkets={favouriteMarkets}
    />
  );
};

export default LiveEventsContainer;
