import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    pagination: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setUsers, setPagination } = usersSlice.actions;
export default usersSlice.reducer;
