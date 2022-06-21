function NewOutfit({ setFormVisible, formVisible, weatherData}) {

    const handleOutfitSubmit = async () => {
        let form = new FormData(document.querySelector('#outfits-form'))
        let req = await fetch('/outfits', {
          method: 'POST',
          body: form
        })
        let res = await req.json()
        // setNewOutfit(res)
        // console.log("Results of submit => ", req)
      }
    return(
      <div onClick={() => { return null }} className="new-outfit-screen" style={{ display: formVisible ? "block" : "none"}}>
        <a href="#" className='close-button' onClick={() => { setFormVisible(false)}}><i class="fa-solid fa-xmark"></i></a>
      <form id="outfits-form" onSubmit={(e) => {
        e.preventDefault()
        handleOutfitSubmit()
      }}>
        <textarea name="details" placeholder="Details"/>
        <input type="number" name="temp_f" placeholder="Temperature in f"/>
        ##add input for weather summary

        <input type="number "name="humidity_percent" placeholder="Humidity %"/>
        <input type="number" name="wind_mph" placeholder="Wind speed"/>
        <input type="number" name="user_id" placeholder="user ID"/>
        <input type="submit"/>
      </form>
    </div>
    )
}

export default NewOutfit;