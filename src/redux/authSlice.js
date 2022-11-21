import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState();

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => {
        return {
          url: `/users/signup`,
          method: 'POST',
          body: credentials,
        };
      },
    }),
    login: builder.mutation({
      query: credentials => {
        return {
          url: `/users/login`,
          method: 'POST',
          body: credentials,
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
