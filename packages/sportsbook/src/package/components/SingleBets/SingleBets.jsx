import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import Market from '../Market/Market';
import Notification from '../Notification/Notification';
import Tabs from '../Tabs/Tabs';
import SingleBetsSkeleton from './SingleBets.skeleton';
import {
  SingleBets__styled,
  SingleBetsBody__styled,
  SingleBetsItem__styled,
  SingleBetsTabs__styled,
} from './SingleBets.styled';
import { useMemo } from 'react';
import {
  MARKETS_GROUPS,
  MARKET_BY_CODE,
} from '../../../constants/sports.constants';

const SingleBets = ({
  sportId,
  groups = {},
  onOddClick,
  isLoading,
  betslip = {},
  favouriteMarkets = {},
  onMarketFavourite = () => {},
}) => {
  if (isLoading) {
    return <SingleBetsSkeleton />;
  }

  const { t } = useTranslation('markets');

  const marketsGroups = useMemo(
    () => MARKETS_GROUPS[sportId]?.groups || [],
    [sportId],
  );

  const existGroups = useMemo(() => {
    if (!marketsGroups.length) {
      return {
        Main: {
          code: 'MAIN',
          id: 12,
          name: 'Main',
          markets: Object.values(groups).map(item => item[0]),
        },
      };
    }
    const allMarkets = {};
    let firstType = '';
    const filteredGroups = marketsGroups.reduce((acc, b) => {
      const filteredMarkets = b.markets.filter(market => {
        allMarkets[market.code] = true;
        return groups[market.code];
      });

      if (filteredMarkets.length) {
        if (!firstType) {
          firstType = b.name;
        }
        acc[b.name] = { ...b, markets: filteredMarkets };
      }
      return acc;
    }, {});

    // ADD UNUSED MARKETS
    Object.keys(groups).forEach(item => {
      if (!allMarkets[item] && filteredGroups[firstType]) {
        filteredGroups[firstType].markets.push(groups[item][0]);
      }
    });
    return filteredGroups;
  }, [marketsGroups, groups]);

  const [activeType, setActiveType] = useState(Object.keys(existGroups)[0]);

  useEffect(() => {
    const groupsKeys = Object.keys(existGroups);
    if (groupsKeys.length && !groupsKeys.includes(activeType)) {
      setActiveType(groupsKeys[0]);
    }
  }, [existGroups, activeType]);

  const tabs = useMemo(
    () =>
      Object.values(existGroups).map(group => ({
        name: t(group.name),
        cb: () => setActiveType(group.name),
      })),
    [existGroups],
  );

  const currentGroup = existGroups[activeType];
  const currentGroupMarkets = currentGroup?.markets;

  // const localMarkets = marketsBySports[sportId]?.markets;

  // const marketsNames = useMemo(() => {
  //   if (!isLive || !localMarkets || !localMarkets.length) {
  //     return Object.keys(groups);
  //   }
  //   return localMarkets.map(market => market.code).filter(code => groups[code]);
  // }, [localMarkets, groups]);

  const sortedMarkets = useMemo(() => {
    if (!currentGroupMarkets?.length) {
      return [];
    }
    if (!Object.keys(favouriteMarkets).length) {
      return currentGroupMarkets;
    }
    return [...currentGroupMarkets].sort(
      (a, b) => (b.code in favouriteMarkets) - (a.code in favouriteMarkets),
    );
  }, [currentGroupMarkets, favouriteMarkets]);

  if (!currentGroupMarkets?.length) {
    return <Notification text="No Markets at the moment" />;
  }

  return (
    <SingleBets__styled>
      <SingleBetsTabs__styled>
        <Tabs tabs={tabs} activeName={activeType} />
      </SingleBetsTabs__styled>
      <SingleBetsBody__styled>
        {/* {Array.from(Array(20), (_, i) => ( */}
        <SingleBetsItem__styled
        // ref={activeSingleBetItem}
        // key={i}
        // active={activeItem === i}
        >
          {sortedMarkets.map(({ code }, i) => {
            const currentMarkets = groups[code];
            if (!currentMarkets[0]?.market?.ns && !MARKET_BY_CODE[code]) {
              return null;
            }

            return (
              <ExpansionPanel
                key={code}
                name={t(code)}
                isOpen={i < 5}
                isFavourite={code in favouriteMarkets}
                onFavourite={() => onMarketFavourite(code)}>
                {currentMarkets?.map(market => {
                  return (
                    <Market
                      key={(market.key || market.id) + (market.h || '0')}
                      market={market}
                      onOddClick={onOddClick}
                      betslip={betslip}
                    />
                  );
                })}
              </ExpansionPanel>
            );
          })}
        </SingleBetsItem__styled>
        {/* ))} */}
      </SingleBetsBody__styled>
    </SingleBets__styled>
  );
};

export default SingleBets;
