import QuoteDataService from '../../services/QuoteDataService';
import { quoteActions } from '../slices/QuoteSlice';

export const createQuote = (quoteData) => async (dispatch) => {
    try {
        const response = await QuoteDataService.create(quoteData);
        dispatch(quoteActions.createQuote(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getAllQuotes = () => async (dispatch) => {
    try {
        const response = await QuoteDataService.getAll();
        dispatch(quoteActions.retrieveQuotes(response.data));
        return Promise.resolve(response.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getQuote = (id) => async (dispatch) => {
    try {
        const response = await QuoteDataService.get(id);
        dispatch(quoteActions.getQuote(response.data));
        return Promise.resolve(response.data);
    } catch (err) {
        return Promise.reject(err);
    }
};