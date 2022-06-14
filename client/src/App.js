import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import MyDresser from './components/dresser/MyDresser';
import MyOutfits from './components/outfits/MyOutfits';
import WeatherPanel from './components/WeatherPanel';

function App() {
  

  // GET items
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
      <Switch>
        <Route exact path="/dresser">
          <MyDresser />
        </Route>
        <Route exact path="/outfits">
          <MyOutfits />
        </Route>
        <Route exact path="/">
          <h1>This will be the about page</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
