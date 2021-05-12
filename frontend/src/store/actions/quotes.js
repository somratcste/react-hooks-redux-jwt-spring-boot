import QuoteDataService from '../../services/QuoteDataService'
import { quoteActions } from '../slices/QuoteSlice';

export const createQuote = (quoteData) => async (dispatch) => {
    try {
        const response = await QuoteDataService.create(quoteData);
        dispatch(quoteActions.createQuote(response.data));

    } catch (error) {
        console.log(error);
    }
}

export const getAllQuotes = () => async (dispatch) => {
    try {
      const response = await QuoteDataService.getAll();
      dispatch(quoteActions.retrieveQuotes(response.data));

    } catch (err) {
      console.log(err);
    }
};
  