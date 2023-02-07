import React from 'react';
import { MARKET_TYPES } from '../../constants/sports.constants';
import Select from '../../package/components/UI/Select/Select';
import { BetTypes__styled, BetTypesSide__styled } from './BetTypes.styled';

const BetTypes = ({ data, changeGlobalHandicap }) => {
  const { ns, type, handicapOptions, handicapValue, code, prices } = data;

  const names = prices || ns?.split(',') || [];

  return (
    <BetTypes__styled>
      {type === MARKET_TYPES.HANDICAP && (
        <BetTypesSide__styled hidden>
          <Select
            title="Hand."
            onChange={value => changeGlobalHandicap(value, code)}
            value={handicapValue}
            options={handicapOptions}
            forOdds
          />
        </BetTypesSide__styled>
      )}
      {names?.map(type => (
        <BetTypesSide__styled key={type}>{type}</BetTypesSide__styled>
      ))}
    </BetTypes__styled>
  );
};

export default BetTypes;
