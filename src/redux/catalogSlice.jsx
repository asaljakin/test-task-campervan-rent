import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers } from '../api/mockApi';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
