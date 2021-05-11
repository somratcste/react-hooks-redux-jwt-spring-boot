import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./slices/QuoteSlice";

const store = configureStore({
    reducer: {quote: quoteSlice.reducer}
})

export default store;