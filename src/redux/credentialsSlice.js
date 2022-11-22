import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authSlice';

const initialState = {
  token: '',
  user: '',
};

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, () => {
      return initialState;
    });
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { clearCredentials } = credentialsSlice.actions;
