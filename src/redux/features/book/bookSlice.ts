import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: []
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        // Other reducers...
    },
});

export default bookSlice.reducer;
