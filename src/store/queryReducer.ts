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
    args: "11.24",
  },
  filters: {},
  group: {
    id: GroupId.Champion,
    args: null,
  },
  operations: {
    [OperationId.AverageDamageDealtToChampions]: null,
  },
  sort: {
    id: OperationId.AverageDamageDealtToChampions,
    args: false,
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
    updateOrAddOperation: (
      state,
      action: PayloadAction<{
        id: OperationId;
        args: any;
      }>
    ) => {
      state.operations[action.payload.id] = action.payload.args || null;
    },
    removeOperation: (state, action: PayloadAction<OperationId>) => {
      delete state.operations[action.payload];

      // also remove current sort if associated with this operation
      if (state.sort && state.sort.id === action.payload) delete state.sort;
    },
    updateOrAddSort: (
      state,
      action: PayloadAction<{
        id: OperationId;
        args: any;
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
      state.operations = {};
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
