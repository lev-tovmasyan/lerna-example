import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GameSearch from '../../package/sections/GameSearch/GameSearch';
import {
  resetSearchEvents,
  selectSearchEvents,
} from '../../redux/reducers/sportsbook/sportsbook.slice';
import { getSearchEventsThunk } from '../../redux/reducers/sportsbook/sportsbook.thunk';

const GameSearchContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchEvents = useSelector(selectSearchEvents);

  const onSearch = name => {
    dispatch(name ? getSearchEventsThunk(name) : resetSearchEvents());
  };

  const onEventClick = event => {
    navigate(`/event/${event.id}`);
    dispatch(resetSearchEvents());
  };

  useEffect(() => () => dispatch(resetSearchEvents()), []);

  return (
    <GameSearch
      searchEvents={searchEvents}
      onSearch={onSearch}
      onEventClick={onEventClick}
    />
  );
};

export default GameSearchContainer;
