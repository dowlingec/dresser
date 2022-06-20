import { useEffect, useState } from 'react';

function AddToOutfit({ setOutfitSelectVisible, outfitSelectVisible, item }) {

    // ignore me for 5 mins
    const initializeForm = {
        outfit_id: "",
        item_id: `${item.id}`
    };
    const [formFiller, setFormFiller] = useState(initializeForm)
    
    // fetch users outfits - map these to options in form
    useEffect(() => {
        (async ()=> {
          let req = await fetch("/users/1/outfits")
          let res = await req.json()
          console.log("Add to outfit fetch => ", res)

        })()
    }, [])

    function handleChange(e) {
        setFormFiller({
          ...formFiller,
          [e.target.id]: e.target.value,
        });
    }

    const handleAddTo = async () => {
        let req = await fetch(`/item_outfit_joins`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formFiller)
        })
        let res = await req.json()
        console.log("New join =>", res)
    }

 return (
        <div onClick={() => { return null }} className="edit-screen" style={{ display: outfitSelectVisible ? "block" : "none"}}>
            <a href="#" className='close-button' onClick={() => { setOutfitSelectVisible(false)}}><i class="fa-solid fa-xmark fa-3x"></i></a>
            <h3></h3>
            <form id="add-to-form" onSubmit={(e) => {
                e.preventDefault()
                handleAddTo()
            }}>
                <label for="outfit-select">Add {item.name} to...</label>
                    <select id="outfit_id" name="outfit_id" onChange={handleChange}>
                        <option value="1">All I need is...</option>
                        <option value="2">It's humid...</option>
                        <option value ="3">Graduation baybeee</option>
                    </select>
                    <input type="submit"/>
                </form>
    </div>
    )
}

export default AddToOutfit;