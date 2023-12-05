import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import usersReducer from './features/usersSlice';

export const store = configureStore({
    reducer: {
      [api.reducerPath]:api.reducer,
      users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });
