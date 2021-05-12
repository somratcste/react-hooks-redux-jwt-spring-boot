import React, { Fragment, useRef } from "react";
import Card from "../ui/Card";
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const description = descriptionInputRef.current.value;
        props.onAddQuote({
            title,
            description
        });
    };

    return (
        <Fragment>
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' ref={titleInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Description</label>
                        <textarea id='text' rows='5' ref={descriptionInputRef} ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default QuoteForm;