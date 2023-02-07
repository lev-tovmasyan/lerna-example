import React, { memo, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import LiveRowCommon from './components/LiveRowCommon/LiveRowCommon';
import LiveRowMain from './components/LiveRowMain/LiveRowMain';
import LiveRowWrapper from './components/LiveRowWrapper/LiveRowWrapper';
import EventRowInfoWrapper from '../EventRowInfoWrapper/EventRowInfoWrapper';
import EventRowDetails from '../EventRowDetails/EventRowDetails';
// import EventRowFavourite from '../EventRowFavourite/EventRowFavourite';
import LiveIndicator from '../LiveIndicator/LiveIndicator';
import EventRowTime from '../EventRowTime/EventRowTime';
import EventRowFLag from '../EventRowFlag/EventRowFLag';
import EventRowLeague from '../EventRowLeague/EventRowLeague';
import EventRowBottom from '../../../../components/EventRowBottom/EventRowBottom';
import EventRowTeamsWrapper from '../EventRowTeamsWrapper/EventRowTeamsWrapper';
import EventRowTeams from '../EventRowTeams/EventRowTeams';
import EventRowMore from '../EventRowMore/EventRowMore';
import EventRowActions from '../EventRowActions/EventRowActions';
import EventRowOdds from '../EventRowOdds/EventRowOdds';
// import EventRowStatistic from '../EventRowStatistic/EventRowStatistic';

const LiveEventRow = ({
  event,
  visibleMarketsTypes,
  onOddClick,
  betslip,
  onEventClick,
  onMarketFavourite,
  favouriteMarkets,
  simple,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    id: eventId,
    t1 = {},
    t2 = {},
    sc = {},
    marketsGroup,
    singleMarkets = {},
  } = event;

  const { GOAL, T } = sc;

  const isMobile = useMediaQuery('only screen and (max-width: 600px)');

  const onOdd = (odd, market) => {
    onOddClick({
      ...odd,
      eventId,
      T1: t1.n,
      T2: t2.n,
      marketName: market.name,
      marketCode: market.code,
    });
  };

  const score = GOAL || T || [0, 0];

  return (
    <LiveRowWrapper>
      <LiveRowMain>
        {/* {!isMobileM && !simple && <EventRowId id={event.id} />} */}
        <EventRowInfoWrapper onClick={() => onEventClick(event.id)}>
          <EventRowDetails>
            {/* <EventRowFavourite /> */}
            <LiveIndicator />
            <EventRowTime period={event.pn} time={Math.ceil(event.tm / 60)} />
            <EventRowFLag countryId={event.c} />
            <EventRowLeague info={event.inf} />
          </EventRowDetails>
          <EventRowBottom>
            <EventRowTeamsWrapper>
              <EventRowTeams
                T1={t1.n}
                T2={t2.n}
                score1={score[0]}
                score2={score[1]}
              />
              {/* <EventRowStatistic eventId={event.id} team1={t1.n} team2={t2.n} /> */}
              {isMobile && !simple && (
                <EventRowMore isOpen={isOpen} setIsOpen={setIsOpen} />
              )}
            </EventRowTeamsWrapper>
            {!simple && (
              <EventRowActions onClick={e => e.stopPropagation()}>
                <EventRowOdds
                  visibleMarketsTypes={visibleMarketsTypes}
                  marketsGroup={marketsGroup}
                  onOdd={onOdd}
                  betslip={betslip}
                />
                {!isMobile && (
                  <EventRowMore isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
              </EventRowActions>
            )}
          </EventRowBottom>
        </EventRowInfoWrapper>
      </LiveRowMain>
      {isOpen && (
        <LiveRowCommon
          marketsGroup={singleMarkets}
          onOdd={onOdd}
          betslip={betslip}
          sportId={event.s}
          favouriteMarkets={favouriteMarkets}
          onMarketFavourite={onMarketFavourite}
        />
      )}
    </LiveRowWrapper>
  );
};

export default memo(LiveEventRow);
