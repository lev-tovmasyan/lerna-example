import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  SingleEvent__styled,
  SingleEventSportsBook__styled,
  SingleEventSportsBookHead__styled,
  SingleSideBar__styled,
  // SingleSideBar__styled,
} from './SingleEvent.styled';
// import { selectSports } from '../../redux/reducers/sportsbook/sportsbook.slice';
import Navigation from '../../package/components/Navigation/Navigation';
import { useMediaQuery } from '@react-hook/media-query';
import {
  selectBetslipBets,
  toggleBet,
} from '../../redux/reducers/betslip/betslip.slice';
import {
  selectIsLiveExist,
  selectIsLiveLoading,
  selectSingleLive,
} from '../../redux/reducers/live/live.slice';
import SingleLive from '../../package/sections/SingleSport/SingleLive';
import {
  selectFavouriteMarkets,
  toggleFavouriteMarket,
} from '../../redux/reducers/sportsbook/sportsbook.slice';
// import Favourites from '../../components/Favourites/Favourites';
import LiveMenuContainer from '../../components/LiveMenuContainer/LiveMenuContainer';

const SingleLiveContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  // const sports = useSelector(selectSports);
  const event = useSelector(state => selectSingleLive(state, eventId));
  const isLoading = useSelector(selectIsLiveLoading);
  const betslip = useSelector(selectBetslipBets);
  const favouriteMarkets = useSelector(selectFavouriteMarkets);
  const isLiveExist = useSelector(selectIsLiveExist);

  const isMobile = useMediaQuery('only screen and (max-width: 800px)');

  const navLinks = useMemo(() => {
    const eventName = event
      ? `${event.t1?.n} vs. ${event.t2?.n}`
      : isLoading
      ? 'Loading...'
      : 'The event has ended';
    return [
      {
        name: 'Home',
        cb() {
          navigate('/');
        },
      },
      {
        name: 'Live Now',
        cb() {
          navigate('/live');
        },
      },
      { name: eventName },
    ];
  }, [navigate, event, isLoading]);

  const onOddClick = odd => {
    dispatch(toggleBet(odd));
  };

  const onMarketFavourite = code => {
    dispatch(toggleFavouriteMarket(code));
  };

  return (
    <SingleEvent__styled>
      {!isMobile && isLiveExist && (
        <SingleSideBar__styled>
          {/* <Favourites /> */}
          <LiveMenuContainer />
        </SingleSideBar__styled>
      )}
      <SingleEventSportsBook__styled>
        <SingleEventSportsBookHead__styled>
          <Navigation links={navLinks} />
        </SingleEventSportsBookHead__styled>
        <SingleLive
          isLoading={isLoading}
          event={event}
          onOddClick={onOddClick}
          betslip={betslip}
          favouriteMarkets={favouriteMarkets}
          onMarketFavourite={onMarketFavourite}
        />
      </SingleEventSportsBook__styled>
    </SingleEvent__styled>
  );
};

export default SingleLiveContainer;
