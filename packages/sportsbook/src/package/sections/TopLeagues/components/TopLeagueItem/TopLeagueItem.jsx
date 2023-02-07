import PropTypes from 'prop-types';
import {
  TopLeaguesIcon__styled,
  TopLeaguesItemButton__styled,
  TopLeaguesItem__styled,
  TopLeaguesName__styled,
} from './TopLeagueItem.styled';
import Flag from '../../../../components/UI/Flag/Flag';

const TopLeagueItem = ({ league, onLeagueClick }) => {
  const { name, parentId: countryId } = league;

  return (
    <TopLeaguesItem__styled onClick={onLeagueClick}>
      <TopLeaguesItemButton__styled>
        <TopLeaguesIcon__styled>
          <Flag id={countryId} />
        </TopLeaguesIcon__styled>
        <TopLeaguesName__styled className={'ellipsis'}>
          {name}
        </TopLeaguesName__styled>
      </TopLeaguesItemButton__styled>
    </TopLeaguesItem__styled>
  );
};

TopLeagueItem.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default TopLeagueItem;
