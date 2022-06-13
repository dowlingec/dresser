import { useState } from 'react';

const initialState = {
    item_type: "",
    name: "",
    color: "",
    occasion: ""
};

function EditModal ({item}) {
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
        setFormData(initialState)
    }

    return(
        <div>
            <form id="edit-form" onSubmit={(e) => {
                e.preventDefault()
                handleEdit()
            }}>
                <input type="text" id="item_type" placeholder="Item type" value={formData.item_type} onChange={handleChange}/>
                <input type="text" id="name" placeholder="Item name" value={formData.name} onChange={handleChange}/>
                <input type="text" id="color" placeholder="Color" value={formData.color} onChange={handleChange}/>
                <input type="text" id="occasion" placeholder="Occasion" value={formData.occasion} onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>)
}

export default EditModal;