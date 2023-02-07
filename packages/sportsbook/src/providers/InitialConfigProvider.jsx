import React, { useEffect, useState } from 'react';
import { setupAxios } from '../api/axios';
import { resetAuth, setToken } from '../redux/reducers/auth/auth.slice';
import { useDispatch } from 'react-redux';
import GlobalLoader from '../components/GlobalLoader/GlobalLoader';
import { resetBetslip } from '../redux/reducers/betslip/betslip.slice';
import { useSearchParams } from 'react-router-dom';

const InitialConfigProvider = ({ children }) => {
  const [init, setInit] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (self.parent === self && self.parent.frames.length === 0) {
      setupAxios(process.env.REACT_APP_API_URL);

      setInit(true);
      return;
    }

    setupAxios(searchParams.get('serverUrl'));
    setInit(true);

    window.addEventListener('message', e => {
      if ('accessToken' in e.data) {
        if (e.data.accessToken) {
          dispatch(setToken({ accessToken: e.data.accessToken }));
        } else {
          dispatch(resetAuth());
        }
      }
    });
  }, []);

  useEffect(() => {
    const cachingVersion = localStorage.getItem('cachingVersion');
    if (process.env.REACT_APP_CACHING_VERSION !== cachingVersion) {
      localStorage.clear();
      dispatch(resetBetslip());
      localStorage.setItem(
        'cachingVersion',
        process.env.REACT_APP_CACHING_VERSION,
      );
    }
  }, []);

  return <>{init ? children : <GlobalLoader />}</>;
};

export default InitialConfigProvider;
