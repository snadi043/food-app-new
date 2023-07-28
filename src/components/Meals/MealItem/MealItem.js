import React, {useContext} from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import cartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(cartContext);

    const addTocartHandler = amount => {
        cartCtx.addItems({
            id: props.id,
            amount: amount,
            price: props.price,
        });
    };
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addTocartHandler}/>
            </div>
        </li>
    )
}
export default MealItem;