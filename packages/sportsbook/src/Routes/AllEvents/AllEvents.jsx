import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import EventsContainer from '../../components/EventsContainer/EventsContainer';
import Navigation from '../../package/components/Navigation/Navigation';
import {
  selectIsTopEventsLoading,
  selectTopEvents,
} from '../../redux/reducers/topEvents/topEvents.slice';
import {
  getTopEventsThunk,
  getTopSingleThunk,
} from '../../redux/reducers/topEvents/topEvents.thunk';
import {
  selectIsUpcomingLoading,
  selectUpcomingEvents,
} from '../../redux/reducers/upcoming/upcoming.slice';
import {
  getUpcomingEventsThunk,
  getUpcomingSingleThunk,
} from '../../redux/reducers/upcoming/upcoming.thunk';
import { AllEvents__styled } from './AllEvents.styled';

const AllEvents = () => {
  const { type, sportId } = useParams();
  const isTop = type === 'tops';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(
    isTop ? selectIsTopEventsLoading : selectIsUpcomingLoading,
  );
  const events = useSelector(isTop ? selectTopEvents : selectUpcomingEvents);
  const title = isTop ? 'Top Events' : 'Upcoming';

  useEffect(() => {
    const action = isTop ? getTopEventsThunk : getUpcomingEventsThunk;
    dispatch(action({ sId: sportId, limit: 50 }));
  }, [sportId, isTop]);

  const onEventClick = event => {
    navigate(`/event/${event.id}`);
  };

  const navLinks = useMemo(
    () => [
      {
        name: 'Home',
        cb() {
          navigate('/');
        },
      },
      { name: title },
    ],
    [navigate, title],
  );

  const onOpenSingle = id => {
    const action = isTop ? getTopSingleThunk : getUpcomingSingleThunk;
    dispatch(action(id));
  };

  return (
    <AllEvents__styled>
      <Navigation links={navLinks} />
      <EventsContainer
        isAll
        isLoading={isLoading}
        events={events}
        activeSportId={+sportId}
        onEventClick={onEventClick}
        onOpenSingle={onOpenSingle}
      />
    </AllEvents__styled>
  );
};

export default AllEvents;
