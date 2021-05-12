import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <h3>{props.quote.title}</h3>
                </blockquote>
                <p>{props.quote.description}</p>
                <figcaption>{props.quote.username}</figcaption>
            </figure>
            <Link className='btn' to={`/quotes/${props.id}`}>
                View
            </Link>
        </li>
    );
};

export default QuoteItem;