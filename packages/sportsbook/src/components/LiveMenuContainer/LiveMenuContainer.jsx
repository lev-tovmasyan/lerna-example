import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LiveMenu from '../../package/sections/Menu/LiveMenu';
import {
  selectIsLiveLoading,
  selectLiveEvents,
  selectLiveGroups,
} from '../../redux/reducers/live/live.slice';

const LiveMenuContainer = () => {
  const navigate = useNavigate();
  const sports = useSelector(selectLiveGroups);
  const isLoading = useSelector(selectIsLiveLoading);
  const events = useSelector(selectLiveEvents);

  const onEventClick = useCallback(
    eventId => {
      navigate(`/live-event/${eventId}`);
    },
    [navigate],
  );

  return (
    <LiveMenu
      sports={sports}
      isLoading={isLoading}
      events={events}
      onEventClick={onEventClick}
    />
  );
};

export default LiveMenuContainer;
