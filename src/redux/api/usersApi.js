import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url:'/users'
      }),
    }),
    createUser: builder.mutation({
        query: (users) => ({
          url: '/api/user',
          method: 'POST',
          body: { users },
        }),
      }),
  }),
});

export const { useGetUsersQuery } = usersApi;
