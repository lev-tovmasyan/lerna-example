import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import BetTools from './components/BetTools/BetTools';
import { useMediaQuery } from '@react-hook/media-query';
import BetslipButton from './components/BetslipButton/BetslipButton';
import { useLocation, useRoutes } from 'react-router-dom';
import { useAppSideEffects, useSportParams } from './hooks/app.hooks';
import { ALL_ROUTES } from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import {
  openBetslip,
  selectBetslipCount,
  selectIsBetslipOpen,
} from './redux/reducers/betslip/betslip.slice';
import BetslipContainer from './components/BetslipContainer/BetslipContainer';
import Popups from './package/components/Popups/Popups';
import BetHistoryButton from './components/BetHistoryButton/BetHistoryButton';
import { selectIsAuth } from './redux/reducers/auth/auth.slice';

function App() {
  const { pathname } = useLocation();
  const routes = useRoutes(ALL_ROUTES);
  const dispatch = useDispatch();
  const isBetslipOpen = useSelector(selectIsBetslipOpen);
  const betslipCount = useSelector(selectBetslipCount);
  const isAuth = useSelector(selectIsAuth);

  const isBetHistory = pathname === '/bet-history';

  const { isSingle } = useSportParams();
  const isMobile = useMediaQuery('only screen and (max-width: 800px)');
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');
  const isTabletL = useMediaQuery('only screen and (max-width: 1200px)');

  useAppSideEffects();

  return (
    <div className="App">
      {!isBetHistory && !(isMobile || (isSingle && isTabletL)) && (
        <Sidebar isSingle={isSingle} />
      )}
      {routes}
      {!isTablet && <BetTools isSingleEvent={isSingle} />}
      {isTablet && isBetslipOpen && <BetslipContainer />}
      {isTablet && !isBetslipOpen && (
        <>
          {isAuth && <BetHistoryButton />}
          <BetslipButton
            onClick={() => dispatch(openBetslip())}
            count={betslipCount}
          />
        </>
      )}
      <Popups />
    </div>
  );
}

export default App;
