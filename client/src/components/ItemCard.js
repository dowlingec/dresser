import React from "react";

function ItemCard({item}) {
    const hanldleDelete = () => {
      // alert('Delete click')
      let req = fetch(`/items/${item.id}`, {
        method: "DELETE"
      })
      // FIX BELOW, DEL WORKING THO
      // if (req.ok) {
      //   alert('Del successful');
      // } else {
      //   alert('Somethin went wrong')
      // }
    }
     
    const handleEdit = () => {
      let itemEdit = new FormData(document.querySelector('#edit-item'))
      let req = fetch(`/items/${item.id}`, {
        method: "PATCH",
        body: itemEdit
      })
      alert('I been submitted!')
    }

    return(
        <div className="item">
          {/* need conditional rendering? incase no image? NO handle on backend!*/}
          <img id="item-image" src={item.image.url} alt={item.color + ' ' + item.occasion + ' ' + item.name}/>
          <h3>Description: {item.color} {item.name}</h3>
          <h3>Category: {item.occasion} {item.item_type}</h3>
          <br/>
          <button onClick={(e) => {
            e.preventDefault()
            hanldleDelete()
          }}>Delete</button>

          ###EDIT ITEM
          <form id="edit-item" onSubmit={(e) => {
            e.preventDefault()
            handleEdit()
          }}>
          <input type="text" name="item_type" placeholder="Item type"/>
            <input type="text" name="name" placeholder="Item name"/>
            <input type="text" name="color" placeholder="Color"/>
            <input type="text" name="occasion" placeholder="Occasion"/>
            <input type="submit"/>
          </form>
        </div>
    )
}

export default ItemCard;