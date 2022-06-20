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
          <h1>This will be the about page</h1>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas. </p>
        </Route>
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
