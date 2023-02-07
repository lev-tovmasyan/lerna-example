import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MatchTracker from '../../package/components/MatchTracker/MatchTracker';
import { selectTrackerKey } from '../../redux/reducers/configs/configs.slice';
import { selectSingleLive } from '../../redux/reducers/live/live.slice';

const MatchTrackerContainer = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const trackerKey = useSelector(selectTrackerKey);
  const isLive = paths.includes('live-event');
  const eventId = paths[paths.length - 1];
  const liveEvent = useSelector(state => selectSingleLive(state, eventId));

  if (!isLive || !liveEvent || !trackerKey) {
    return null;
  }

  const { s: sportId, t1 = {}, t2 = {} } = liveEvent;

  return (
    <MatchTracker
      trackerKey={trackerKey}
      eventId={eventId}
      sportId={sportId}
      t1Name={t1.n}
      t2Name={t2.n}
    />
  );
};

export default MatchTrackerContainer;
