import React, { useState } from 'react';
import Checkbox from '../../../../components/UI/Checkbox/Checkbox';
import {
  MenuCenter__styled,
  MenuLeft__styled,
  MenuLive__styled,
  MenuOpenIcon__styled,
  MenuOpenSvg__styled,
} from '../../Menu.styled';
import MenuLeague from '../MenuLeague/MenuLeague';
import {
  MenuCountryButton__styled,
  MenuCountryIcon__styled,
  MenuCountryInfo__styled,
  MenuCountryInner__styled,
  MenuCountryItem__styled,
  MenuCountryList__styled,
  MenuCountrySelect__styled,
  MenuCountryText__styled,
  MenuCountry__styled,
  MenuCountryCheckbox__styled,
} from './MenuCountry.styled';

import PrefixEvent from '../../../../../components/PrefixEvent/PrefixEvent';
import Flag from '../../../../components/UI/Flag/Flag';
import { useMemo } from 'react';

const MenuCountry = ({
  sportId,
  isSingleEvent,
  country,
  checkedLeagues,
  onCountryCheck,
  onLeagueCheck,
  onLeagueClick,
  liveCountries = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { name, leagues, id } = country;

  const allLeaguesIds = useMemo(
    () => leagues.map(league => league.id),
    [leagues],
  );

  const isAllCheck = useMemo(
    () =>
      allLeaguesIds.every(leagueId => checkedLeagues[id]?.includes(leagueId)),
    [checkedLeagues, allLeaguesIds],
  );

  const liveCountry = liveCountries[id];

  return (
    <MenuCountry__styled>
      <MenuCountryList__styled>
        <MenuCountryItem__styled>
          <MenuCountryInner__styled>
            {!isSingleEvent && (
              <MenuCountrySelect__styled>
                <MenuCountryCheckbox__styled>
                  <Checkbox
                    checked={isAllCheck}
                    onChange={() =>
                      onCountryCheck(allLeaguesIds, id, isAllCheck)
                    }
                  />
                </MenuCountryCheckbox__styled>
              </MenuCountrySelect__styled>
            )}
            <MenuCountryInfo__styled isSingleEvent={isSingleEvent}>
              <MenuCountryButton__styled
                isSingleEvent={isSingleEvent}
                onClick={() => setIsOpen(prev => !prev)}>
                <MenuLeft__styled>
                  <MenuCountryIcon__styled>
                    <Flag id={id} />
                  </MenuCountryIcon__styled>
                  <MenuCountryText__styled className={'ellipsis'}>
                    {name}
                  </MenuCountryText__styled>
                </MenuLeft__styled>
                <MenuCenter__styled>
                  {!isSingleEvent && liveCountry && (
                    <MenuLive__styled>Live</MenuLive__styled>
                  )}
                  <MenuOpenIcon__styled open={isOpen}>
                    <MenuOpenSvg__styled>
                      <use xlinkHref={'#down'} />
                    </MenuOpenSvg__styled>
                  </MenuOpenIcon__styled>
                </MenuCenter__styled>
              </MenuCountryButton__styled>
            </MenuCountryInfo__styled>
          </MenuCountryInner__styled>
          {isOpen &&
            (isSingleEvent ? (
              <PrefixEvent />
            ) : (
              leagues.map(league => {
                const isChecked = checkedLeagues[id]?.includes(league.id);
                return (
                  <MenuLeague
                    key={league.id}
                    league={league}
                    onLeagueCheck={() =>
                      onLeagueCheck(league.id, id, isChecked)
                    }
                    isChecked={isChecked}
                    onLeagueClick={() => onLeagueClick(league.id, id, sportId)}
                    isLive={liveCountry && liveCountry[league.id]}
                    liveLeagues={liveCountry}
                  />
                );
              })
            ))}
        </MenuCountryItem__styled>
      </MenuCountryList__styled>
    </MenuCountry__styled>
  );
};

export default MenuCountry;
