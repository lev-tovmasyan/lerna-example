import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TopLeagues from '../../package/sections/TopLeagues/TopLeagues';
import {
  selectIsSportsLoading,
  selectTopLeagues,
} from '../../redux/reducers/sportsbook/sportsbook.slice';

const TopLeaguesContainer = ({ currentSportId }) => {
  const navigate = useNavigate();
  const isSportsLoading = useSelector(selectIsSportsLoading);
  const topLeagues = useSelector(selectTopLeagues);

  const filteredLeagues = currentSportId
    ? topLeagues.filter(league => league.sportId === currentSportId)
    : topLeagues;

  const onLeagueClick = (leagueId, countryId, sportId) => {
    navigate(`/tree/${sportId}/${countryId}=${leagueId}/match-odds`);
  };

  if (!filteredLeagues.length) {
    return null;
  }

  return (
    <TopLeagues
      isLoading={isSportsLoading}
      leagues={filteredLeagues}
      onLeagueClick={onLeagueClick}
    />
  );
};

export default TopLeaguesContainer;
