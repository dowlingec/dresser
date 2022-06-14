import { useState, useEffect } from "react";
import OutfitCard from './OutfitCard';
import NewOutfit from "./NewOutfit";

function MyOutfits() {
    const [outfitArray, setOutfitArray] = useState([])
    const [newOutfit, setNewOutfit] = useState("")
    const [deleteOutfit, setDeleteOutfit] = useState(1)
  const [formVisible, setFormVisible] = useState(false)

    useEffect(() => {
        (async ()=> {
            // change fetch to outfits once built
          let req = await fetch("/users/1/outfits")
          let res = await req.json()
          console.log("Results => ", res)
          setOutfitArray(res)
        })()
      }, [newOutfit, deleteOutfit])
    return (
      <div>
        <button onClick={() => {setFormVisible(true) }}><i class="fa-solid fa-plus"></i> OUTFIT</button>
        {/* <NewOutfitForm /> */}
        # Currently hardcoded to user 1
        <NewOutfit setNewOutfit={setNewOutfit} setFormVisible={setFormVisible} formVisible={formVisible}/>
        <div className="outfits">{outfitArray.map((el)=> {
            return (
              // <h1>{el.details}</h1>
            <OutfitCard outfit={el} key={el.id} setDeleteOutfit={setDeleteOutfit} deleteOutfit={deleteOutfit}/>
            )
          })}
        </div>
  </div>)
}

export default MyOutfits;