import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FilterId,
  GroupId,
  OperationId,
  Query,
  StarterId,
  SubjectId,
} from "../../shared/types";

const INITIAL_STATE: Query = {
  starter: {
    id: StarterId.Patch,
    args: "11.23",
  },
  filters: {},
  operations: [OperationId.AverageDamageDealtToChampions],
  group: {
    id: GroupId.Champion,
    args: null,
  },
  sort: {
    id: OperationId.AverageDamageDealtToChampions,
    ascending: false,
  },
};

const querySlice = createSlice({
  name: "query",
  initialState: INITIAL_STATE,
  reducers: {
    updateOrAddStarter: (
      state,
      action: PayloadAction<{
        id: StarterId;
        args: any;
      }>
    ) => {
      state.starter = action.payload;
    },
    updateOrAddFilter: (
      state,
      action: PayloadAction<{
        id: FilterId;
        args: any;
      }>
    ) => {
      state.filters[action.payload.id] = action.payload.args;
    },
    removeFilter: (state, action: PayloadAction<FilterId>) => {
      delete state.filters[action.payload];
    },
    updateOrAddSubject: (
      state,
      action: PayloadAction<{
        id: SubjectId;
        args: any;
      }>
    ) => {
      state.subject = action.payload;
    },
    removeSubject: (state) => {
      delete state.subject;
    },
    updateOrAddGroup: (
      state,
      action: PayloadAction<{
        id: GroupId;
        args: any;
      }>
    ) => {
      state.group = action.payload;
    },
    removeGroup: (state) => {
      delete state.group;
    },
    addOperation: (state, action: PayloadAction<OperationId>) => {
      if (!state.operations.includes(action.payload))
        state.operations.push(action.payload);
    },
    removeOperation: (state, action: PayloadAction<OperationId>) => {
      state.operations = state.operations.filter((el) => el !== action.payload);

      if (state.sort && state.sort.id === action.payload) {
        delete state.sort;
      }
    },
    updateOrAddSort: (
      state,
      action: PayloadAction<{
        id: OperationId;
        ascending: boolean;
      }>
    ) => {
      state.sort = action.payload;
    },
    removeSort: (state) => {
      delete state.sort;
    },
    resetQuery: (state) => {
      state.filters = {};
      delete state.subject;
      delete state.group;
      state.operations = [];
      delete state.sort;
    },
  },
});

export const {
  updateOrAddStarter,
  updateOrAddFilter,
  removeFilter,
  updateOrAddSubject,
  removeSubject,
  updateOrAddGroup,
  removeGroup,
  addOperation,
  removeOperation,
  updateOrAddSort,
  removeSort,
  resetQuery,
} = querySlice.actions;

export default querySlice.reducer;
