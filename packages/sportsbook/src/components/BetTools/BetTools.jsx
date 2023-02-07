import React from 'react';
import { BetTools__styled, BetToolsTracker__styled } from './BetTools.styled';
// import SearchBy from '../../package/sections/SearchBy/SearchBy';
// import FastCode from '../../package/sections/FastCode/FastCode';
import BetslipContainer from '../BetslipContainer/BetslipContainer';
import SearchBy from '../../package/sections/SearchBy/SearchBy';
import MatchTrackerContainer from '../MatchTrackerContainer/MatchTrackerContainer';
import { useMediaQuery } from '@react-hook/media-query';

const BetTools = ({ isSingleEvent }) => {
  const isDesktop = useMediaQuery('only screen and (min-width: 1025px)');

  return (
    <BetTools__styled isSingleEvent={isSingleEvent}>
      {/* <FastCode /> */}
      <SearchBy />
      {isDesktop && (
        <BetToolsTracker__styled>
          <MatchTrackerContainer />
        </BetToolsTracker__styled>
      )}
      <BetslipContainer />
      {/* <PopularBets /> */}
    </BetTools__styled>
  );
};

export default BetTools;
