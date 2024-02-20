import React from "react";
import { ListComponent } from "../Components/ListComponent";

export const SideBarContainer = () => {
    return (
        <div className="w-25 d-none d-md-block py-4">
            <p className='lead fw-bold'>Category</p>
            <ListComponent items={"Category Item"} />

            <p className='lead fw-bold'>Area</p>
            <ListComponent items={"Area Item"}/>
        </div>
    );
};

export default SideBarContainer;