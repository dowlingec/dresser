import React from "react";
function ItemCard({item}) {
    
    return(
        <div>
          <img src={item.image.url}/>
          <h1>Description: {item.color} {item.name}</h1>
          <h1>Category: {item.occasion} {item.item_type}</h1>
          <br/>
        </div>
    )
}

export default ItemCard;