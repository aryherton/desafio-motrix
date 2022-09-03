import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filterSearch',
  initialState: {
    isChecked: false,
    searchDate: 'asc',
    searchPriority: 'all',
    searchText: '',
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
  },
})

export const {
  changeIsChecked,
  changeSearchDate,
  changeSearchText,
  changeSearchPriority,
} = slice.actions;

export const selectFilterSearch = (state: { isChecked: any; }) => state.isChecked;
export const selectFilterDate = (state: { searchDate: any; }) => state.searchDate;
export const selectFilterSearchPriority = (state: { searchPriority: any; }) => state.searchPriority;
export const selectFilterSearchText = (state: { searchText: any; }) => state.searchText;

export default slice.reducer;
