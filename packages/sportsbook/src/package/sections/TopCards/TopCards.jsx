import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TopEvents__styled, TopEventsList__styled } from './TopCards.styled';

import React from 'react';
import { LOADING_ITEMS_SHORT } from '../../helpers/utils';
import TopCardRowSkeleton from './components/TopCardRow/TopCardRow.skeleton';
import TopCardRow from './components/TopCardRow/TopCardRow';
import Scroller from '../../components/Scroller/Scroller';
import { useMediaQuery } from '@react-hook/media-query';

const TopCards = ({ events, isLoading, betslip, onEventClick, onOddClick }) => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');
  const ref = useRef(null);

  return (
    <TopEvents__styled
      onMouseEnter={() => setIsScrollerVisible(true)}
      onMouseLeave={() => setIsScrollerVisible(false)}>
      <TopEventsList__styled ref={ref}>
        {isLoading
          ? LOADING_ITEMS_SHORT.map((_, i) => <TopCardRowSkeleton key={i} />)
          : events.map(event => (
              <TopCardRow
                key={event.id}
                event={event}
                betslip={betslip}
                onEventClick={onEventClick}
                onOddClick={onOddClick}
              />
            ))}
      </TopEventsList__styled>
      {(isTablet || isScrollerVisible) && <Scroller scrollRef={ref} />}
    </TopEvents__styled>
  );
};

TopCards.propTypes = {
  events: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default TopCards;
