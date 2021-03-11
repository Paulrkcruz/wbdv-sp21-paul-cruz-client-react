import React, {useState} from 'react'
import {Link} from "react-router-dom";


const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id: "ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className={"fas fa-edit fa-lg"}></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({...item,
                                title: e.target.value})}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className={"fas fa-check fa-lg"}></i>
                    <i onClick={() => deleteItem(item)} className={"fas fa-trash fa-lg"}></i>
                </>
            }
        </>
    )
}

export default EditableItem