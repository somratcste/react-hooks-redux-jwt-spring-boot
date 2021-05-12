import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import QuoteForm from "../../components/quotes/QuoteForm";
import { createQuote } from "../../store/actions/quotes";

const NewQuote = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const addQuoteHandler = (title, description) => {
        dispatch(createQuote(title, description))
            .then(data => {
                history.push('/quotes');
            })
            .catch(error => {
                console.log("error " + error);
            });
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )

}

export default NewQuote;