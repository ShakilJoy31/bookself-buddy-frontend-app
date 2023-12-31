// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {}, // Initialize empty for user data
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload; // Update user info in state
        },
        // Other user-related reducers...
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;