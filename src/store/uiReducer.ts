import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  refreshGamesModalOpen: boolean;
  shouldShowOutputPanel: boolean;
  queryCaptcha: string | null;
  refreshGamesCaptcha: string | null;
}

const INITIAL_STATE: UIState = {
  refreshGamesModalOpen: false,
  shouldShowOutputPanel: false,
  queryCaptcha: null,
  refreshGamesCaptcha: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    openRefreshModal: (state) => {
      state.refreshGamesModalOpen = true;
    },
    closeRefreshModal: (state) => {
      state.refreshGamesModalOpen = false;
    },
    setShouldShowOutputPanel: (state) => {
      state.shouldShowOutputPanel = true;
    },
    setQueryCaptcha: (state, action: PayloadAction<string | null>) => {
      state.queryCaptcha = action.payload;
    },
    setRefreshGamesCaptcha: (state, action: PayloadAction<string | null>) => {
      state.refreshGamesCaptcha = action.payload;
    },
  },
});

export const {
  openRefreshModal,
  closeRefreshModal,
  setShouldShowOutputPanel,
  setQueryCaptcha,
  setRefreshGamesCaptcha,
} = uiSlice.actions;

export default uiSlice.reducer;
