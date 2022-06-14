import { useState, useEffect } from "react";
import OutfitCard from './OutfitCard';
import NewOutfit from "./NewOutfit";

function MyOutfits() {
    const [outfitArray, setOutfitArray] = useState([])
    // const [newOutfit, setNewOutfit] = useState("")
    const [deleteOutfit, setDeleteOutfit] = useState(1)

    useEffect(() => {
        (async ()=> {
            // change fetch to outfits once built
          let req = await fetch("/users/1/outfits")
          let res = await req.json()
          console.log("Results => ", res)
          setOutfitArray(res)
        })()
      }, [deleteOutfit])
    return (
      <div>
        {/* <button onClick={() => {setNewVisible(true) }}>ADD NEW OUTFIT</button> */}
        {/* <NewOutfitForm setNewOutfit={setNewOutfit} setToggleVisible={setToggleVisible} newVisible={newVisible}/> */}
        # Currently hardcoded to user 1
        <NewOutfit/>
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