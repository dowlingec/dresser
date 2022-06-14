import { useState, useEffect } from "react";

function MyOutfits() {
    const [outfitArray, setOutfitArray] = useState([])
    useEffect(() => {
        (async ()=> {
            // change fetch to outfits once built
          let req = await fetch("/users/1/items")
          let res = await req.json()
          console.log("Results => ", res)
          setOutfitArray(res)
        })()
      }, [
        // newItem, deleteItem
    ])
    return <h1>Outfit container</h1>
}

export default MyOutfits;