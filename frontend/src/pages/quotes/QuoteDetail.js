import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ActiveQuote from "../../components/quotes/ActiveQuote";
import { getQuote } from "../../store/actions/quotes";
import { quoteActions } from "../../store/slices/QuoteSlice";

const QuoteDetail = (props) => {
    const params = useParams();
    const { quoteId } = params;
    const dispatch = useDispatch();
    const activeQuote = useSelector((state) => state.quote.currentItem);

    useEffect(() => {
        dispatch(getQuote(quoteId));

        return () => {
            dispatch(quoteActions.setQuote());
        }
    }, [quoteId]);

    return (
        <Fragment>
            <ActiveQuote quote={activeQuote} />
        </Fragment>
    );
};

export default QuoteDetail;