import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FilterId,
  GroupId,
  OperationId,
  Query,
  SortId,
  StarterId,
  SubjectId,
} from "../../shared/types";

const INITIAL_STATE: Query = {
  starter: {
    id: StarterId.PatchAndRegion,
    args: ["11.24", "EUW1"],
  },
  filters: {},
  group: {
    id: GroupId.Champion,
    args: null,
  },
  operation: {
    id: OperationId.AverageDamageDealtToChampions,
    args: null,
  },
  sort: SortId.Descending,
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
    updateOrAddOperation: (
      state,
      action: PayloadAction<{
        id: OperationId;
        args: any;
      }>
    ) => {
      state.operation = action.payload;
    },
    removeOperation: (state) => {
      delete state.operation;
    },
    updateOrAddSort: (state, action: PayloadAction<SortId>) => {
      state.sort = action.payload;
    },
    removeSort: (state) => {
      delete state.sort;
    },
    resetQuery: (state) => {
      state.filters = {};
      delete state.subject;
      delete state.group;
      delete state.operation;
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
  updateOrAddOperation,
  removeOperation,
  updateOrAddSort,
  removeSort,
  resetQuery,
} = querySlice.actions;

export default querySlice.reducer;
