import React from "react";

const RandomMealComponent = (props) => {
    return(
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-outline-dark rounded-4 shadow-lg">
        <div className="d-flex flex-column h-100 p-2 pb-3 text-dark text-shadow-1">
          <h3 className="pt-2 mt-2 mb-4 lead lh-1 fw-bold">{props.text} {props.randomMealNumber}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <small>Item</small>
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