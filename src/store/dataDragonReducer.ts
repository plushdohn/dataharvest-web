import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Rune = {
  name: string;
  imageUrl: string;
};

type Champion = {
  name: string;
  imageUrl: string;
};

type Item = {
  name: string;
  imageUrl: string;
};

export interface DataDragonState {
  champions: {
    [key: string]: Champion;
  };
  runes: {
    [key: number]: Rune;
  };
  items: {
    [key: number]: Item;
  };
  mythics: string[];
  keystoneIds: number[];
}

const INITIAL_STATE: DataDragonState = {
  champions: {},
  runes: {},
  items: {},
  mythics: [],
  keystoneIds: [],
};

const dataDragonSlice = createSlice({
  name: "dataDragon",
  initialState: INITIAL_STATE,
  reducers: {
    updateAllDataDragon: (state, action: PayloadAction<DataDragonState>) => {
      return action.payload;
    },
  },
});

export const { updateAllDataDragon } = dataDragonSlice.actions;

export default dataDragonSlice.reducer;
