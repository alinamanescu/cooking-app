import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from '../src/pages/HomePage';
import { MealPage } from '../src/pages/MealPage';


function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path="/meals/:id" element={<MealPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;