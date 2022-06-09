import logo from './logo.svg';
import './App.css';
import useEffect from 'react'


function App() {
  const handleItemSubmit = async () => {
    let form = new FormData(document.querySelector('#item-form'))
    let req = await fetch('/items', {
      method: 'POST',
      body: form
    })
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
        <input type="text" name="user_id" placeholder="user ID"/>
        {/* <%= form.file_field :image %> */}
        <input type="file" data-direct-upload-url="<%= rails_direct_uploads_url %>" />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
