import PropTypes from 'prop-types';
import { Tabs__styled, TabsList__styled } from './Tabs.styled';
import TabItem from './components/TabItem';
import { useState } from 'react';
import { useRef } from 'react';
import Scroller from '../Scroller/Scroller';
import { useMediaQuery } from '@react-hook/media-query';

const Tabs = ({ tabs = [], activeName, forBetslip, withIcon }) => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');
  const ref = useRef(null);

  return (
    <Tabs__styled
      onMouseEnter={() => setIsScrollerVisible(true)}
      onMouseLeave={() => setIsScrollerVisible(false)}>
      <TabsList__styled ref={ref}>
        {tabs.map(tab => (
          <TabItem
            key={tab.name}
            tab={tab}
            forBetslip={forBetslip}
            isActive={activeName === tab.name}
            withIcon={withIcon}
            tooltipText={tab.tooltipText}
          />
        ))}
      </TabsList__styled>
      {(isTablet || isScrollerVisible) && <Scroller scrollRef={ref} />}
    </Tabs__styled>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  forBetslip: PropTypes.bool,
  withIcon: PropTypes.bool,
};

export default Tabs;
