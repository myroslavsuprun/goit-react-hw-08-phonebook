import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter: (_, action) => action.payload,
  },
});

export const { updateFilter } = filterSlice.actions;
