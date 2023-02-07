import { useMediaQuery } from '@react-hook/media-query';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import BetTypes from '../../../components/BetTypes/BetTypes';
import {
  MARKETS_TYPES_COUNT_BY_BREAKPOINT,
  MARKET_TYPES,
  SPORTS_MARKETS_TYPES,
} from '../../../constants/sports.constants';
import EventRowSkeleton from '../../components/EventRow/EventRow.skeleton';
import Notification from '../../components/Notification/Notification';
import Tabs from '../../components/Tabs/Tabs';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';
import Skeleton from '../../components/UI/Skeleton/Skeleton';
import { LOADING_ITEMS_SHORT, swapArrayPositions } from '../../helpers/utils';
import EventsByLeague from './components/EventsByLeague/EventsByLeague';
import EventsByTime from './components/EventsByTime/EventsByTime';
import EventsList from './components/EventsList/EventsList';
import { EventsContext } from './events.context';
import {
  Events__styled,
  EventsBetTypes__styled,
  EventsBody__styled,
  EventsFilter__styled,
  EventsFooter__styled,
  EventsHead__styled,
  EventsSport__styled,
  EventsTitle__styled,
  EventsViewAll__styled,
} from './Events.styled';
import {
  getGroupedEventsByLeague,
  getGroupedEventsByDate,
} from './helpers/events.helpers';

const Events = ({
  isLoading,
  isOddsLoading,
  title,
  tabs = [],
  isGroup,
  activeSportId,
  events = [],
  onEventClick,
  onOddClick,
  onViewAllClick,
  onOpenSingle,
  market,
  betslip = {},
  favouriteMarkets,
  onMarketFavourite,
}) => {
  const activeSportName = tabs.find(tab => tab.id === activeSportId)?.name;
  const isOthers = activeSportId === 'others';
  if (!isLoading && !events.length) {
    return (
      <Events__styled>
        <EventsHead__styled>
          {title && <EventsTitle__styled>{title}</EventsTitle__styled>}
          {!!tabs.length && (
            <EventsSport__styled>
              <Tabs tabs={tabs} withIcon activeName={activeSportName} />
            </EventsSport__styled>
          )}
          <Notification />
        </EventsHead__styled>
      </Events__styled>
    );
  }

  const [marketsTypes, setMarketsTypes] = useState([]);
  const [marketsOptions, setMarketsOptions] = useState([]);
  const [isSortByLeague, setIsSortByLeague] = useState(true);

  const sortTabs = useMemo(
    () => [
      { name: 'By League', cb: () => setIsSortByLeague(true) },
      { name: 'By Time', cb: () => setIsSortByLeague(false) },
    ],
    [setIsSortByLeague],
  );

  const marketsCount = getMarketsCount();

  useEffect(() => {
    const types = market ? [market] : SPORTS_MARKETS_TYPES[activeSportId];
    if (types) {
      setMarketsTypes(types);
      setMarketsOptions(types.map(item => item.name));
    }
  }, [market, activeSportId]);

  const visibleMarketsTypes = useMemo(() => {
    if (!setMarketsTypes.length) {
      return [];
    }
    return marketsTypes.slice(0, marketsCount);
  }, [marketsCount, marketsTypes]);

  const changeMarketOrders = (value, index) => {
    const copyMarkets = [...marketsTypes];
    const prevIndex = copyMarkets.findIndex(item => item.name === value);
    swapArrayPositions(copyMarkets, index, prevIndex);
    setMarketsTypes(copyMarkets);
  };

  const changeGlobalHandicap = (value, code) => {
    const copyMarkets = [...marketsTypes];
    const marketIndex = copyMarkets.findIndex(item => item.code === code);
    copyMarkets[marketIndex].handicapValue = value;
    setMarketsTypes(copyMarkets);
  };

  const eventsByLeague = useMemo(() => {
    if (!isGroup) {
      return [];
    }
    const leaguesGroup = getGroupedEventsByLeague(events);
    return Object.values(leaguesGroup);
  }, [isGroup, events]);

  const eventsByTime = useMemo(() => {
    if (!isGroup) {
      return {};
    }
    const datesGroup = getGroupedEventsByDate(events);
    return datesGroup;
  }, [isGroup, events]);

  return (
    <EventsContext.Provider
      value={{
        isLoading,
        isOddsLoading,
        tabs,
        activeSportId,
        events,
        onEventClick,
        onOddClick,
        onViewAllClick,
        onOpenSingle,
        visibleMarketsTypes,
        betslip,
        isOthers,
      }}>
      <Events__styled>
        <EventsHead__styled>
          {title && <EventsTitle__styled>{title}</EventsTitle__styled>}
          {isGroup && (
            <EventsSport__styled>
              <Tabs
                tabs={sortTabs}
                activeName={isSortByLeague ? 'By League' : 'By Time'}
              />
            </EventsSport__styled>
          )}
          {!!tabs.length && (
            <EventsSport__styled>
              <Tabs tabs={tabs} withIcon activeName={activeSportName} />
            </EventsSport__styled>
          )}
          {!isLoading && (
            <EventsFilter__styled>
              {visibleMarketsTypes.map((type, i) => (
                <EventsBetTypes__styled key={i}>
                  <Select
                    value={type.name}
                    options={marketsOptions}
                    onChange={(_, nextI) =>
                      changeMarketOrders(marketsOptions[nextI], i)
                    }
                  />
                  {type.type !== MARKET_TYPES.SELECT && (
                    <BetTypes
                      data={type}
                      changeGlobalHandicap={changeGlobalHandicap}
                    />
                  )}
                </EventsBetTypes__styled>
              ))}
            </EventsFilter__styled>
          )}
        </EventsHead__styled>
        <EventsBody__styled>
          {isLoading &&
            LOADING_ITEMS_SHORT.map((_, i) => <EventRowSkeleton key={i} />)}
          {!isLoading &&
            isGroup &&
            (isSortByLeague ? (
              <EventsByLeague
                eventsByLeague={eventsByLeague}
                betslip={betslip}
                favouriteMarkets={favouriteMarkets}
                onMarketFavourite={onMarketFavourite}
              />
            ) : (
              <EventsByTime
                eventsByTime={eventsByTime}
                betslip={betslip}
                favouriteMarkets={favouriteMarkets}
                onMarketFavourite={onMarketFavourite}
              />
            ))}
          {!isLoading && !isGroup && (
            <EventsList
              events={events}
              betslip={betslip}
              favouriteMarkets={favouriteMarkets}
              onMarketFavourite={onMarketFavourite}
            />
          )}
        </EventsBody__styled>
        {onViewAllClick && !isOthers && (
          <EventsFooter__styled>
            <EventsViewAll__styled skeleton={isLoading}>
              {isLoading ? (
                <Skeleton radius="0.375rem" />
              ) : (
                <Button onClick={onViewAllClick} text={'VIEW ALL EVENTS'} />
              )}
            </EventsViewAll__styled>
          </EventsFooter__styled>
        )}
      </Events__styled>
    </EventsContext.Provider>
  );

  // @media only screen and (max-width: 600px) and (min-width: 400px)  {...}

  function getMarketsCount() {
    const breakpoints = {
      xxl: useMediaQuery('only screen and (min-width: 2040px)'),
      xl: useMediaQuery(
        'only screen and (min-width: 1770px) and (max-width: 2039px)',
      ),
      l: useMediaQuery(
        'only screen and (min-width: 1620px) and (max-width: 1769px)',
      ),
      m: useMediaQuery(
        'only screen and (min-width: 1320px) and (max-width: 1619px)',
      ),
      s: useMediaQuery(
        'only screen and (min-width: 1024px) and (max-width: 1319px)',
      ),
      xs: useMediaQuery(
        'only screen and (min-width: 920px) and (max-width: 1023px)',
      ),
      xxs: useMediaQuery(
        'only screen and (min-width: 800px) and (max-width: 919px)',
      ),
      smallTab: useMediaQuery(
        'only screen and (min-width: 700px) and (max-width: 799px)',
      ),
      mobile: useMediaQuery('only screen and (max-width: 699px)'),
    };

    const currentSize =
      Object.keys(breakpoints).find(size => breakpoints[size]) || 'xs';
    return MARKETS_TYPES_COUNT_BY_BREAKPOINT[currentSize];
  }
};

Events.propTypes = {
  isLoading: PropTypes.bool,
  isOddsLoading: PropTypes.bool,
  title: PropTypes.string,
  events: PropTypes.array,
  tabs: PropTypes.array,
  isGroup: PropTypes.bool,
  activeSportId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEventClick: PropTypes.func,
  onOddClick: PropTypes.func,
  market: PropTypes.object,
  betslip: PropTypes.object,
  favouriteMarkets: PropTypes.object,
  onMarketFavourite: PropTypes.func,
};

export default Events;
