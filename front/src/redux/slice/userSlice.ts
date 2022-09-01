import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: '',
  },

  reducers: {
    changeUser: (state, { payload }) => {
      return { ...state, user: payload };
    },
  },
})

export const { changeUser } = slice.actions;

export const selectUser = (state: { user: any; }) => state.user;

export default slice.reducer;
