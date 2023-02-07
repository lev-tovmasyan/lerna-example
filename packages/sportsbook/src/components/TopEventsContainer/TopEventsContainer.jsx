import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useCallback } from 'react';
import {
  getTopEventsThunk,
  getTopSingleThunk,
} from '../../redux/reducers/topEvents/topEvents.thunk';
import {
  resetTopEventsSlice,
  selectIsTopEventsLoading,
  selectTopEvents,
  selectTopEventsActiveSportId,
  toggleTopEventsSport,
} from '../../redux/reducers/topEvents/topEvents.slice';
import EventsContainer from '../EventsContainer/EventsContainer';

const TopEventsContainer = ({ title, withTabs, sportId, isHome }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const upcomingSportId = useSelector(selectTopEventsActiveSportId);
  const isLoading = useSelector(selectIsTopEventsLoading);
  const events = useSelector(selectTopEvents);

  const eventsList = isHome ? events.slice(0, 10) : events;

  const activeSportId = sportId || upcomingSportId;

  useEffect(() => {
    dispatch(getTopEventsThunk({ sId: activeSportId, limit: 10 }));
  }, [activeSportId]);

  const toggleSport = id => {
    dispatch(toggleTopEventsSport(id));
  };

  const onEventClick = event => {
    navigate(`/event/${event.id}`);
  };

  const onViewAllClick = useCallback(() => {
    navigate(`/all-events/tops/${activeSportId}`);
  }, [activeSportId]);

  const onOpenSingle = id => {
    dispatch(getTopSingleThunk(id));
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
            // { id: 'others', name: 'Others', cb: () => toggleSport('others') },
          ]
        : [],
    [navigate, withTabs],
  );

  useEffect(() => () => dispatch(resetTopEventsSlice()), []);

  return (
    <EventsContainer
      title={title}
      tabsWithIcon
      isLoading={isLoading}
      tabs={tabs}
      events={eventsList}
      activeSportId={activeSportId}
      onEventClick={onEventClick}
      onViewAllClick={onViewAllClick}
      onOpenSingle={onOpenSingle}
    />
  );
};

export default TopEventsContainer;
