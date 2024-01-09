import logo from './logo.svg';
import './App.css';
import CyclingWeather from './pages/cycling-weather.js'
import RoundedRectangle from './components/RoundedRectangle.js';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="left-bar">
      <h1 style={{marginTop: "100px"}}>Projects</h1> {/* Insert your title here */}
        <BrowserRouter>
          <Routes>
            <Route path="/cycling-weather" element={<CyclingWeather/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <div className = "right-section">
      {/* <RoundedRectangle to="/my-route" text="Go to My Route" /> */}
      </div>
    </div>
  );
}

export default App;
