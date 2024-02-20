import React from "react";
import { useParams } from "react-router-dom";
import { filterByID } from "../assets/data/meals";
import TopBarComponent from "../Components/TopBarComponents";

export const MealPage = () => {
    const { id } = useParams();
    const mealData = filterByID(id);

    return (
        <>
        <TopBarComponent />
        <div className="d-flex container-fluid">
            <div>
                {mealData ? (
                    <>
                        <h1 className="lead font-monospace">Meal </h1>
                        <p>ID: {mealData.id}</p>
                        <p>Name: {mealData.name}</p>
                    </>
                ) : (
                    <h1 className="lead font-monospace">No results</h1>
                )}
            </div>
        </div>
        </>
    );
};