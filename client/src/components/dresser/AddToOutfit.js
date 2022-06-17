import { useEffect, useState } from 'react';

function AddToOutfit({ setOutfitSelectVisible, outfitSelectVisible, item }) {

    const initializeForm = {
        outfit_id: "",
        item_id: `${item.id}`
    };
    const [formFiller, setFormFiller] = useState(initializeForm)
    
    // fetch users outfits
    useEffect(() => {
        (async ()=> {
          let req = await fetch("/users/1/outfits")
          let res = await req.json()
          console.log("Results => ", res)

        })()
    }, [])

    

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
            <h3>Add {item.name} to outfit...</h3>
    </div>
    )
}

export default AddToOutfit;