import React, { Fragment } from "react";
import Card from "../ui/Card";
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
    return (
        <Fragment>
            <Card>
                <form>
                    <div className={classes.control}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Description</label>
                        <textarea id='text' rows='5'></textarea>
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