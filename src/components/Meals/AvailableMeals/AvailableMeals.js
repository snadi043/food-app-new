import {useEffect, useState} from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
const [meals, setMeals] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [HttpError, setHttpError] = useState();

useEffect(() => {
  const fetchMeals = async () => {
    const apiEndpoint = await fetch('https://reactbackend-eaf69-default-rtdb.firebaseio.com/meals.json');

    if(!apiEndpoint.OK){
      throw new Error('Something went wrong....');
    }

    const resultData = await apiEndpoint.json();

    if(isLoading){
      return <section className={classes.loading}>Loading...</section>
    }
    const loadedMeals = [];
    for(const key in resultData){
      loadedMeals.push({
        id: key,
        name: resultData[key].name,
        description: resultData[key].description,
        price: resultData[key].price
      });
  }
  setMeals(loadedMeals);
  setIsLoading(false);
};

  fetchMeals().catch((error) => {
    setIsLoading(false);
    setHttpError(error.message);
  });
 }, []);

if(isLoading){
  return(
    <section className={classes.loading}>
      <p>Loading...</p>
    </section>
  )
}

if(HttpError){
  return(
    <section className={classes.loading}>
      <p>{HttpError}</p>
    </section>
  )
}

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
