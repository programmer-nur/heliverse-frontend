import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/usersApi';
import usersReducer from './features/usersSlice';

export const store = configureStore({
    reducer: {
      [usersApi.reducerPath]:usersApi.reducer,
      users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
  });
