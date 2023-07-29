import { useContext, useState } from 'react';

import Modal from '../UI/Modal/Modal';
import CartItem from '../Cart/CartItem';
import classes from './Cart.module.css';
import cartContext from '../../store/cart-context';
import AddCart from './AddCart';

const Cart = (props) => {
  const [addOrder, setAddOrder] = useState(false);

  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const orderHandler = () => {
    setAddOrder(true);
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderActions = <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {addOrder && <AddCart onCancel={props.onClose}/>}
      {!addOrder && orderActions}
    </Modal>
  );
};

export default Cart;
