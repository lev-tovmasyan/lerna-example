import Checkbox from '../../../../components/UI/Checkbox/Checkbox';
import {
  MenuCheckbox__styled,
  MenuLeagueName__styled,
  MenuLeague__styled,
  MenuLeagueLive__styled,
} from './MenuLeague.styled';

const MenuLeague = ({
  league,
  onLeagueCheck,
  isChecked,
  onLeagueClick,
  isLive,
}) => {
  const { name } = league;

  return (
    <MenuLeague__styled onClick={onLeagueClick}>
      <MenuCheckbox__styled>
        <Checkbox
          checked={isChecked}
          onChange={e => {
            e.stopPropagation();
            onLeagueCheck();
          }}
        />
      </MenuCheckbox__styled>
      <MenuLeagueName__styled className={'ellipsis'}>
        {name}
      </MenuLeagueName__styled>
      {isLive && <MenuLeagueLive__styled>Live</MenuLeagueLive__styled>}
    </MenuLeague__styled>
  );
};

export default MenuLeague;
