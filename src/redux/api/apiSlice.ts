import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://bookself-buddy-backend-app.onrender.com/api/v1'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/bookself-user` }),
  endpoints: (builder) => ({
    getBooks : builder.query({
      query: () => `/get-bookself-user`,
    }),
  }),
})
export const { useGetBooksQuery } = api;

