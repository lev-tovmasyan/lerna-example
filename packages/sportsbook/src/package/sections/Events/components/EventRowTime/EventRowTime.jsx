import React, { memo } from 'react';
import { EventRowTime__styled } from '../../../../components/EventRow/EventRow.styled';

const EventRowTime = ({ period, time }) => {
  return (
    <EventRowTime__styled>
      {period}
      {period && !!time && ' - '}
      {!!time && `${time}'`}
    </EventRowTime__styled>
  );
};

export default memo(EventRowTime);
