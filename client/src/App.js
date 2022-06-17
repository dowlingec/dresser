import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import MyDresser from './components/dresser/MyDresser';
import MyOutfits from './components/outfits/MyOutfits';
import WeatherPanel from './components/WeatherPanel';

function App() {
  const [user, setUser] = useState(null)

  // login fetch
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  // console.log("user info", user)
  useEffect(() => {
    (async ()=> {
      let req = await fetch(`/me`)
      let res = await req.json()
      console.log("Results => ", res)
    })()
  }, [])

  // function handleLogout() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogout());
  // }

  const handleLogout = () => {
    let req = fetch("/logout", {
      method: "DELETE"
    })
    setUser()
  }

  if (user) {
    return (<div>
      <h2>Welcome, {user.nickname}!</h2>
      <button onClick={handleLogout}>Logout</button>
      </div>);
  } else {
    return <Login onLogin={setUser} />;
  }
  // GET items
  // return (
  //   <div className="App">
  //     <NavBar />
  //     <WeatherPanel />
  //     <Login />
  //     <div className="switch-container">
  //     <Switch>
  //       <Route exact path="/dresser">
  //         <MyDresser />
  //       </Route>
  //       <Route exact path="/outfits">
  //         <MyOutfits />
  //       </Route>
  //       <Route exact path="/">
  //         <h1>This will be the about page</h1>
  //         <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium rerum commodi error doloremque cum explicabo modi, enim et tempora praesentium sed quaerat, possimus corrupti a. Quisquam dolor nam voluptas. </p>
  //       </Route>
  //     </Switch>
  //     </div>
      
    // </div>
  // );
}

export default App;
