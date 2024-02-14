import React from "react";

const MealComponent = (props) => {
    return(
      <div className="feature col border rounded-2">
        <p className="text-body-emphasis">{props.title}</p>
        <p>{props.description}</p>
      </div>
    )
}

export default MealComponent;