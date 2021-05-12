import QuoteDataService from '../../services/QuoteDataService'
import { quoteActions } from '../slices/QuoteSlice';

export const createQuote = (title, author, description) => async (dispatch) => {
    try {
        const response = await QuoteDataService.create({title, author, description});
        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
}

export const getAllQuotes = () => async (dispatch) => {
    try {
      const response = await QuoteDataService.getAll();
      dispatch(quoteActions.retrieveQuotes(response.data));
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
};
  