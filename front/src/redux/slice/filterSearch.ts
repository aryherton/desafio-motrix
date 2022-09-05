import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filterSearch',
  initialState: {
    isChecked: false,
    searchDate: '',
    searchPriority: 'all',
    searchText: '',
    addTask: false,
  },

  reducers: {
    changeIsChecked: (state, { payload }) => {
      return { ...state, isChecked: payload };
    },
    changeSearchDate: (state, { payload }) => {
      return { ...state, searchDate: payload };
    },
    changeSearchPriority: (state, { payload }) => {
      return { ...state, searchPriority: payload };
    },
    changeSearchText: (state, { payload }) => {
      return { ...state, searchText: payload };
    },
    changeAddTask: (state, { payload }) => {
      return { ...state, addTask: payload };
    }
  },
})

export const {
  changeIsChecked,
  changeSearchDate,
  changeSearchText,
  changeSearchPriority,
  changeAddTask,
} = slice.actions;

export const selectFilterSearch = (state: { isChecked: any; }) => state.isChecked;
export const selectFilterDate = (state: { searchDate: any; }) => state.searchDate;
export const selectFilterSearchPriority = (state: { searchPriority: any; }) => state.searchPriority;
export const selectFilterSearchText = (state: { searchText: any; }) => state.searchText;
export const selectAddTask = (state: { addTask: any; }) => state.addTask;

export default slice.reducer;
