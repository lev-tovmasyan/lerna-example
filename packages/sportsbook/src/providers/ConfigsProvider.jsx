import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GlobalLoader from '../components/GlobalLoader/GlobalLoader';
import { selectIsConfigsExist } from '../redux/reducers/configs/configs.slice';
import { getConfigsThunk } from '../redux/reducers/configs/configs.thunk';

const ConfigsProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isConfigsExist = useSelector(selectIsConfigsExist);

  useEffect(() => {
    if (!isConfigsExist) {
      dispatch(getConfigsThunk());
    }
  }, []);

  if (!isConfigsExist) {
    return <GlobalLoader />;
  }
  return children;
};

export default ConfigsProvider;
