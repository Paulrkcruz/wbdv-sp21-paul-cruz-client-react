import React from 'react'
import {Link} from "react-router-dom";


const CourseCard = ({course}) =>
    <div className="col-4">
        <div className="card" style={{width: "20rem"}}>
            <img src={`https://pbs.twimg.com/profile_images/1086003406488113153/XBSj69e5_400x400.jpg`} alt={`missing image`}/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Description of {course.title}</p>
                <Link to="/courses/editor" className="btn btn-primary">{course.title}</Link>
                <i className="fas fa-check fa-lg"></i>
                <i className="fas fa-trash fa-lg"></i>
                <i className="fas fa-edit fa-lg"></i>
            </div>
        </div>
    </div>


export default CourseCard