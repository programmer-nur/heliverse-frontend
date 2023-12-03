import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER }),
  endpoints: (builder) => ({
    getUsers: builder.query(
      {
        query: ({ pagination }) => {
            const {searchTerm,domain,gender,available,page} = pagination
            const queryParams =`searchTerm=${searchTerm&&searchTerm}${domain&&`&domain=${domain}`}${gender&&`&gender=${gender}`}${available&&`&available=${available}`}
            `
            return {
              url: searchTerm || domain || gender || available?`/users/?${queryParams}`:`/users/?page=${page}`
            }
        },
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
