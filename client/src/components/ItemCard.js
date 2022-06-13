import React from "react";
import { useState } from 'react'


const initialState = {
  item_type: "",
  name: "",
  color: "",
  occasion: ""
};


function ItemCard({item}) {
  const [formData, setFormData] = useState(initialState)
  // const [itemType, setItemType] = useState("")
  // const [itemName, setItemName] = useState("")
  // const [itemColor, setItemColor] = useState("")
  // const [occasion, setOccasion] = useState("")

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
  
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleEdit = async () => {
    // let itemEdit = new FormData(document.querySelector('#edit-form'))
    // console.log("Form data =>", itemEdit)
    let req = await fetch(`/items/${item.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify(formData)
    })
    setFormData(initialState)
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

      <form id="edit-form" onSubmit={(e) => {
        e.preventDefault()
        handleEdit()
      }}>
        <input type="text" id="item_type" placeholder="Item type" value={formData.item_type} onChange={handleChange}/>
        <input type="text" id="name" placeholder="Item name" value={formData.name} onChange={handleChange}/>
        <input type="text" id="color" placeholder="Color" value={formData.color} onChange={handleChange}/>
        <input type="text" id="occasion" placeholder="Occasion" value={formData.occasion} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>)
}

export default ItemCard;