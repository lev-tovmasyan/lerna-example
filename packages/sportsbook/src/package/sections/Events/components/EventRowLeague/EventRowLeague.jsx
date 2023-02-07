import React, { memo } from 'react';
import { EventRowLigueName__styled } from '../../../../components/EventRow/EventRow.styled';

const EventRowLeague = ({ info }) => {
  return (
    <EventRowLigueName__styled title={info}>{info}</EventRowLigueName__styled>
  );
};

export default memo(EventRowLeague);
