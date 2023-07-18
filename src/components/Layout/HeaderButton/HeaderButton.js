import React, {useContext} from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderButton.module.css';
import cartContext from '../../../store/cart-context';

const HeaderButton = (props) => {
    const cartCtx = useContext(cartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    })
    return(
       <button type="button" className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
       </button>
    )
}
export default HeaderButton;