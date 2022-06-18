import {useEffect, useState} from 'react'
import ItemCard from './ItemCard';
import NewItemForm from "./NewItemForm";
import NewOutfit from './NewOutfit';

function MyDresser(){
    const [itemArray, setItemArray] = useState([])
    // const [userInfo, setUserInfo] = useState([])
    const [newItem, setNewItem] = useState("")
    const [deleteItem, setDeleteItem] = useState(1)
    const [newVisible, setNewVisible] = useState(false)
    const [newOutfit, setNewOutfit] = useState("")
    const [formVisible, setFormVisible] = useState(false)

    useEffect(() => {
        (async ()=> {
          let req = await fetch("/users/1/items")
          let res = await req.json()
          console.log("Results => ", res)
          setItemArray(res)
        })()
      }, [newItem, deleteItem])
    return (
        <div className="dresser-body">
            <button onClick={() => {setNewVisible(true) }}><i class="fa-solid fa-square-plus fa-3x">ITEM</i></button>
            <button onClick={() => {setFormVisible(true) }}><i class="fa-solid fa-square-plus fa-3x">OUTFIT</i></button>
            <NewItemForm setNewItem={setNewItem} setNewVisible={setNewVisible} newVisible={newVisible}/>
            <NewOutfit setFormVisible={setFormVisible} formVisible={formVisible}/>
            <h5>HARDCODED TO USER</h5>
            <div className="item-masonry">{itemArray.map((el)=> {
                return (<ItemCard item={el} key={el.id} setDeleteItem={setDeleteItem} deleteItem={deleteItem}/>)
            })}</div>
            <i class="fa-brands fa-redhat"></i>
            <i class="fa-solid fa-hat-cowboy"></i>
            <i class="fa-solid fa-glasses"></i>
            <i class="fa-brands fa-black-tie"></i>
            <i class="fa-solid fa-shirt"></i>
            <i class="fa-solid fa-vest-patches"></i>
            <i class="fa-solid fa-shoe-prints"></i>
            <i class="fa-solid fa-socks"></i>
        </div>
    )
}

export default MyDresser;