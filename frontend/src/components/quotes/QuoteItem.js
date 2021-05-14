import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeQuote } from '../../store/actions/quotes';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
    const dispatch = useDispatch();

    const removeQuoteHandler = (id) => {
        dispatch(removeQuote(id));
    };

    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <h3>{props.quote.title}</h3>
                </blockquote>
                <p>{props.quote.description}</p>
                <figcaption>{props.quote.username}</figcaption>
            </figure>
            <Link className={`btn ${classes.ml20}`} to={`/quotes/${props.id}`}>
                View
            </Link>
            <button className='btn' onClick={() => removeQuoteHandler(props.id)}>Delete</button>
        </li>
    );
};

export default QuoteItem;