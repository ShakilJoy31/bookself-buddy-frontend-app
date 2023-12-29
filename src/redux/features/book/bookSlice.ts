import { createSlice } from '@reduxjs/toolkit';

import { INewBook } from '../../../types/globalTypes';

interface IBook {
    books: INewBook[];
}

const initialState = {
    books: []
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {}
})


export default bookSlice.reducer; 