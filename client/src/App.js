import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import ItemCard from './components/ItemCard';
import NavBar from './components/NavBar';
import SwitchContainer from './components/SwitchContainer';

function App() {
  const [itemArray, setItemArray] = useState([])
  const [userInfo, setUserInfo] = useState([])

  // GET items
  useEffect(() => {
    (async ()=> {
      let req = await fetch("/items")
      let res = await req.json()
      console.log("Results => ", res)
      setItemArray(res)
    })()
  }, [])
  // console.log("Fetched Items =>", itemArray)

  

  return (
    <div className="App">
      <NavBar />
      <SwitchContainer />

      <div className="item-masonry">{itemArray.map((el)=> {
        return (<ItemCard item={el} key={el.id}/>)
      })}</div>
    </div>
  );
}

export default App;
