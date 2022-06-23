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
        <input type="number" name="temp_f" placeholder="Avg. Temperature"/>    <input type="text" name="weather_summary" placeholder="Weather Summary"/>
        <input type="number " name="humidity_percent" placeholder="Humidity %"/>
        <input type="number" name="wind_mph" placeholder="Windspeed"/>
        <input type="number" name="user_id" placeholder="User ID"/>

        # "temp_f"
#     t.integer "humidity_percent"
#     t.integer "wind_mph"
#     t.integer "cloud"
#     t.text "details"
#     t.string "weather_summary"
#     t.integer "user_id"
        <input type="submit"/>
      </form>
    </div>
    )
}

export default NewOutfit;