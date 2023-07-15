import React, { Fragment } from 'react';
import img from '../../assets/meals.jpg';
import CartIcon from '../Cart/CartIcon';
import './Header.module.css';

const Header = () => {
    return(
        <Fragment>
            <Header>
                <h1>Tasty Tables</h1>
                <img src={img} alt="Meals on Tables"/>
            </Header>
            <div>
                <CartIcon/>
            </div>
        </Fragment>       
    )
}
export default Header;