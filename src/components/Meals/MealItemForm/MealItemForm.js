import React, {useRef, useState} from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const[enteredInputAmountValid, setEnteredInputAmountValid] = useState(true);

    const amountInputRef = useRef(); 

    const SubmitHandler = (event) => {
        event.preventDefault();

        const enteredInputValue = amountInputRef.current.value;
        const numberEnteredInputValue = +enteredInputValue;

        if(enteredInputValue < 1 || enteredInputValue.trim().length  === 0 || enteredInputValue > 5){
            setEnteredInputAmountValid(false);
            return;
        }
        
        props.onAddToCart(numberEnteredInputValue);

    }
    return(
        <form className={classes.form} onSubmit={SubmitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: 'amount_' + props.id,
                defaultValue: '1',
                type: 'number',
                min: '1',
                max: '5',
                step: '1'
            }}/>
            {!enteredInputAmountValid && <p>Please enter a value from (1-5)</p>}
            <button type="button" >+ Add</button>
        </form>
    )
}
export default MealItemForm;
