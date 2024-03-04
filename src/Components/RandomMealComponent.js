import React, { useEffect, useState } from "react";
// import { getRandomMeal } from "../assets/data/meals";
// import { convertToCurrency } from "../helpers/functions";

const RandomMealComponent = (props) => {

  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((responseJSON) => setMealData(responseJSON.meals[0]));
  }, []);

    return (
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-outline-dark rounded-4 shadow-lg">
        <div className="d-flex flex-column h-100 p-2 pb-3 text-dark text-shadow-1">
          <h3 className="pt-2 mt-2 mb-4 lead lh-1 fw-bold">{mealData.strMeal}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <small className="text-success font-monospace">{mealData.strArea}</small>
            </li>
          </ul>
        </div>
       </div>
      </div>
    );
};

export default RandomMealComponent;