import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        <i className="fas fa-file"></i>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle} className="form-control"/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-lg"></i>}
            </td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-lg"></i>
            </td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-lg"></i>}
            </td>
        </tr>
    )
}


export default CourseRow