import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        items: [],
        currentItem: {}
    },
    reducers: {
        retrieveQuotes(state, action) {
            state.items = action.payload;
        },
        createQuote(state, action) {
            state.items.unshift(action.payload);
        },
        getQuote(state, action) {
            state.currentItem = action.payload;
        },
        setQuote(state, action) {
            state.currentItem = {};
        }
    }
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;