import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  refreshGamesModalOpen: boolean;
  shouldShowOutputPanel: boolean;
  queryCaptcha: string | null;
  refreshGamesCaptcha: string | null;
  pickerModalOpen: boolean;
  welcomeModalOpen: boolean;
}

const INITIAL_STATE: UIState = {
  refreshGamesModalOpen: false,
  shouldShowOutputPanel: false,
  queryCaptcha: null,
  refreshGamesCaptcha: null,
  pickerModalOpen: false,
  welcomeModalOpen: false,
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
    showPickerModal: (state) => {
      state.pickerModalOpen = true;
    },
    hidePickerModal: (state) => {
      state.pickerModalOpen = false;
    },
    showWelcomeModal: (state) => {
      state.welcomeModalOpen = true;
    },
    hideWelcomeModal: (state) => {
      state.welcomeModalOpen = false;
    },
  },
});

export const {
  openRefreshModal,
  closeRefreshModal,
  setShouldShowOutputPanel,
  setQueryCaptcha,
  setRefreshGamesCaptcha,
  showPickerModal,
  hidePickerModal,
  showWelcomeModal,
  hideWelcomeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
