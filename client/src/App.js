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
          <MyDresser weatherData={weatherData}/>
        </Route>
        <Route exact path="/outfits">
          <MyOutfits />
        </Route>
        <Route exact path="/">
          <div>
          <img src="/logo.png"></img>
          {/* <iframe src="./public/logo.mp4"></iframe> */}
          <h1>Dresser? I hardly know her!</h1>
          {/* <h1>Dresser is here to take that headache out of outfit planning for those of us who keep forgetting to our clothing choices with the weather. And don't worry, Dresser is for all, no closet in sight! */}
          {/* </h1> */}
          </div>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas. </p>
        </Route>
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
