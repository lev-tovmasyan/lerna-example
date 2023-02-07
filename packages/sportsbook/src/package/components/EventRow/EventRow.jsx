import React, { useState } from 'react';
import {
  EventRow__styled,
  EventRowAction__styled,
  EventRowBet__styled,
  EventRowCommon__styled,
  EventRowCountryFlag__styled,
  EventRowDetails__styled,
  // EventRowFavourite__styled,
  EventRowInfo__styled,
  EventRowLigueName__styled,
  EventRowMain__styled,
  EventRowMore__styled,
  EventRowMoreAction__styled,
  EventRowOdds__styled,
  EventRowSport__styled,
  EventRowTeam__styled,
  EventRowTeamName__styled,
  EventRowTeams__styled,
  EventRowTime__styled,
  EventRowStatistic__styled,
  EventRowStatisticSvg__styled,
  EventRowSportIconWrapper,
  EventRowSportIcon__styled,
  EventRowSportSvg__styled,
} from './EventRow.styled';

import Button from '../UI/Button/Button';
import Odds from '../Odds/Odds';
import Flag from '../UI/Flag/Flag';
import dayjs from 'dayjs';
import SingleBets from '../SingleBets/SingleBets';
import { useMediaQuery } from '@react-hook/media-query';
import { formatEvent } from '../../helpers/utils';
import OddsSkeleton from '../Odds/Odds.skeleton';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../../redux/reducers/popups/popups.slice';
import { POPUPS_IDS } from '../Popups/configs/popup.configs';
import sportsSprite from '../../assets/images/sprites/sportsSprite.svg';
import { useEvents } from '../../sections/Events/events.context';
// import { useTheme } from 'styled-components';

const EventRow = ({
  event,
  betslip,
  onMarketFavourite,
  favouriteMarkets,
  simple,
}) => {
  const dispatch = useDispatch();
  const {
    onEventClick,
    onOddClick,
    visibleMarketsTypes,
    onOpenSingle,
    isOddsLoading,
    isOthers,
  } = useEvents() || {};
  const [openCommon, setOpenCommon] = useState(false);

  const formatedEvent = formatEvent(event);

  const {
    id: eventId,
    countryName,
    leagueName,
    name,
    countryId,
    info,
    startDate,
    marketsGroup,
    isSingleLoading,
    singleEvent,
    sportId,
  } = formatedEvent;

  const { T1, T2 } = info;

  const openSingle = () => {
    if (!openCommon && !isSingleLoading && !singleEvent) {
      onOpenSingle(eventId);
    }
    setOpenCommon(prev => !prev);
  };
  // const [favorite, setFavorite] = useState(false);
  // const { mode } = useTheme();
  // const starsBetTheme = mode === 'starsBet';
  const isMobile = useMediaQuery('only screen and (max-width: 600px)');
  const onOdd = (odd, market) => {
    if (!odd.name) {
      odd.name = odd.n || odd.priceName;
    }
    onOddClick({
      ...odd,
      eventId,
      T1,
      T2,
      marketName: market.name,
      marketCode: market.code,
    });
  };

  const openStatistic = e => {
    e.stopPropagation();
    dispatch(
      openPopup({ id: POPUPS_IDS.STATISTIC, eventId, team1: T1, team2: T2 }),
    );
  };

  return (
    <EventRow__styled>
      <EventRowMain__styled>
        {isOthers && (
          <EventRowSportIconWrapper>
            <EventRowSportIcon__styled>
              <EventRowSportSvg__styled>
                <use xlinkHref={`${sportsSprite}#${sportId}`} />
              </EventRowSportSvg__styled>
            </EventRowSportIcon__styled>
          </EventRowSportIconWrapper>
        )}
        {/* {!isMobileM && !simple && (
          <EventRowCode__styled>
            <EventRowCodeNum__styled>{eventId}</EventRowCodeNum__styled>
          </EventRowCode__styled>
        )} */}
        <EventRowInfo__styled onClick={() => onEventClick(event)}>
          <EventRowDetails__styled>
            {/* <EventRowFavourite__styled onClick={e => e.stopPropagation()}>
              <Button
                onClick={() => setFavorite(prevState => !prevState)}
                icon={favorite ? 'star' : 'starEmpty'}
                fill={
                  starsBetTheme
                    ? favorite
                      ? '#e8b116'
                      : '#000000'
                    : 'var(--color-active)'
                }
              />
            </EventRowFavourite__styled> */}
            {/* <EventRowLive__styled>Live</EventRowLive__styled> */}
            <EventRowTime__styled>
              {dayjs(startDate).format('DD/MM')} <span />
              {dayjs(startDate).format('HH:mm')}
            </EventRowTime__styled>
            <EventRowCountryFlag__styled>
              <Flag id={countryId} />
            </EventRowCountryFlag__styled>
            <EventRowLigueName__styled
              title={`${leagueName || name} ${countryName}`}>
              {leagueName || name} <span /> {countryName}
            </EventRowLigueName__styled>
          </EventRowDetails__styled>
          <EventRowBet__styled>
            <EventRowSport__styled>
              <EventRowTeams__styled>
                <EventRowTeam__styled>
                  {/* <EventRowScore__styled>1</EventRowScore__styled> */}
                  <EventRowTeamName__styled>{T1}</EventRowTeamName__styled>
                </EventRowTeam__styled>
                <EventRowTeam__styled>
                  {/* <EventRowScore__styled>1</EventRowScore__styled> */}
                  <EventRowTeamName__styled>{T2}</EventRowTeamName__styled>
                </EventRowTeam__styled>
              </EventRowTeams__styled>
              {sportId === 50 && (
                <EventRowStatistic__styled onClick={openStatistic}>
                  <EventRowStatisticSvg__styled>
                    <use xlinkHref="#chart" />
                  </EventRowStatisticSvg__styled>
                </EventRowStatistic__styled>
              )}
              {isMobile && !simple && (
                <EventRowMore__styled onClick={e => e.stopPropagation()}>
                  {/* <EventRowMoreAction__styled>
                  <Button icon={'plus'} />
                </EventRowMoreAction__styled> */}
                  <EventRowMoreAction__styled open={openCommon}>
                    <Button onClick={openSingle} icon={'down'} />
                  </EventRowMoreAction__styled>
                </EventRowMore__styled>
              )}
            </EventRowSport__styled>
            {!simple && (
              <EventRowAction__styled onClick={e => e.stopPropagation()}>
                {isOddsLoading ? (
                  <EventRowOdds__styled>
                    <OddsSkeleton count={2} />
                  </EventRowOdds__styled>
                ) : (
                  visibleMarketsTypes.map((type, i) => (
                    <EventRowOdds__styled key={i}>
                      <Odds
                        data={type}
                        onOddClick={onOdd}
                        market={marketsGroup[type.code] || {}}
                        betslip={betslip}
                      />
                    </EventRowOdds__styled>
                  ))
                )}
                {!isMobile && (
                  <EventRowMore__styled>
                    {/* <EventRowMoreAction__styled>
                  <Button icon={'plus'} />
                </EventRowMoreAction__styled> */}
                    <EventRowMoreAction__styled open={openCommon}>
                      <Button onClick={openSingle} icon={'down'} />
                    </EventRowMoreAction__styled>
                  </EventRowMore__styled>
                )}
              </EventRowAction__styled>
            )}
          </EventRowBet__styled>
        </EventRowInfo__styled>
      </EventRowMain__styled>
      {openCommon && (
        <EventRowCommon__styled>
          <SingleBets
            isLoading={isSingleLoading}
            markets={singleEvent?.markets || []}
            groups={singleEvent?.marketsGroup || {}}
            onOddClick={onOdd}
            betslip={betslip}
            sportId={sportId}
            favouriteMarkets={favouriteMarkets}
            onMarketFavourite={onMarketFavourite}
          />
        </EventRowCommon__styled>
      )}
    </EventRow__styled>
  );
};

export default EventRow;
