import { configureStore } from "@reduxjs/toolkit";
import dataDragonReducer from "./dataDragonReducer";
import queryApiReducer from "./queryApiReducer";
import queryReducer from "./queryReducer";
import uiReducer from "./uiReducer";

export const store = configureStore({
  reducer: {
    dataDragon: dataDragonReducer,
    ui: uiReducer,
    query: queryReducer,
    queryApi: queryApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
