import { countryList } from './constants/flag.constants';
import { Flag__styled } from './Flag.styled';
import countriesById from '../../../constants/countriesById.json';

const Flag = ({ country = '', id = '' }) => {
  const flagCode = countryList[country] || countryList[countriesById[id]] || '';

  return (
    <Flag__styled src={`https://static.betxgaming.com/flags/${flagCode}.png`} />
  );
};

export default Flag;
