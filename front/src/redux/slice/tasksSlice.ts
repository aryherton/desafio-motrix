import { createSlice } from '@reduxjs/toolkit';

import { ITasks } from '../../interface/ITasks';

export const slice = createSlice({
  name: 'tasks',
  initialState: {
    allTasks: [],
    filterTasks: [],
    historyTasks: '',
  },

  reducers: {
    changeAllTasks: (state, { payload }) => {
      return { ...state, allTasks: payload };
    },
    changeFilterTasks: (state, { payload }) => {
      return { ...state, filterTasks: payload };
    },
    changeHistory: (state, { payload }) => {
      return { ...state, historyTasks: payload };
    }
  },
})

export const {
  changeAllTasks,
  changeFilterTasks,
  changeHistory,
} = slice.actions;

export const selectAllTasks = (state: { allTasks: ITasks[]; }) => state.allTasks;
export const selectFilterTasks = (state: { filterTasks: ITasks[]; }) => state.filterTasks;
export const selectHistory = (state: { historyTasks: ITasks; }) => state.historyTasks;

export default slice.reducer;
