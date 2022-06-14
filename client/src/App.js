import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import MyDresser from './components/MyDresser';

function App() {
  

  // GET items
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/dresser">
          <MyDresser />
        </Route>
        <Route exact path="/outfits">
          <h1>OUTFITS GO HERE</h1>
        </Route>
        <Route exact path="/">
          <h1>This will be the about page</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
