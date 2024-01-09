import logo from './logo.svg';
import './App.css';
import CyclingWeather from './pages/cycling-weather.js'
import RoundedRectangle from './components/RoundedRectangle.js';
import ProfilePicture from './components/ProfilePicture.js';
import Divider from './components/Divider.js';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cycling-weather" element={<CyclingWeather/>}/>
        </Routes>
      </BrowserRouter>
      <header className="left-bar">
      <h1 style={{marginTop: "30px"}}></h1> {/* Insert your title here */}
      <ProfilePicture src="https://avatars.githubusercontent.com/u/22777164?v=4" alt="Profile Picture" size = "180px" />
      <div style = {{marginTop: "20px", fontSize: "25px",fontWeight: "600"}}> Jonathan Young </div> 
      <div style = {{marginTop: "10px", fontSize: "20px"}}> 
      <Divider length="220px" />
      <div style = {{marginTop: "10px", fontSize: "15px", color:"#333333",fontWeight: "600" }}> Cloud and Machine Learning</div>
      <div style = {{fontSize: "15px",color:"#333333",fontWeight: "600"}}>Engineer</div>
      </div>
      <div style = {{marginTop: "10px", fontSize: "20px"}}> 
      <Divider length="220px" />
      </div>
      <div>
      <a href="https://curveassure.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none', fontSize: "15px" }}>
        Chief Cloud Engineer @
      </a>
      </div>
      <div>
      <a href="https://curveassure.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none' }}>
        CurveAssure
      </a>
      </div>
      <div style={{marginTop: "10px"}}>
      <a href="https://github.com/JHU-Xtractor" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none', fontSize: "15px" }}>
        Frontend/Cloud Architect @
      </a>
      </div>
      <div>
      <a href="https://github.com/JHU-Xtractor" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none' }}>
        Xtractor
      </a>
      </div>
      <div style={{marginTop: "10px"}}>
      <Divider length="220px" />
      </div>
      <div style={{marginTop: "10px"}}>
        jonathanjymd@gmail.com
      </div>
      <Divider length="220px" />
      <div style={{marginTop: "10px"}}>
        Johns Hopkins University
      </div>
      <div 
      style={{marginTop: "10px", fontSize: "14px"}}>
        MSE Comp. Science, BS Comp. Engineering
      </div>
      </header>
      <div className = "right-section">
      {/* <RoundedRectangle to="/my-route" text="Go to My Route" /> */}
      </div>
    </div>
  );
}

export default App;
