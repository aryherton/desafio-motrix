import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filterSearch',
  initialState: {
    isChecked: false,
    searchDate: 'asc',
    searchStatus: '',
    searchText: '',
  },

  reducers: {
    changeIsChecked: (state, { payload }) => {
      return { ...state, isChecked: payload };
    },
    changeSearchDate: (state, { payload }) => {
      return { ...state, searchDate: payload };
    },
    changeSearchStatus: (state, { payload }) => {
      return { ...state, searchStatus: payload };
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
  changeSearchStatus,
} = slice.actions;

export const selectFilterSearch = (state: { isChecked: any; }) => state.isChecked;
export const selectFilterDate = (state: { searchDate: any; }) => state.searchDate;
export const selectFilterSearchStatus = (state: { searchStatus: any; }) => state.searchStatus;
export const selectFilterSearchText = (state: { searchText: any; }) => state.searchText;

export default slice.reducer;
