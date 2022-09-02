import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'tasks',
  initialState: {
    allTasks: [],
    filterTasks: [],
  },

  reducers: {
    changeAllTasks: (state, { payload }) => {
      return { ...state, allTasks: payload };
    },
    changeFilterTasks: (state, { payload }) => {
      return { ...state, filterTasks: payload };
    },
  },
})

export const {
  changeAllTasks,
  changeFilterTasks,
} = slice.actions;

export const selectAllTasks = (state: { allTasks: any; }) => state.allTasks;
export const selectFilterTasks = (state: { filterTasks: any; }) => state.filterTasks;

export default slice.reducer;
