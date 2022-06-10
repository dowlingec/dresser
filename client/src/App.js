import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import ItemCard from './components/ItemCard';


function App() {
  const [itemArray, setItemArray] = useState([])

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

  const handleItemSubmit = async () => {
    let form = new FormData(document.querySelector('#item-form'))
    let req = await fetch('/items', {
      method: 'POST',
      body: form
    })
    // console.log("Results of submit => ", req)
  }

  return (
    <div className="App">
      <h2>ADD NEW ITEM</h2>
      <form id="item-form" onSubmit={(e) => {
        e.preventDefault()
        handleItemSubmit()
      }}>
        <input type="text" name="item_type" placeholder="Item type"/>
        <input type="text" name="name" placeholder="Item name"/>
        <input type="text" name="color" placeholder="Color"/>
        <input type="text" name="occasion" placeholder="Occasion"/>
        <input type="number" name="user_id" placeholder="user ID"/>
        {/* <%= form.file_field :image %> */}
        <input type="file" name="image" data-direct-upload-url="<%= rails_direct_uploads_url %>" />
        <input type="submit"/>
      </form>

      <div className="item-masonry">{itemArray.map((el)=> {
        return (<ItemCard item={el} key={el.id}/>)
      })}</div>
    </div>
  );
}

export default App;
