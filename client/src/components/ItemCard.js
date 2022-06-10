import React from "react";
function ItemCard({item}) {
    
    return(
        <div>
          {/* need conditional rendering? */}
          {/* {if {item.image.url} ? } */}
          {/* // <h1> THIS IS THE URL: {item.image.url}</h1> */}
          <img src={item.image.url}/>
          <h1>Description: {item.color} {item.name}</h1>
          <h1>Category: {item.occasion} {item.item_type}</h1>
          <br/>
        </div>
    )
}

export default ItemCard;