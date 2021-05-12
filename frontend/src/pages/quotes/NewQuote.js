import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import QuoteForm from "../../components/quotes/QuoteForm";
import { createQuote } from "../../store/actions/quotes";
import { quoteActions } from "../../store/slices/QuoteSlice";

const NewQuote = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const addQuoteHandler = (title, description) => {
        dispatch(createQuote(title, description));
        history.push('/quotes');
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )

}

export default NewQuote;