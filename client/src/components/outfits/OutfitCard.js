import React from 'react';

function OutfitCard({ outfit }) {
  // setDeleteOutfit, deleteOutfit 
  // const handleDelete = () => {
  //     // alert('Delete click')
  //      let req = fetch(`/outfits/${outfit.id}`, {
  //        method: "DELETE"
  //      })
  //      setDeleteOutfit(deleteOutfit + 1)
  // }
  console.log(outfit)
  return(
      <div className="outfit">
        {/* <img id="outfit-image" src={outfit.image.url} alt={outfit.color + ' ' + outfit.occasion + ' ' + outfit.name}/> */}
        {/* <h3>Description: </h3> */}
        <h1>{outfit.details}</h1>
        <h2>Temperature: {outfit.temp_f}°f</h2>
        <h2>Humidity: {outfit.humidity_percent}%</h2>
        <br/>
        {/* <button onClick={() => {setVisible(true) }}>Edit</button>
        <EditModal outfit={outfit} setVisible={setVisible} isVisible={isVisible}/> */}
        {/* <button onClick={(e) => {
          e.preventDefault()
          handleDelete()
        }} title="Delete Outfit"><i class="fa-solid fa-trash fa-3x"></i></button> */}
        {/* {outfit.items.map((item) => {
          return(
            <img id="item-image" src={item.image.url} alt={item.color + ' ' + item.occasion + ' ' + item.name}/>
            )
          })} */}
           
      </div>)
}

export default OutfitCard;