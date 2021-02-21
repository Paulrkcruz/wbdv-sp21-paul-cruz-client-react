import React from 'react'


const CourseEditor = ({props}) =>
    // <h1>
    //     <Link to="#">
    //     <i className="fas fa-arrow-left"></i>
    //     </Link>
    //     Course Editor
    //     <i onClick={() => props.history.goBack()}
    //        className="fas fa-times float-right"></i>
    // </h1>
    <div class="container">
        <h2>
            <i onClick={() => props.history.goBack()}
               className="fas fa-arrow-circle-left"
               style={{color: "blue"}}>
            </i>
            Course Editor
        </h2>
        <div class="row">
            <div class="col-4">
                <ul class="list-group">
                    <li className="list-group-item active">Module 1 - jQuery
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 2 - React
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 3 - Redux
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 4 - Native
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 5 - Angular
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 6 - Node
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                    <li className="list-group-item">Module 7 - Mongo
                        <i className="fas fa-times fa-lg float-right"></i>
                    </li>
                </ul>
                <a className="nav-link" href="#">
                    <i className="fas fa-plus-circle fa-2x float-right"
                       style={{color: "red"}}></i>
                </a>
            </div>
            <div class="col-8">
                <ul class="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-lg fa-plus"></i>
                        </a>
                    </li>
                </ul>
                <br/>
                <ul class="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-plus-square fa-lg"></i>
                        </a>
                    </li>
                </ul>
                <br/>
                Content intentionally left blank
            </div>
        </div>
    </div>


export default CourseEditor