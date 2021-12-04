import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Query, ServerResponse } from "shared/types";
import { runQuery } from "../services/query";

type OutputState = {
  loading: boolean;
  error?: string;
  data?: ServerResponse;
};

export const executeQuery = createAsyncThunk(
  "queryApi",
  async (params: { query: Query; captcha: string }) => {
    const res = await runQuery(params.query, params.captcha);
    return res.data;
  }
);

const INITIAL_STATE: OutputState = {
  loading: false,
};

const queryApiSlice = createSlice({
  name: "queryApi",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executeQuery.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      delete state.error;
    });
    builder.addCase(executeQuery.rejected, (state, action) => {
      delete state.data;
      state.loading = false;
      state.error = JSON.stringify(action.payload);
    });
    builder.addCase(executeQuery.pending, (state) => {
      state.loading = true;
      delete state.data;
      delete state.error;
    });
  },
});

export default queryApiSlice.reducer;
