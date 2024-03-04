import React from 'react'
import MealsContainer from '../containers/MealsContainer';
import RandomMealsContainer from '../containers/RandomMealsContainer';
import SideBarContainer from '../containers/SideBarContainer';
import TopBarComponent from '../Components/TopBarComponents';

const HomePage = () => {
  return (
    <>
      <TopBarComponent/>
      <div className="d-flex container-fluid">
          <SideBarContainer />

          <div className="container">
            <div className="p-4">
              <RandomMealsContainer/>
              <MealsContainer />
            </div>
          </div>
        </div>
    </>
  );
};

export { HomePage };