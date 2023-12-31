import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

//! Production Url
const baseUrl = 'https://bookself-buddy-backend-app.onrender.com/api/v1/bookself-user'

//! Development Url
// const baseUrl = 'http://localhost:5000/api/v1/bookself-user'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    // ! Query Operations
    getBooks : builder.query({
      query: () => `/get-books`,
    }),
    getSingleBook : builder.query({
      query: (id) => ({url: `/get-book/${id}`})
    }),



    // ! Mutation Operations
    addUser: builder.mutation({
      query: (payload) => ({
        url: '/create-bookself-user',
        method: 'POST',
        body: {data: payload}
      }),
    }),

    addBook: builder.mutation({
      query: (payload) => ({
        url: '/create-new-book',
        method: 'POST',
        body: {data: payload}
      }),
    }),
    getSignedInUser: builder.mutation({
      query: (getData)=> ({
      url: '/get-loggedin-user',
      method: "POST",
      body: {email: getData.email, password: getData.password}})
    }),





  }),
})
export const { useGetBooksQuery, useGetSingleBookQuery, useAddUserMutation, useAddBookMutation, useGetSignedInUserMutation } = api;


// export const signupApi = createApi({
//   reducerPath: 'signupApi',
//   baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
//   endpoints: (builder) => ({
//     addUser: builder.mutation({
//       query: (userData) => ({
//         url: '/create-bookself-user',
//         method: 'POST',
//         body: userData,
//       }),
//     }),
//   }),
// });


