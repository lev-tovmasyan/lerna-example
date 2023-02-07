import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../../../constants/theme.constants';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { configsExtraReducers } from './configs.thunk';

const initialState = {
  isConfigsExist: false,
  languages: null,
  theme: THEMES.DARK,
  LMTI: '',
  sportBonus: false,
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    resetConfigs: () => initialState,
  },
  extraReducers: configsExtraReducers,
});

// ACTIONS
export const { setToken, resetConfigs } = configsSlice.actions;

// SELECTORS
export const selectSupportedLanguages = state => state.configs.languages;
export const selectIsConfigsExist = state => state.configs.isConfigsExist;
export const selectTheme = state => state.configs.theme;
export const selectTrackerKey = state => state.configs.LMTI;
export const selectIsSportBonusAvailable = state => state.configs.sportBonus;

// const persistConfig = {
//   key: 'configs',
//   version: 1,
//   storage,
// };

export default configsSlice.reducer;
