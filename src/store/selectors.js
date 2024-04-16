import { createSelector } from "@reduxjs/toolkit";

export const selectAdvertsState = (state) => state.adverts;

export const selectAdverts = createSelector(
  [selectAdvertsState],
  (advertsState) => advertsState.items
);

export const selectIsLoading = createSelector(
  [selectAdvertsState],
  (advertsState) => advertsState.isLoading
);

export const selectError = createSelector(
  [selectAdvertsState],
  (advertsState) => advertsState.error
);
