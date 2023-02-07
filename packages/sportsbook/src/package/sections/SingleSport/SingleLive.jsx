import PropTypes from 'prop-types';
import MatchBoard from '../../components/MatchBoard/MatchBoard';
import Notification from '../../components/Notification/Notification';
import SingleBets from '../../components/SingleBets/SingleBets';
import SingleSportSkeleton from './SingleSport.skeleton';
import {
  SingleSport__styled,
  SingleSportTracker__styled,
} from './SingleSport.styled';
import { useTheme } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import GameSearchContainer from '../../../components/GameSearchContainer/GameSearchContainer';
import MatchTrackerContainer from '../../../components/MatchTrackerContainer/MatchTrackerContainer';

const SingleLive = ({
  event,
  isLoading,
  onOddClick,
  betslip = {},
  favouriteMarkets,
  onMarketFavourite,
}) => {
  if (!event) {
    return isLoading ? (
      <SingleSportSkeleton />
    ) : (
      <Notification text="The event has ended" />
    );
  }
  const {
    id: eventId,
    s: sportId,
    t1 = {},
    t2 = {},
    sc = {},
    singleMarkets,
    inf,
  } = event;
  const { mode } = useTheme();
  const starsBetTheme = mode === 'starsBet';
  const isMobile = useMediaQuery('only screen and (max-width: 800px)');
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');

  const onOdd = (odd, market) => {
    onOddClick({
      ...odd,
      eventId,
      T1: t1.n,
      T2: t2.n,
      marketName: market.n,
      marketCode: market.code,
      isLive: true,
    });
  };

  return (
    <SingleSport__styled>
      {isMobile && starsBetTheme && <GameSearchContainer />}
      <MatchBoard
        isLive
        T1={t1.n}
        T1I={t1.kit?.id}
        T2={t2.n}
        T2I={t2.kit?.id}
        league={inf}
        sportId={sportId}
        goals={sc.GOAL || sc.T || []}
        time={Math.ceil(event.tm / 60)}
        period={event.pn}
      />
      {isTablet && (
        <SingleSportTracker__styled>
          <MatchTrackerContainer />
        </SingleSportTracker__styled>
      )}
      <SingleBets
        isLive
        onOddClick={onOdd}
        groups={singleMarkets}
        betslip={betslip}
        sportId={sportId}
        favouriteMarkets={favouriteMarkets}
        onMarketFavourite={onMarketFavourite}
      />
    </SingleSport__styled>
  );
};

SingleLive.propTypes = {
  event: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default SingleLive;
