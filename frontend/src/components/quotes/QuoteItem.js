import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
    return (
        <li className={classes.item}>
            <h3>{props.quote.title}</h3>
            <figure>
                <blockquote>
                    <p>{props.quote.description}</p>
                </blockquote>
                <figcaption>{props.quote.username}</figcaption>
            </figure>
            <Link className='btn' to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    );
};

export default QuoteItem;