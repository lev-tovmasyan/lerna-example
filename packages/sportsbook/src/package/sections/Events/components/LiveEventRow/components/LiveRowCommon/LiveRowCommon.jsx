import React from 'react';
import { EventRowCommon__styled } from '../../../../../../components/EventRow/EventRow.styled';
import Notification from '../../../../../../components/Notification/Notification';
import SingleBets from '../../../../../../components/SingleBets/SingleBets';

const LiveRowCommon = ({
  betslip,
  onOdd,
  marketsGroup,
  sportId,
  onMarketFavourite,
  favouriteMarkets,
}) => {
  if (!Object.keys(marketsGroup).length) {
    return <Notification text="No markets at the moment" />;
  }
  return (
    <EventRowCommon__styled>
      <SingleBets
        isLive
        groups={marketsGroup}
        onOddClick={onOdd}
        betslip={betslip}
        sportId={sportId}
        favouriteMarkets={favouriteMarkets}
        onMarketFavourite={onMarketFavourite}
      />
    </EventRowCommon__styled>
  );
};

export default LiveRowCommon;
