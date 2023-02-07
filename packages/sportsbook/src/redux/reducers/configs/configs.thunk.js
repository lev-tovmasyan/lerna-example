import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOP_LEAGUE_IDS_BY_SPORT } from '../../../constants/sports.constants';

export const getConfigsThunk = createAsyncThunk('configs/get', async () => {
  const response = await axios.get('configs');
  return response;
});

export const configsExtraReducers = builder => {
  builder
    .addCase(getConfigsThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(getConfigsThunk.fulfilled, (state, { payload }) => {
      if (Array.isArray(payload?.topLeagues)) {
        TOP_LEAGUE_IDS_BY_SPORT[50] = payload.topLeagues;
      }

      return {
        ...state,
        isLoading: false,
        isConfigsExist: true,
        ...payload,
      };
    })
    .addCase(getConfigsThunk.rejected, state => {
      state.isLoading = false;
    });
};
