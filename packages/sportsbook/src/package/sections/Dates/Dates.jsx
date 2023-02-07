import { getUpcomingDates } from './dates.helpers';
import PropTypes from 'prop-types';
import {
  Date__styled,
  DateButton__styled,
  DateItem__styled,
  DateList__styled,
  DateMonthDay__styled,
  DateWeekDay__styled,
} from './Dates.styled';
import { useState } from 'react';
import { useRef } from 'react';
import Scroller from '../../components/Scroller/Scroller';
import { useMediaQuery } from '@react-hook/media-query';
import dayjs from 'dayjs';
const datesList = getUpcomingDates();

const Dates = ({ activeDate, onDateClick, isActiveVisible }) => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');
  const ref = useRef(null);

  return (
    <Date__styled
      onMouseEnter={() => setIsScrollerVisible(true)}
      onMouseLeave={() => setIsScrollerVisible(false)}>
      <DateList__styled ref={ref}>
        {datesList.map((date, i) => (
          <DateItem__styled key={i} count={Array.length}>
            <DateButton__styled
              onClick={() => onDateClick(date.full)}
              active={
                isActiveVisible &&
                (activeDate === date.full ||
                  dayjs(activeDate).format('DD/MM') === date.day)
              }>
              <DateWeekDay__styled>{date.title}</DateWeekDay__styled>
              <DateMonthDay__styled>{date.day}</DateMonthDay__styled>
            </DateButton__styled>
          </DateItem__styled>
        ))}
      </DateList__styled>
      {(isTablet || isScrollerVisible) && <Scroller scrollRef={ref} />}
    </Date__styled>
  );
};

Dates.propTypes = {
  activeDate: PropTypes.string,
  onDateClick: PropTypes.func,
};

export default Dates;
