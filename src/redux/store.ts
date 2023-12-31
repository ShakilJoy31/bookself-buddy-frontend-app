// store.ts

import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/apiSlice';
import bookReducer from './features/book/bookSlice';
import userReducer from './features/user/userSlice'; // Import the user slice

const store = configureStore({
    reducer: {
        book: bookReducer,
        user: userReducer, // Include the user slice in the store
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;