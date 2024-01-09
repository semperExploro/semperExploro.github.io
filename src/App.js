import './App.css';
import { Route, Routes, BrowserRouter, Link  } from 'react-router-dom';
import CyclingWeather from './pages/cycling-weather.js';
import MainPage from './pages/main.js';


function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cycling-weather" element={<CyclingWeather />} />
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
