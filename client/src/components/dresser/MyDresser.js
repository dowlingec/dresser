import {useEffect, useState} from 'react'
import ItemCard from './ItemCard';
import NewItemForm from "./NewItemForm";
import NewOutfit from './NewOutfit';

function MyDresser({weatherData}){
    const [itemArray, setItemArray] = useState([])
    // const [userInfo, setUserInfo] = useState([])
    const [newItem, setNewItem] = useState(1)
    const [deleteItem, setDeleteItem] = useState(1)
    const [newVisible, setNewVisible] = useState(false)
    // const [newOutfit, setNewOutfit] = useState("")
    const [formVisible, setFormVisible] = useState(false)
    //to pass to itemcard for addtoutfitaction
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        (async ()=> {
        //   let req = await fetch("/users/1")
        // testing if above broke my code
            let req = await fetch("/users/1") 
          let res = await req.json()
          console.log("Results of outfits => ", res.outfits)
        //   setItemArray(res.items)
            setItemArray(res.items)
            setOutfits(res.outfits)
        })()
    }, [newItem, deleteItem])

    return (
        <div className="dresser-body">
            <button onClick={() => {setNewVisible(true) }}><i class="fa-solid fa-square-plus fa-3x">ITEM</i></button>
            <button onClick={() => {setFormVisible(true) }}><i class="fa-solid fa-square-plus fa-3x">OUTFIT</i></button>
            <NewItemForm setNewItem={setNewItem} setNewVisible={setNewVisible} newItem={newItem} newVisible={newVisible}/>
            <NewOutfit setFormVisible={setFormVisible} formVisible={formVisible} weatherData={weatherData}/>
            {/* <h5>HARDCODED TO USER</h5> */}
            <div className="item-masonry">{itemArray.map((el)=> {
                return (<ItemCard item={el} key={el.id} setDeleteItem={setDeleteItem} deleteItem={deleteItem}
                    outfits={outfits}
                />)
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