import React, { useState } from 'react';
import {
  MenuCenter__styled,
  MenuLeft__styled,
  MenuOpenIcon__styled,
  MenuOpenSvg__styled,
} from '../../Menu.styled';
import {
  MenuSportButton__styled,
  MenuSportIcon__styled,
  MenuSportInfo__styled,
  MenuSportItem__styled,
  MenuSportName__styled,
  MenuSportSvg__styled,
} from './MenuSport.styled';
import sportsSprite from '../../../../assets/images/sprites/sportsSprite.svg';
import { SPORT_NAME_BY_ID } from '../../../../../constants/sports.constants';

const LiveMenuSport = ({ id, open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <MenuSportItem__styled>
      <MenuSportInfo__styled>
        <MenuSportButton__styled onClick={() => setIsOpen(prev => !prev)}>
          <MenuLeft__styled>
            <MenuSportIcon__styled>
              <MenuSportSvg__styled>
                <use xlinkHref={`${sportsSprite}#${id}`} />
              </MenuSportSvg__styled>
            </MenuSportIcon__styled>
            <MenuSportName__styled className={'ellipsis'}>
              {SPORT_NAME_BY_ID[id]}
            </MenuSportName__styled>
          </MenuLeft__styled>
          <MenuCenter__styled>
            <MenuOpenIcon__styled open={isOpen}>
              <MenuOpenSvg__styled>
                <use xlinkHref={'#down'} />
              </MenuOpenSvg__styled>
            </MenuOpenIcon__styled>
          </MenuCenter__styled>
        </MenuSportButton__styled>
      </MenuSportInfo__styled>
      {isOpen && children}
    </MenuSportItem__styled>
  );
};

export default LiveMenuSport;
