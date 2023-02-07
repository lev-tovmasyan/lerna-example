import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetUpcomingSlice,
  selectIsUpcomingLoading,
  selectUpcomingActiveSportId,
  selectUpcomingEvents,
  toggleUpcomingSport,
} from '../../redux/reducers/upcoming/upcoming.slice';
import {
  getUpcomingEventsThunk,
  getUpcomingSingleThunk,
} from '../../redux/reducers/upcoming/upcoming.thunk';
import { useMemo } from 'react';
import { useCallback } from 'react';
import EventsContainer from '../EventsContainer/EventsContainer';

const Upcoming = ({ title, withTabs, sportId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const upcomingSportId = useSelector(selectUpcomingActiveSportId);
  const isLoading = useSelector(selectIsUpcomingLoading);
  const events = useSelector(selectUpcomingEvents);
  const activeSportId = sportId || upcomingSportId;

  useEffect(() => {
    dispatch(getUpcomingEventsThunk({ sId: activeSportId, limit: 10 }));
  }, [activeSportId]);

  const toggleSport = id => {
    dispatch(toggleUpcomingSport(id));
  };

  const onEventClick = event => {
    console.log('event', event);
    navigate(`/event/${event.id}`, { relative: 'route' });
  };

  const onViewAllClick = useCallback(() => {
    navigate(`/all-events/upcoming/${activeSportId}`);
  }, [activeSportId]);

  const onOpenSingle = id => {
    dispatch(getUpcomingSingleThunk(id));
  };

  const tabs = useMemo(
    () =>
      withTabs
        ? [
            { id: 50, name: 'Football', cb: () => toggleSport(50) },
            { id: 52, name: 'Tennis', cb: () => toggleSport(52) },
            { id: 53, name: 'Basketball', cb: () => toggleSport(53) },
            { id: 51, name: 'Ice Hockey', cb: () => toggleSport(51) },
            { id: 54, name: 'Volleyball', cb: () => toggleSport(54) },
            { id: 70, name: 'Table Tennis', cb: () => toggleSport(70) },
            { id: 56, name: 'Baseball', cb: () => toggleSport(56) },
            { id: 'others', name: 'Others', cb: () => toggleSport('others') },
          ]
        : [],
    [navigate, withTabs],
  );

  useEffect(() => () => dispatch(resetUpcomingSlice()), []);

  return (
    <EventsContainer
      title={title}
      tabsWithIcon
      isLoading={isLoading}
      tabs={tabs}
      events={events}
      activeSportId={activeSportId}
      onEventClick={onEventClick}
      onViewAllClick={onViewAllClick}
      onOpenSingle={onOpenSingle}
    />
  );
};

export default Upcoming;
