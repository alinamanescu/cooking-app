import React from 'react';
import TextComponent from '../Components/TextComponent';
import RandomMealComponent from '../Components/RandomMealComponent';

const RandomMealsContainer = () => {
  return (
    <>
            <TextComponent text="Try something new" />
            
            <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-5">
              <RandomMealComponent/>
              <RandomMealComponent/>
              <RandomMealComponent/>
            </div>
    </>
  )
}

export default RandomMealsContainer;