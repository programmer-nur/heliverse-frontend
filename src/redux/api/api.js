import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER }),
  tagTypes:['team'],
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
    getTeams: builder.query(
      {
        query: () => {
            return {
              url: '/team'
            }
        },
        providesTags:['team']
      }),
    getSingleTeam:builder.query({
      query: (id) => {
        return {
          url: `/team/${id}`
        }
       },
    }),
    createUser: builder.mutation({
      query: (users) => ({
        url: '/user',
        method: 'POST',
        body: { users },
      }),
    }),
    createTeam: builder.mutation({
      query: (users) => ({
        url: '/team',
        method: 'POST',
        body: users ,
      }),
      invalidatesTags:['team']
    }),
  }),
});

export const { useGetUsersQuery,useGetTeamsQuery,useCreateTeamMutation,useGetSingleTeamQuery } = api;
