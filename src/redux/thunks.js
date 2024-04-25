import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCampers } from 'api/mockApi';
import {
  handleFulfilledCampers,
  handlePending,
  handleRejected,
} from './handlers';

export const getCampersThunk = createAsyncThunk('getCampers', page =>
  getCampers(page)
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites:
      JSON.parse(localStorage.getItem('persist:favorites'))?.favorites ?? [],
    curPage: 1,
    total: 13,
    isLoading: false,
    error: '',
  },
  reducers: {
    setPage(state, action) {
      state.curPage += action.payload;
    },
    changeFavorite(state, action) {
      const isFavorite = state.favorites.filter(
        campers => campers._id === action.payload._id
      );

      if (isFavorite.length > 0) {
        state.favorites = state.favorites.filter(
          campers => campers._id !== action.payload._id
        );
        return;
      }
      state.favorites.push({ ...action.payload });
    },
    bookCamper: (state, { payload }) => {
      state.bookings.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.fulfilled, handleFulfilledCampers)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
export const { setPage, changeFavorite, bookCamper } = campersSlice.actions;
