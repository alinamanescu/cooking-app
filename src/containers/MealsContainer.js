import React from 'react';
import TextComponent from '../Components/TextComponent';
import MealComponent from '../Components/MealComponent';

const MealsContainer = () => {
    return (
        <div className="container px-4 py-5" id="featured-3">
          <TextComponent text="Meals results" />
          
          <div className="row g-4 py-5 rox-cols-1 row-cols-lg-3">
          <MealComponent title="Meal 1" description="Insert description text"/>
          <MealComponent title="Meal 2" description="Insert description text"/>
          <MealComponent title="Meal 3" description="Insert description text"/>
          <MealComponent title="Meal 4" description="Insert description text"/>
          <MealComponent title="Meal 5" description="Insert description text"/>
          <MealComponent title="Meal 6" description="Insert description text"/>
          <MealComponent title="Meal 7" description="Insert description text"/>
          </div>
        </div>
    )
}

export default MealsContainer