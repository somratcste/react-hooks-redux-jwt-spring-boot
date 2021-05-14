import classes from './ActiveQuote.module.css';

const ActiveQuote = (props) => {
    return (
        <figure className={classes.quote}>
            <h2>{props.quote.title}</h2>
            <p>{props.quote.description}</p>
            <figcaption>{props.quote.username}</figcaption>
        </figure>
    );
};

export default ActiveQuote;