function NewOutfit({ setNewOutfit, setFormVisible, formVisible}) {

    const handleOutfitSubmit = async () => {
        let form = new FormData(document.querySelector('#outfit-form'))
        let req = await fetch('/outfits', {
          method: 'POST',
          body: form
        })
        let res = await req.json()
        setNewOutfit(res)
        // console.log("Results of submit => ", req)
      }
    return(
        <div onClick={() => { return null }} className="new-outfit-screen" style={{ display: formVisible ? "block" : "none"}}>
      <a href="#" className='close-button' onClick={() => { setFormVisible(false)}}><i class="fa-solid fa-xmark"></i></a>
      <form id="outfit-form" onSubmit={(e) => {
        e.preventDefault()
        handleOutfitSubmit()
      }}>
        <input type="text" name="details" placeholder="Details"/>
        <input type="number" name="temp_f" placeholder="Temp f"/>
        <select name="temp_f">
            <option value="headwear">Headwear</option>
            <option value="eyewear">Eyewear</option>
            <option value="neckwear">Neckwear</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="one_piece">One-Piece</option>
            <option value="hosiery">Hosiery</option>
            <option value="shoes">Shoes</option>
        </select>
        <select name="occasion">
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sporty">Sporty</option>
            <option value="party">Party</option>
        </select>
        <input type="number" name="user_id" placeholder="user ID"/>
        <input type="submit"/>
      </form>
    </div>
    )
}

export default NewOutfit;