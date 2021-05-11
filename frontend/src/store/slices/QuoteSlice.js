import { createSlice } from "@reduxjs/toolkit";
import QuoteDataService from "../../services/QuoteDataService";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        items: []
    },
    reducers: {
        retrieveQuotes(state, action) {
            return action.payload;
        }
    }
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;