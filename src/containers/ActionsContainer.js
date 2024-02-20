import React from 'react'
import FavoritesIconComponent from '../Components/FavoritesIconComponent';
import HomeIconComponent from '../Components/HomeIconComponent';

export const ActionsContainer = () => {
  return (
    <div className="text-primary justify-content-around gap-3 d-flex">
    <FavoritesIconComponent />
    <HomeIconComponent />
    </div>
  );
};

export default ActionsContainer;



