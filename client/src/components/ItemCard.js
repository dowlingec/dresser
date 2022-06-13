import React from "react";
import { useEffect } from 'react'

function ItemCard({item}) {
  
  const [itemType, setItemType] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemColor, setItemColor] = useState("")
  const [occasion, setOccasion] = useState("")

  const handleDelete = () => {
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
     
  const handleEdit = async () => {
    let itemEdit = new FormData(document.querySelector('#edit-item'))
    let req = await fetch(`/items/${item.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify(newUser)
            }
    )      // alert('I been submitted! =>', itemEdit)
  }

  return(
    <div className="item">
      <img id="item-image" src={item.image.url} alt={item.color + ' ' + item.occasion + ' ' + item.name}/>
      <h3>Description: {item.color} {item.name}</h3>
      <h3>Category: {item.occasion} {item.item_type}</h3>
      <br/>
      <button onClick={(e) => {
        e.preventDefault()
        handleDelete()
      }}>Delete</button>

      <form id="edit-item" onSubmit={(e) => {
        e.preventDefault()
        handleEdit()
      }}>
        <input type="text" name="item_type[item_type]" placeholder="Item type"/>
        <input type="text" name="name[name]" placeholder="Item name"/>
        <input type="text" name="color[color]" placeholder="Color"/>
        <input type="text" name="occasion[occasion]" placeholder="Occasion"/>
          <input type="submit"/>
      </form>
    </div>)
}

export default ItemCard;