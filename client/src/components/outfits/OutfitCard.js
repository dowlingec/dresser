
function OutfitCard({ outfit, setDeleteOutfit, deleteOutfit }) {

    const handleDelete = () => {
        // alert('Delete click')
         let req = fetch(`/outfits/${outfit.id}`, {
           method: "DELETE"
         })
         setDeleteOutfit(deleteOutfit + 1)
       }

    return(
        <div className="outfit">
          {/* <img id="outfit-image" src={outfit.image.url} alt={outfit.color + ' ' + outfit.occasion + ' ' + outfit.name}/> */}
          <h3>Description: </h3>
          <h3>{outfit.details}</h3>
          <h2>Temperature: {outfit.temp_f}°f</h2>
          <h2>Humidity: {outfit.humidity_percent}%</h2>
          <br/>
          <button onClick={(e) => {
            e.preventDefault()
            handleDelete()
          }}><i class="fa-solid fa-trash fa-3x"></i></button>
          {/* <button onClick={() => {setVisible(true) }}>Edit</button>
          <EditModal outfit={outfit} setVisible={setVisible} isVisible={isVisible}/> */}
        </div>)
}

export default OutfitCard;