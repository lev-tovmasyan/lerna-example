import React, { useState } from 'react';
import {
  MenuCenter__styled,
  MenuLeft__styled,
  MenuOpenIcon__styled,
  MenuOpenSvg__styled,
} from '../../Menu.styled';
import {
  MenuCountryButton__styled,
  MenuCountryIcon__styled,
  MenuCountryInfo__styled,
  MenuCountryInner__styled,
  MenuCountryItem__styled,
  MenuCountryList__styled,
  MenuCountryText__styled,
  MenuCountry__styled,
} from '../MenuCountry/MenuCountry.styled';
import Flag from '../../../../components/UI/Flag/Flag';

const LiveMenuLeague = ({ countryId, name, open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <MenuCountry__styled>
      <MenuCountryList__styled>
        <MenuCountryItem__styled>
          <MenuCountryInner__styled>
            <MenuCountryInfo__styled isSingleEvent={true}>
              <MenuCountryButton__styled
                isSingleEvent={true}
                onClick={() => setIsOpen(prev => !prev)}>
                <MenuLeft__styled>
                  <MenuCountryIcon__styled>
                    <Flag id={countryId} />
                  </MenuCountryIcon__styled>
                  <MenuCountryText__styled className={'ellipsis'}>
                    {name}
                  </MenuCountryText__styled>
                </MenuLeft__styled>
                <MenuCenter__styled>
                  <MenuOpenIcon__styled open={isOpen}>
                    <MenuOpenSvg__styled>
                      <use xlinkHref={'#down'} />
                    </MenuOpenSvg__styled>
                  </MenuOpenIcon__styled>
                </MenuCenter__styled>
              </MenuCountryButton__styled>
            </MenuCountryInfo__styled>
          </MenuCountryInner__styled>
          {isOpen && children}
        </MenuCountryItem__styled>
      </MenuCountryList__styled>
    </MenuCountry__styled>
  );
};

export default LiveMenuLeague;
