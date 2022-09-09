import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/apartments/new" element={<AddApartmentPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
