function NewItemForm({setNewItem, newVisible, setNewVisible}){
    
  const handleItemSubmit = async () => {
    let form = new FormData(document.querySelector('#item-form'))
    let req = await fetch('/items', {
      method: 'POST',
      body: form
    })
    let res = await req.json()
    setNewItem(res)
    // console.log("Results of submit => ", req)
  }
      
  return(
    <div onClick={() => { return null }} className="new-item-screen" style={{ display: newVisible ? "block" : "none"}}>
      <a href="#" className='close-button' onClick={() => { setNewVisible(false)}}>[X]</a>
      <form id="item-form" onSubmit={(e) => {
        e.preventDefault()
        handleItemSubmit()
      }}>
        <input type="text" name="name" placeholder="Item name"/>
        <select name="item_type">
            <option value="headwear">Headwear</option>
            <option value="eyewear">Eyewear</option>
            <option value="neckwear">Neckwear</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="one_piece">One-Piece</option>
            <option value="hosiery">Hosiery</option>
            <option value="shoes">Shoes</option>
        </select>
        {/* <input type="text" name="color" placeholder="Color"/> */}
                     
        <select name="color">
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="green">Green</option>
          <option value="grey">Grey</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="multi_color">Multi Color</option>
          <option value="red">Red</option>
          <option value="cream">Cream</option>
          <option value="yellow">Yellow</option>
          <option value="beige">Beige</option>
          <option value="orange">Orange</option>
        </select>
        {/* <input type="text" name="occasion" placeholder="Occasion"/> */}
        <select name="occasion">
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sporty">Sporty</option>
            <option value="party">Party</option>
        </select>
        <input type="number" name="user_id" placeholder="user ID"/>
        {/* <%= form.file_field :image %> */}
        <input type="file" name="image" data-direct-upload-url="<%= rails_direct_uploads_url %>" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewItemForm;