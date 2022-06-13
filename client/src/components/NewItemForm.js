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
        <input type="text" name="item_type" placeholder="Item type"/>
        <input type="text" name="name" placeholder="Item name"/>
        <input type="text" name="color" placeholder="Color"/>
        <input type="text" name="occasion" placeholder="Occasion"/>
        <input type="number" name="user_id" placeholder="user ID"/>
        {/* <%= form.file_field :image %> */}
        <input type="file" name="image" data-direct-upload-url="<%= rails_direct_uploads_url %>" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewItemForm;