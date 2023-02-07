import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { updateNestedObject } from '../../../helpers/utils';
import { betslipExtraReducers } from './betslip.thunk';

const MIN_BET_AMOUNT = 1;

const initialState = {
  isOpen: false,
  bets: {},
  multyAmount: MIN_BET_AMOUNT,
  isBookLoading: false,
  bookCode: null,
  error: null,
  isTimerStart: false,
};

export const betslipSlice = createSlice({
  name: 'betslip',
  initialState,
  reducers: {
    openBetslip: state => {
      state.isOpen = true;
    },
    closeBetslip: state => {
      state.isOpen = false;
    },
    toggleBet: (state, { payload }) => {
      const ref = payload.ref;
      if (ref in state.bets) {
        delete state.bets[ref];
      } else {
        if (Object.keys(state.bets).length < 25) {
          state.bets[ref] = {
            ...payload,
            amount: MIN_BET_AMOUNT,
            checked: true,
          };
        }
      }
    },
    removeBet: (state, { payload }) => {
      delete state.bets[payload];
    },
    toggleBetslipTimer: (state, { payload }) => {
      state.isTimerStart = payload;
    },
    clearBetslipBook: state => {
      state.bookCode = null;
    },
    updateBetslip: (state, { payload }) => {
      const { path, value } = payload;
      updateNestedObject(state, path, value);
    },
    resetBetslip: () => initialState,
  },
  extraReducers: betslipExtraReducers,
});

// ACTIONS
export const {
  openBetslip,
  closeBetslip,
  toggleBet,
  removeBet,
  toggleBetslipTimer,
  clearBetslipBook,
  updateBetslip,
  resetBetslip,
} = betslipSlice.actions;

// SELECTORS
export const selectBetslip = state => state.betslip;
export const selectIsBetLoading = state => state.betslip.isLoading;
export const selectIsBetslipOpen = state => state.betslip.isOpen;
export const selectBetslipCount = state =>
  Object.keys(state.betslip.bets).length;
export const selectBetslipBets = state => state.betslip.bets;
export const selectIsBookGetLoading = state => state.betslip.isBookGetLoading;
export const selectIsBetslipTimerStart = state => state.betslip.isTimerStart;

const persistConfig = {
  key: 'betslip',
  version: 1,
  storage,
  whitelist: ['bets', 'multyAmount'],
};

export default persistReducer(persistConfig, betslipSlice.reducer);
