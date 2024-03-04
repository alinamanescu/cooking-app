import React, { useEffect, useState } from "react";
import TextComponent from "../Components/TextComponent";
import MealComponent from "../Components/MealComponent";
import SearchInput from "../Components/SearchInput";
import { Link } from "react-router-dom";

const MealsContainer = () => {
  const [title, setTitle] = useState("Meals results");
  const [meals, setMeals] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setMeals(responseJSON.meals));
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setTitle(`Results for: ${event.target.value}`);
  };

  console.log(meals);

  return (
    <>
      <TextComponent text={title} />
      <SearchInput searchValue={searchValue} handleInputChange={handleInputChange} />
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {meals
          ? meals.map((mealData) => (
              <Link to={`/meals/${mealData.idMeal}`}>
                <MealComponent
                  title={mealData.strMeal}
                  category={mealData.strCategory}
                  area={mealData.strArea}
                  tag={mealData.strTags}
                  imgSrc={mealData.strMealThumb}
                  id={mealData.idMeal}
                  key={mealData.idMeal}
                />
              </Link>
            ))
          : "Loading..."}
      </div>
    </>
  );
};
export default MealsContainer;