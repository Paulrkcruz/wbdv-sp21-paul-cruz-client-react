import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";


const CourseGrid = ({courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
        <h2 style={{color: "blue"}}>Course Grid - Total course(s): {courses.length}</h2>
        <div className="row">
            {
                courses.map(course =>
                        <CourseCard
                            key={course._id}
                            course={course}/>
                        )
            }
        </div>
    </div>


export default CourseGrid