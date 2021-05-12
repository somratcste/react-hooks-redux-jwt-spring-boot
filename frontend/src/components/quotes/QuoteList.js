import { Fragment } from "react";
import Card from "../ui/Card";
import QuoteItem from "./QuoteItem";
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
    return (
        <Card>
            <ul className={classes.list}>
                {props.quotes.map((quote) => (
                    <QuoteItem
                        id={quote.id}
                        quote={quote}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default QuoteList;