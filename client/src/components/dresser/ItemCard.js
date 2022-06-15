import React from "react";
import { useState } from "react";
import EditModal from "./EditModal";

function ItemCard({item, setDeleteItem, deleteItem}) {
  const [isVisible, setVisible] = useState(false)

  const handleDelete = () => {
   // alert('Delete click')
    let req = fetch(`/items/${item.id}`, {
      method: "DELETE"
    })
    // let res = await req.json()
    setDeleteItem(deleteItem + 1)
    // FIX BELOW, DEL WORKING THO
    // if (req.ok) {
    //   alert('Del successful');
    // } else {
    //   alert('Somethin went wrong')
    // }
  }
  
  

  return(
    <div className="item">
      <img id="item-image" src={item.image.url} alt={item.color + ' ' + item.occasion + ' ' + item.name}/>
      <h3>Description: {item.color} {item.name}</h3>
      <h3>Category: {item.occasion} {item.item_type}</h3>
      <br/>
      <i class="fa-solid fa-person-circle-plus fa-4x" title="Add to outfit"></i>
      <button onClick={() => {setVisible(true) }} title="Edit item"><i class="fa-solid fa-pen-to-square fa-3x"></i></button>
      <EditModal item={item} setVisible={setVisible} isVisible={isVisible}/>
      <button onClick={(e) => {
        e.preventDefault()
        handleDelete()
      }} title="Delete item"><i class="fa-solid fa-trash fa-3x"></i></button>
    </div>)
}

export default ItemCard;