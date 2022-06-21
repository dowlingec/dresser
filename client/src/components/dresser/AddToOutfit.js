import { useEffect, useState } from 'react';


function AddToOutfit({ setOutfitSelectVisible, outfitSelectVisible, item, outfits }) {
    const initializeForm = {
        outfit_id: ``,
        item_id: `${item.id}`
    };
    const [formFiller, setFormFiller] = useState(initializeForm)

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
    console.log("ADD TO OUTFIT ", outfits[0].id)
    const outfitId = outfits[0].id
    console.log("new var", outfitId)
 return (
        <div onClick={() => { return null }} className="edit-screen" style={{ display: outfitSelectVisible ? "block" : "none"}}>
            <button className='close-button' onClick={() => { setOutfitSelectVisible(false)}}><i class="fa-solid fa-xmark fa-3x"></i></button>
            <h3>Add {item.name} to...</h3>
            <form id="add-to-form" onSubmit={(e) => {
                e.preventDefault()
                handleAddTo()
            }}>
                {/* <label></label> */}
                <select id="outfit_id" onChange={handleChange}>
                <option defaultValue>Pick an option</option>
                {outfits.map((el) => {
                    return(<option id="outfit_id" value="1">{el.description}</option>)
                })}
                
                    {/* <option value="1" defaultValue >All I need is...</option>
                    <option value="2">It's humid...</option>
                    <option value ="3">Graduation baybeee</option> */}
                </select>
                <input type="submit"/>
            </form>
    </div>
    )
}

export default AddToOutfit;