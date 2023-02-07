import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import qs from 'qs';
import Tabs from '../../../../package/components/Tabs/Tabs';
import MarketTypes from '../../../../package/sections/MarketTypes/MarketTypes';
import { TreeTabs__styled } from '../../Tree.styled';
import MatchOddsEvents from './components/MatchOddsEvents/MatchOddsEvents';
import {
  resetTree,
  selectSportsCountries,
  selectSportsGroups,
  selectTree,
  selectTreeExistMarkets,
  selectTreeGroup,
  selectTreeMarket,
  selectTreeRequestCount,
  setTreeGroup,
  setTreeMarket,
} from '../../../../redux/reducers/sportsbook/sportsbook.slice';
import { getTreeEventsThunk } from '../../../../redux/reducers/sportsbook/sportsbook.thunk';

const MatchOdds = () => {
  const dispatch = useDispatch();
  const { leagues, sportId } = useParams();

  const sportGroups = useSelector(selectSportsGroups);
  const sportCountries = useSelector(selectSportsCountries);
  const existMarkets = useSelector(selectTreeExistMarkets);
  const activeGroup = useSelector(selectTreeGroup);
  const activeMarket = useSelector(selectTreeMarket);
  const requestCount = useSelector(selectTreeRequestCount);
  const { events, date } = useSelector(selectTree);

  const isEventExist = !!events.length;

  const tabs = useMemo(
    () =>
      Object.keys(existMarkets).map(name => ({
        name,
        cb() {
          dispatch(setTreeGroup(name));
        },
      })),
    [existMarkets],
  );

  const groupMarkets = existMarkets[activeGroup]?.markets;

  const leaguesList = useMemo(() => {
    if (!Object.keys(sportCountries).length) {
      return null;
    }
    if (leagues === 'all') {
      return ['all'];
    }
    return Object.values(
      qs.parse(leagues, {
        decoder: value => value.split(','),
      }),
    );
  }, [leagues, sportId, sportGroups, sportCountries]);

  useEffect(() => {
    if (leaguesList) {
      dispatch(getTreeEventsThunk({ sportId, leaguesList, date }));
    }
  }, [sportId, leaguesList, requestCount, date]);

  useEffect(() => () => dispatch(resetTree({ isDate: true })), [date]);
  useEffect(() => () => dispatch(resetTree()), [sportId, leagues]);

  const onMarketClick = market => {
    dispatch(setTreeMarket(market));
  };

  return (
    <>
      {isEventExist && (
        <TreeTabs__styled>
          <Tabs tabs={tabs} activeName={activeGroup} />
        </TreeTabs__styled>
      )}
      {isEventExist && (
        <MarketTypes
          markets={groupMarkets}
          activeMarketCode={activeMarket?.code}
          onMarketClick={onMarketClick}
        />
      )}
      <MatchOddsEvents activeMarket={activeMarket || {}} events={events} />
    </>
  );
};

export default MatchOdds;
