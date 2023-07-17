import React from 'react';
import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';
import Cart from '../Cart/Cart';

const Meals = () => {
    return(
        <Cart>
            <MealsSummary/>
            <AvailableMeals/>
        </Cart>
    )
}
export default Meals;