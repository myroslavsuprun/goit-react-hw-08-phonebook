import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().credentials.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['Credentials'],

  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => {
        return {
          url: `/users/signup`,
          method: 'POST',
          body: credentials,
        };
      },
      providesTags: ['Credentials'],
    }),
    login: builder.mutation({
      query: credentials => {
        return {
          url: `/users/login`,
          method: 'POST',
          body: credentials,
        };
      },
      providesTags: ['Credentials'],
    }),

    logout: builder.mutation({
      query: () => {
        return {
          url: `/users/logout`,
          method: 'POST',
        };
      },
      providesTags: ['Credentials'],
    }),
    currentUser: builder.query({
      query: () => {
        return {
          url: 'users/current',
          method: 'GET',
        };
      },
      providesTags: ['Credentials'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCurrentUserQuery,
} = authApi;
