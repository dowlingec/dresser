import React from "react";

function ItemCard({item}) {
    const hanldleDelete = () => {
      alert('Delete click')
      let req = fetch `/items/${item.id}` {
        method: DELETE
      }
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
        </div>
    )
}

export default ItemCard;