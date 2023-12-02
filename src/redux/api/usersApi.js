import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query(
      {
        query: ({ pagination }) => {
            const {searchTerm,domain,gender,available,page} = pagination
            const queryParams =`searchTerm=${searchTerm?searchTerm:""}${domain&&`&domain=${domain}`}${gender&&`&gender=${gender}`}${available&&`&available=${available}`}${page&&`&page=${page}`}
            `
            return {
              url: `/users/?${queryParams}`
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
