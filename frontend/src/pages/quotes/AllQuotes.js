import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuoteItem from '../../components/quotes/QuoteItem';
import { getAllQuotes } from '../../store/actions/quotes';

const AllQuotes = () => {
    const quotes = useSelector((state) => state.quote.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllQuotes());
    }, []);

    return (
        <>
            {
                quotes && quotes.map((quote) => (
                <QuoteItem 
                    key={quote.id}
                    quote={quote}
                />
                ))
            }
        </>
    );
};

export default AllQuotes;