import { useState, useEffect } from "react";
import OutfitCard from './OutfitCard';

function MyOutfits() {
    // const [loading, setLoading] = useState(false);
    const [outfitArray, setOutfitArray] = useState([])
    // const [deleteOutfit, setDeleteOutfit] = useState(1)
  

    useEffect(() => {
        (async ()=> {
          // setLoading(true)
            // change fetch to outfits once built
          let req = await fetch("/users/1/outfits")
          let res = await req.json()
          console.log("Outfit results => ", res)
          setOutfitArray(res)
          // setLoading(false)
        })()
    }, [])
    // console.log("New array using state", outfitArray)
    // if (loading) {
    //   return <p>Outfits loading...</p>;
    // }

    return (
      <div>
        <h1>My Outfits!</h1>
        {/* <button onClick={() => {setFormVisible(true) }}><i class="fa-solid fa-square-plus fa-4x"></i></button> */}
        {/* # Currently hardcoded to user 1 */}
        {outfitArray.map((el) => {
            return (<OutfitCard outfit={el}
              // setDeleteOutfit={setDeleteOutfit} deleteOutfit={deleteOutfit}
            />)
          })}
  </div>)
}

export default MyOutfits;