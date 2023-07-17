import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                defaultValue: '1',
                type: 'number',
                min: '1',
                max: '5',
                step: '1'
            }}/>
            <button type="button">+ Add</button>
        </form>
    )
}
export default MealItemForm;