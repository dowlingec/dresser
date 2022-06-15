import { useState } from 'react';

const initialState = {
    item_type: "",
    name: "",
    color: "",
    occasion: ""
};

function EditModal ({item, isVisible, setVisible }) {
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
    }
    
    const handleEdit = async () => {
        // let itemEdit = new FormData(document.querySelector('#edit-form'))
        // console.log("Form data =>", itemEdit)
        let req = await fetch(`/items/${item.id}`, {
          method: "PATCH",
          headers: {"Content-Type" : "application/json"},
          body : JSON.stringify(formData)
        })
        let res = await req.json()
        console.log("Edits =>", res)
        setFormData(initialState)
    }

    return(
        <div onClick={() => { return null }} className="edit-screen" style={{ display: isVisible ? "block" : "none"}}>
            <a href="#" className='close-button' onClick={() => { setVisible(false)}}><i class="fa-solid fa-xmark fa-3x"></i></a>
            <h4>Edit {item.name}</h4>
            <form id="edit-form" onSubmit={(e) => {
                e.preventDefault()
                handleEdit()
            }}>
                <input type="text" id="name" placeholder="Item name" value={formData.name} onChange={handleChange}/>
                <input type="text" id="item_type" placeholder="Item type" value={formData.item_type} onChange={handleChange}/>
                {/* <select id="item_type">
                    <option value="headwear">Headwear</option>
                    <option value="eyewear">Eyewear</option>
                    <option value="neckwear">Neckwear</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="one_piece">One-Piece</option>
                    <option value="hosiery">Hosiery</option>
                    <option value="shoes">Shoes</option>
                </select> */}
                <input type="text" id="color" placeholder="Color" value={formData.color} onChange={handleChange}/>
                {/* <select name="color">
                    <option value="white">White</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="green">Green</option>
                    <option value="grey">Grey</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="multi_color">Multi Color</option>
                    <option value="red">Red</option>
                    <option value="cream">Cream</option>
                    <option value="yellow">Yellow</option>
                    <option value="beige">Beige</option>
                    <option value="orange">Orange</option>
                </select> */}
                <input type="text" id="occasion" placeholder="Occasion" value={formData.occasion} onChange={handleChange}/>
                {/* <select name="occasion">
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                    <option value="sporty">Sporty</option>
                    <option value="party">Party</option>
                </select> */}
                <input type="submit"/>
            </form>
        </div>)
}

export default EditModal;