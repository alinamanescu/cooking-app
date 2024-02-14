import React from 'react';
import TextComponent from '../Components/TextComponent';
import RandomMealComponent from '../Components/MealComponent';

const RandomMealsContainer = () => {
  return (
    <>
            <TextComponent text="Random Meals Area" />
            
            <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-5">
              <RandomMealComponent randomMealNumber="1" text="Meal Number -" />
              <RandomMealComponent randomMealNumber="2" text="Meal Number -" />
              <RandomMealComponent randomMealNumber="3" text="Meal Number -" />
              <RandomMealComponent randomMealNumber="4" text="Meal Number -" />
            </div>
    </>
  )
}

export default RandomMealsContainer