import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuoteList from '../../components/quotes/QuoteList';
import { getAllQuotes } from '../../store/actions/quotes';

const AllQuotes = () => {
    const quotes = useSelector((state) => state.quote.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllQuotes());
    }, []);

    return (
        <>
            <QuoteList quotes={quotes} />
        </>
    );
};

export default AllQuotes;