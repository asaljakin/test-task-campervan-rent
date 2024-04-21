import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from '../api/mockApi';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    total: 1,
    isLoading: false,
    error: null,
    favorites:
      JSON.parse(localStorage.getItem('persist:favorites'))?.favorites ?? [],
    currentPage: 1,
  },
  reducers: {
    setPage(state, action) {
      console.log('action.payload ', action.payload);
      state.currentPage += action.payload;
    },
    changeFavorite(state, action) {
      const isFavorite = state.favorites.filter(
        catalog => catalog._id === action.payload._id
      );
      if (isFavorite.length > 0) {
        state.favorites = state.favorites.filter(
          catalog => catalog._id !== action.payload._id
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
      .addCase(getCampers.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log('payload', payload);
        state.items =
          state.curPage > 1 ? [...state.items, ...payload] : [...payload];
      })
      // .addCase(getAllCampers.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(getAllCampers.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.total = payload;
      // })
      .addCase(getCampers.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
    //   .addCase(getAllCampers.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.error = error.message;
    // });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { setPage, changeFavorite, bookCamper } = catalogSlice.actions;
