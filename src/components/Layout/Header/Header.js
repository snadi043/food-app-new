import React, { Fragment } from 'react';
import mealImage from '../../../assets/meals.jpg';
import HeaderButton from '../HeaderButton/HeaderButton';
import classes from './Header.module.css';

const Header = () => {
    return(
       <Fragment>
        <header className={classes.header}>
            <h1>Tasty Tables</h1>
            <HeaderButton/>
        </header>
        <div className={classes['main-image']} >
            <img src={mealImage} alt="Food table"/>
        </div>
       </Fragment>
    )
}
export default Header;