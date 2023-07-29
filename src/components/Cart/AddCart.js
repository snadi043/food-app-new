import React, {useRef} from 'react';
import classes from './AddCart.module.css';

const inputIsNotValid = value => value.trim() === '';
const postalCodeIsValid = value => value.trim().length === 5;

const AddCart = (props) => {

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const SubmitHandler = (event) => {
        event.preventDefault();

        const enteredNameInput = !inputIsNotValid(nameInputRef.current.value);
        const enteredAddressInput = !inputIsNotValid(addressInputRef.current.value);
        const enteredpostalCodeInput = !inputIsNotValid(postalCodeInputRef.current.value);
        const enteredCityInput = !postalCodeIsValid(postalCodeInputRef.current.value);

        const formIsValid = enteredNameInput && enteredAddressInput && enteredpostalCodeInput && enteredCityInput;

        if(!formIsValid){
            return;
        }

        if(formIsValid){
            const finalEnteredInputData = {
            name: enteredNameInput,
            address: enteredAddressInput,
            postalCode: enteredpostalCodeInput,
            city: enteredCityInput,
        }
        console.log(finalEnteredInputData);
    }
}

    return(
        <form onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Street Address</label>
                <input type="text" id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postalcode'>Postal Code</label>
                <input type="text" id='postalcode' ref={postalCodeInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type="text" id='city' ref={cityInputRef}/>
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    )
}
export default AddCart;