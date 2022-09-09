import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import RandomBeers from './pages/RandomBeers';
import NewBeers from './pages/NewBeers';
import NavBar from './components/NavBar';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NavBar />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:id" element={<SingleBeer />} />
          <Route path="/random-beer" element={<RandomBeers />} />
          <Route path="/new-beer" element={<NewBeers />} />
          {/* <Route path="/apartments/new" element={<AddApartmentPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
