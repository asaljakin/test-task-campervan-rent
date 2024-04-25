export const handleFulfilledCampers = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items = state.curPage > 1 ? [...state.items, ...payload] : [...payload];
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
