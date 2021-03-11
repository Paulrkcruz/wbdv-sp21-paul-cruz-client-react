import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <div className="container">
            <h1 style={{color: "blue"}}>
                <i className="fas fa-home"></i>
                Home
            </h1>
            <div className="list-group">
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
                <Link to="/courses/:layout/edit" className="list-group-item">
                    Course Editor
                </Link>
            </div>
        </div>
    </>