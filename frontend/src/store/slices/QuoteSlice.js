import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        items: []
    },
    reducers: {
        retrieveQuotes(state, action) {
            state.items = action.payload;
        }
    }
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;