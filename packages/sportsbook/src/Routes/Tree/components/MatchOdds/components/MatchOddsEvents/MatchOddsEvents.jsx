import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import EventsContainer from '../../../../../../components/EventsContainer/EventsContainer';
import { selectTree } from '../../../../../../redux/reducers/sportsbook/sportsbook.slice';
import { getTreeSingleThunk } from '../../../../../../redux/reducers/sportsbook/sportsbook.thunk';

const MatchOddsEvents = ({ activeMarket, events }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sportId } = useParams();
  const { isLoading, isOddsLoading } = useSelector(selectTree);

  const onOpenSingle = id => {
    dispatch(getTreeSingleThunk(id));
  };

  const onEventClick = event => {
    console.log('event', event);
    navigate(`/event/${event.id}`);
  };

  return (
    <EventsContainer
      isGroup
      isLoading={isLoading}
      isOddsLoading={isOddsLoading}
      activeSportId={sportId}
      events={events}
      onOpenSingle={onOpenSingle}
      onEventClick={onEventClick}
      market={activeMarket}
    />
  );
};

export default MatchOddsEvents;
