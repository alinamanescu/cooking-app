import React from 'react'
import MealsContainer from '../containers/MealsContainer';
import RandomMealsContainer from '../containers/RandomMealsContainer';
import SideBarContainer from '../containers/SideBarContainer';

const HomePage = () => {
  return (
    <>
    <SideBarContainer />
    <div className="container">
        <div className="p-4">
        <RandomMealsContainer/>
        <MealsContainer />
  </div>
</div>
    </>
  );
};

export default HomePage;