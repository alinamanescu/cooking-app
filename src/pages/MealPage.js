import React, { useEffect, useState } from "react";
import TopBarComponent from "../Components/TopBarComponents";
import { useParams } from "react-router-dom";
/*// import { filterByID } from "../assets/data/meals";

// TODO for later: Ingredients + Measures to be displayed
// TODO for later: back to Homepage

// TODO for later: add to favorites
*/
export const MealPage = () => {
  const { mealID } = useParams();

  const [addToFavoritesButtonText, setAddToFavoritesButtonText] = useState("Add To Favorites");
  const [mealData, setMealData] = useState();

  // LS = LocalStorage
  // TODO for later: implement LS page
  // TODO for later: implement LS add to current list of favorites instead replacing the current value

  const mealDataFromLS = JSON.parse(localStorage.getItem("meals")) || [{}];
  const [mealDataForLS, setMealDataForLS] = useState(mealDataFromLS);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(mealDataForLS));
  }, [mealDataForLS]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then((response) => response.json())
      .then((responseJSON) => setMealData(responseJSON.meals[0]));
  }, [mealID]);

  const handleAddToFavoritesButtonClickEvent = () => {
    setMealDataForLS([
      // first, merge it with the current LS data,
      // then push it
      {
        strMeal: mealData.strMeal,
        mealID: mealID,
      },
    ]);

    setAddToFavoritesButtonText("Added");
  };

  return (
    <>
      <TopBarComponent />
      <div className="d-flex container-fluid">
        <div>
          {mealData ? (
            <div className="container-fluid py-4">
              <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                  <div className="d-flex w-100 justify-content-between">
                    <h1 className="display-5 fw-bold">{mealData.strMeal}</h1>
                    <button
                      onClick={handleAddToFavoritesButtonClickEvent}
                      type="button"
                      className="btn btn-outline-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                      </svg>
                      {addToFavoritesButtonText}
                    </button>
                  </div>
                  <div className="lead">
                    <div className="d-flex gap-2">
                      {/* if mealData.strTags  */}
                      {/* // do stuff */}
                      {mealData.strTags?.split(", ").map((tag) => (
                        <span className="badge rounded-pill bg-success">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="col-md-8 fs-4">{mealData.strInstructions}</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={mealData.strSource}
                    className="btn btn-outline-primary btn-lg"
                    type="button"
                  >
                    Go to source
                  </a>
                </div>
              </div>
              <div className="row row-gap-5 align-items-md-stretch">
                <div className="col-12 col-md-6">
                  <div className="h-auto p-5 text-bg-dark rounded-3">
                    <h2>Change the background</h2>
                    <iframe
                      width="100%"
                      height="auto"
                      src={mealData.strYoutube.replace("watch?v=", "embed/")}
                      title={mealData.mealID}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className=" h-100 bg-body-tertiary border rounded-3 img-fluid"
                    src={mealData.strMealThumb}
                    alt={mealData.strMeal}
                  />
                </div>
              </div>
            </div>
          ) : (
            <h1 className="lead font-monospace">No meal found</h1>
          )}
        </div>
      </div>
    </>
  );
};