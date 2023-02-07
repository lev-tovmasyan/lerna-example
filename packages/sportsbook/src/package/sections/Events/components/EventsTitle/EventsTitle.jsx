import { memo } from 'react';
import { EventsTitle__styled } from '../../Events.styled';

const EventsTitle = ({ title }) => {
  return <EventsTitle__styled>{title}</EventsTitle__styled>;
};

export default memo(EventsTitle);
