import React, { memo } from 'react';
import LiveEventRow from '../LiveEventRow/LiveEventRow';

const LiveEventsList = ({
  eventsIds,
  events,
  visibleMarketsTypes,
  onOddClick,
  betslip,
  onEventClick,
  favouriteMarkets,
  onMarketFavourite,
}) => {
  return (
    <div>
      {eventsIds.map(id => {
        const event = events[id];
        if (!event || !event.t1) {
          return null;
        }
        return (
          <LiveEventRow
            key={id}
            event={event}
            visibleMarketsTypes={visibleMarketsTypes}
            onOddClick={onOddClick}
            betslip={betslip}
            onEventClick={onEventClick}
            favouriteMarkets={favouriteMarkets}
            onMarketFavourite={onMarketFavourite}
          />
        );
      })}
    </div>
  );
};

export default memo(LiveEventsList);
