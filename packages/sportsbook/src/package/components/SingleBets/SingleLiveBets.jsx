import React, { useState } from 'react';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import Market from '../Market/Market';
import Tabs from '../Tabs/Tabs';
import SingleBetsSkeleton from './SingleBets.skeleton';
import {
  SingleBets__styled,
  SingleBetsBody__styled,
  SingleBetsItem__styled,
  SingleBetsTabs__styled,
} from './SingleBets.styled';

const SingleLiveBets = ({
  groups = {},
  onOddClick,
  isLoading,
  betslip = {},
}) => {
  if (isLoading) {
    return <SingleBetsSkeleton />;
  }
  const [activeItem, setActiveItem] = useState(0);

  const marketsNames = Object.keys(groups);

  return (
    <SingleBets__styled>
      <SingleBetsTabs__styled>
        <Tabs tabs={[]} setActiveItem={setActiveItem} />
      </SingleBetsTabs__styled>
      <SingleBetsBody__styled activeItem={activeItem}>
        {/* {Array.from(Array(20), (_, i) => ( */}
        <SingleBetsItem__styled
        // ref={activeSingleBetItem}
        // key={i}
        // active={activeItem === i}
        >
          {marketsNames.map((name, i) => (
            <ExpansionPanel key={name || i} name={name}>
              {groups[name]?.map((market, i) => (
                <Market
                  key={i}
                  market={market}
                  onOddClick={onOddClick}
                  betslip={betslip}
                />
              ))}
            </ExpansionPanel>
          ))}
        </SingleBetsItem__styled>
        {/* ))} */}
      </SingleBetsBody__styled>
    </SingleBets__styled>
  );
};

export default SingleLiveBets;
