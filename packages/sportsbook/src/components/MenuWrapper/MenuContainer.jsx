import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '../../package/sections/Menu/Menu';
import {
  selectIsSportsLoading,
  selectSports,
} from '../../redux/reducers/sportsbook/sportsbook.slice';
import qs from 'qs';
import { selectLiveGroups } from '../../redux/reducers/live/live.slice';

const MenuContainer = ({ title, currentSportId }) => {
  const navigate = useNavigate();
  const isSportsLoading = useSelector(selectIsSportsLoading);
  const sports = useSelector(selectSports);
  const liveGroups = useSelector(selectLiveGroups);

  const filteredSport = currentSportId
    ? [sports.find(sport => sport.id === currentSportId)]
    : sports;

  const onLeagueClick = (leagueId, countryId, sportId) => {
    navigate(`/tree/${sportId}/${countryId}=${leagueId}/match-odds`);
  };

  const onShowEventsClick = (ids, sportId) => {
    const pathIds = qs.stringify(ids, { encode: false, arrayFormat: 'comma' });
    navigate(`/tree/${sportId}/${pathIds}/match-odds`);
  };

  return (
    <Menu
      title={title}
      isCompetitions={!!currentSportId}
      isLoading={isSportsLoading}
      sports={filteredSport}
      onLeagueClick={onLeagueClick}
      onShowEventsClick={onShowEventsClick}
      liveGroups={liveGroups}
    />
  );
};

export default MenuContainer;
