import React from "react";
import EditModal from "./EditModal";

function ItemCard({item}) {

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
      <EditModal item={item}/>
    </div>)
}

export default ItemCard;