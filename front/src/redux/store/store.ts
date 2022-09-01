import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slice/userSlice';
import filterSearchReducer from '../slice/filterSearch';
import tasksSlice from '../slice/tasksSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    filterSearch: filterSearchReducer,
    tasks: tasksSlice,
  },
})
