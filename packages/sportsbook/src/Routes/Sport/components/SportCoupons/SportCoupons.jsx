import { useMemo } from 'react';
import dayjs from 'dayjs';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Coupons from '../../../../package/sections/Coupons/Coupons';
import { SportCoupons__styled } from './SportCoupons.styled';
import { setTreeDate } from '../../../../redux/reducers/sportsbook/sportsbook.slice';
import { UPCOMING_SPORTS_IDS } from '../../../../constants/sports.constants';

const SportCoupons = () => {
  const { sportId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const coupons = useMemo(() => {
    const routes = [
      {
        name: 'Today matches',
        icon: 'calendar',
        cb() {
          dispatch(setTreeDate(dayjs()));
          navigate(`/tree/${sportId}/all/match-odds`);
        },
      },
      {
        name: 'Tomorrow matches',
        icon: 'calendar',
        cb() {
          dispatch(setTreeDate(dayjs(Date.now() + 8.64e7)));
          navigate(`/tree/${sportId}/all/match-odds`);
        },
      },
    ];
    if (UPCOMING_SPORTS_IDS.includes(+sportId)) {
      routes.push(
        {
          name: 'Upcoming matches',
          icon: 'calendar',
          cb() {
            navigate(`/all-events/upcoming/${sportId}`);
          },
        },
        {
          name: 'Top leagues',
          icon: 'calendar',
          cb() {
            navigate(`/all-events/top/${sportId}`);
          },
        },
      );
    }
    return routes;
  }, [sportId, navigate]);

  return (
    <SportCoupons__styled>
      <Coupons coupons={coupons} />
    </SportCoupons__styled>
  );
};

export default SportCoupons;
