import React from "react";


const MealComponent = (props) => {
    return(
      <div className="col">
        {/* TODO for later: Category & Area should display filtered meal results*/}

        <div style={{ display:"flex", alignItems: "center"}}>
            <div className="w-100 position-relative" style={{ zIndex: '-1' }}>
              <img 
                alt={props.title}
                src={props.imgSrc} 
                style={{
                          backgroundColor: "gray", 
                          borderRadius: "50%", 

                          width: '100px',
                          height: '100px',

                          top: 0, 
                          left: "-50px",
                        }} 
                className="position-absolute border-2"
              />

              <div className="w-75">
                <div style={{ border: "2px solid black", paddingLeft: "80px"}}>
                  <p className="text-body-emphasis">{props.title}</p>
                  <p className="small">{props.category}</p>
                  <p className="text-success small font-monospace d-flex gap-2 flex-wrap">
                      <span className="badge rounded-pill text-bg-success">{props.area}</span>
                      <span className="badgerounded-pill text-bg-success">{props.tag}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default MealComponent;