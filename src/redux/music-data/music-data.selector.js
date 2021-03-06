import { createSelector } from "reselect";

const selectMusicData = (state) => state.musicData;

export const selectIsFetchingMusicData = createSelector(
  [selectMusicData],
  (musicData) => musicData.isFetching
);

export const selectMusicDataCollections = createSelector(
  [selectMusicData],
  (musicData) => musicData.data
);
