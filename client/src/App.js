import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import NavBar from './components/NavBar';
import MyDresser from './components/dresser/MyDresser';
import MyOutfits from './components/outfits/MyOutfits';
import WeatherPanel from './components/WeatherPanel';
import React from 'react';

function App() {
  const [weatherData, setWeatherData] = useState([])

  // GET items
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel setWeatherData={setWeatherData} weatherData={weatherData} />
      <div className="switch-container">
      <Switch>
        <Route exact path="/dresser">
          <MyDresser 
          // weatherData={weatherData}
          />
        </Route>
        <Route exact path="/outfits">
          <MyOutfits />
        </Route>
        <Route exact path="/">
          <div className="about-section">
          {/* <h1>dresser</h1> */}
          <img src="/pexels-kai-pilger-996329.jpeg" style={{ borderRadius: `100px`, width: `50%` }}></img>
          <h1>If you're constantly leaving the house in flip-flops during a rainstorm, or slipping on your favorite flannel only to step outside and find it's positively tropical, you are in the right place! 
          </h1>
          <button>SIGN UP</button>
          </div>
          {/* <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas. </p> */}
        </Route>
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
