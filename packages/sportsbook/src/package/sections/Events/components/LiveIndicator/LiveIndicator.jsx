import React, { memo } from 'react';
import { EventRowLive__styled } from '../../../../components/EventRow/EventRow.styled';

const LiveIndicator = () => {
  return <EventRowLive__styled>Live</EventRowLive__styled>;
};

export default memo(LiveIndicator);
