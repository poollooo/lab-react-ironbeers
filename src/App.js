import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NavBar />} />
          {/* <Route path="/apartments/new" element={<AddApartmentPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
