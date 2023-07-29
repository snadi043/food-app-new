import React from 'react';
import classes from './AddCart.module.css';

const AddCart = (props) => {
    const SubmitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" id='address'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postalcode'>Postal Code</label>
                <input type="text" id='postalcode'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type="text" id='city'/>
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    )
}
export default AddCart;