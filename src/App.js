import './App.css';

import TopBarComponent from './Components/TopBarComponents';
import HomePage from './pages/HomePage';


function App() {
  return (
      <>
      <TopBarComponent/>
      <div className="d-flex container-fluid">
      <HomePage />
      </div>
    </>
  )
}

export default App;