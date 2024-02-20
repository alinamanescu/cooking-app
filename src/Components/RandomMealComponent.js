import React from "react";
import { getRandomMeal } from "../assets/data/meals";
import { convertToCurrency } from "../helpers/functions";

const RandomMealComponent = (props) => {

  const {name, price} = getRandomMeal();
    return(
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-outline-dark rounded-4 shadow-lg">
        <div className="d-flex flex-column h-100 p-2 pb-3 text-dark text-shadow-1">
          <h3 className="pt-2 mt-2 mb-4 lead lh-1 fw-bold">{name}</h3>
          <ul className="d-flex mt-auto">
            <li className="me-auto">
              <small className="font-monospace">{convertToCurrency(price, '4.6', 'RON')}</small>
            </li>
            <li className="d-flex align-items-center me-3">
              <small>Item</small>
            </li>
            <li className="d-flex align-items-center">
              <small>Item</small>
            </li>
          </ul>
        </div>
       </div>
      </div>
    )
}

export default RandomMealComponent;