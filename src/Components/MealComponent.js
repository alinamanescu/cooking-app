import React from "react";

const MealComponent = (props) => {
    return(
      <div className="col">
        {/*<div className="feature col border rounded-2 p-4">
          <p className="text-body-emphasis">{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>*/}

        <div style={{ display:"flex", alignItems: "center"}}>
            <div className="w-100 position-relative" style={{ zIndex: '-1' }}>
                <div style={{
                      backgroundColor: "grey", 
                      borderRadius: "50%", 

                      width: '100px',
                      height: '100px',
                      top: 0, 
                      left: "-50px",
                    }} 
                className="position-absolute border-2">
                  </div>
                    <div className="w-75">
                      <div style={{border: '2px solid black', paddingLeft: "80px"}}>
                        <p className="text-body-emphasis">{props.title}</p>
                        <p className="small">{props.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
    )
}

export default MealComponent;