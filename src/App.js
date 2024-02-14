import './App.css';

import SearchInput from './Components/SearchInput';
import MealsContainer from './containers/MealsContainer';
import RandomMealsContainer from './containers/RandomMealsContainer';


function App() {
  return (
      <><SearchInput/>
      <div className="container">

        <div className="">
          <RandomMealsContainer/>
          <MealsContainer />
        </div>
      </div>
    </>
  )
}

export default App;