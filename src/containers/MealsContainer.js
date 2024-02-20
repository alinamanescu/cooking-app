import React from 'react';
import TextComponent from '../Components/TextComponent';
import MealComponent from '../Components/MealComponent';
import { meals } from'../assets/data/meals';


const MealsContainer = () => {
    return (
      <>
          <TextComponent text="Meals results" />
          
          <div className="row g-4 py-5 rox-cols-1 row-cols-lg-3">
          {meals &&
          meals.map((mealData) => (
            <MealComponent 
            title={mealData.name.toUpperCase()}
            description={`${mealData.description.slice(0,15)}...`}
            price={mealData.price}
            key={mealData.id}
            />
          ))}
        </div>
      </>
    );
};

export default MealsContainer