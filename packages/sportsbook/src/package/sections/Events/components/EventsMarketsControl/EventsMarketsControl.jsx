import React, { memo } from 'react';
import BetTypes from '../../../../../components/BetTypes/BetTypes';
import { MARKET_TYPES } from '../../../../../constants/sports.constants';
import Select from '../../../../components/UI/Select/Select';
import { swapArrayPositions } from '../../../../helpers/utils';
import {
  EventsBetTypes__styled,
  EventsFilter__styled,
} from '../../Events.styled';

const EventsMarketsControl = ({
  marketsOptions,
  visibleMarketsTypes,
  setMarketsTypes,
}) => {
  const changeMarketOrders = (value, index) => {
    setMarketsTypes(prev => {
      const copyMarkets = [...prev];
      const prevIndex = copyMarkets.findIndex(item => item.name === value);
      swapArrayPositions(copyMarkets, index, prevIndex);
      return copyMarkets;
    });
  };

  const changeGlobalHandicap = (value, code) => {
    setMarketsTypes(prev => {
      const copyMarkets = [...prev];
      const marketIndex = copyMarkets.findIndex(item => item.code === code);
      copyMarkets[marketIndex].handicapValue = value;
      return copyMarkets;
    });
  };

  return (
    <EventsFilter__styled>
      {visibleMarketsTypes.map((type, i) => (
        <EventsBetTypes__styled key={type.code}>
          <Select
            value={type.name}
            options={marketsOptions}
            onChange={(_, nextI) =>
              changeMarketOrders(marketsOptions[nextI], i)
            }
          />
          {type.type !== MARKET_TYPES.SELECT && (
            <BetTypes data={type} changeGlobalHandicap={changeGlobalHandicap} />
          )}
        </EventsBetTypes__styled>
      ))}
    </EventsFilter__styled>
  );
};

export default memo(EventsMarketsControl);
