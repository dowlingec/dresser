import {useEffect, useState} from 'react'
import ItemCard from './ItemCard';

import NewItemForm from "./NewItemForm";
function SwitchContainer(){
    const [itemArray, setItemArray] = useState([])
    // const [userInfo, setUserInfo] = useState([])
    const [newItem, setNewItem] = useState("")
    useEffect(() => {
        (async ()=> {
          let req = await fetch("/users/1/items")
          let res = await req.json()
          console.log("Results => ", res)
          setItemArray(res)
        })()
      }, [newItem])
    return (
        <div>
            <NewItemForm setNewItem={setNewItem}/>
            # Currently hardcoded to user 1
            <div className="item-masonry">{itemArray.map((el)=> {
                return (<ItemCard item={el} key={el.id}/>)
            })}</div>
        </div>
    )
}

export default SwitchContainer;