import React, { memo } from 'react';
import Button from '../../../../components/UI/Button/Button';
import Skeleton from '../../../../components/UI/Skeleton/Skeleton';
import {
  EventsFooter__styled,
  EventsViewAll__styled,
} from '../../Events.styled';

const EventsFooter = ({ isLoading, onViewAllClick }) => {
  return (
    <EventsFooter__styled>
      <EventsViewAll__styled skeleton={isLoading}>
        {isLoading ? (
          <Skeleton radius="0.375rem" />
        ) : (
          <Button onClick={onViewAllClick} text={'VIEW ALL EVENTS'} />
        )}
      </EventsViewAll__styled>
    </EventsFooter__styled>
  );
};

export default memo(EventsFooter);
