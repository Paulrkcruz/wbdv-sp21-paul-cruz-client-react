import React from 'react'
import {Link, useParams} from "react-router-dom"
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../reducers/topic-reducer";
import WidgetList from "./course-editor/widgets/widget-list";
import widgetReducer from "../reducers/widget-reducer"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

// const CourseEditor = ({props}) =>

const CourseEditor = ({history, params}) =>
    // <h1>
    //     <Link to="#">
    //     <i className="fas fa-arrow-left"></i>
    //     </Link>
    //     Course Editor
    //     <i onClick={() => props.history.goBack()}
    //        className="fas fa-times float-right"></i>
    // </h1>
{

    return (
        <Provider store={store}>
            <div className="container">
                <h2>
                    <i onClick={() => history.goBack()}
                       className="fas fa-arrow-circle-left"
                       style={{color: "blue"}}>
                    </i>
                    Course Editor
                    <a href="http://localhost:3000/">
                        <i className="fas fa-home float-right"></i>
                    </a>
                </h2>
                {/*<div class="row">*/}
                {/*        <div class="col-4">*/}
                {/*                <ul class="list-group">*/}
                {/*                        <li className="list-group-item active">Module 1 - jQuery*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 2 - React*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 3 - Redux*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 4 - Native*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 5 - Angular*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 6 - Node*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                        <li className="list-group-item">Module 7 - Mongo*/}
                {/*                                <i className="fas fa-times fa-lg float-right"></i>*/}
                {/*                        </li>*/}
                {/*                </ul>*/}
                {/*                <a className="nav-link" href="#">*/}
                {/*                        <i className="fas fa-plus-circle fa-2x float-right"*/}
                {/*                           style={{color: "red"}}></i>*/}
                {/*                </a>*/}
                {/*        </div>*/}
                {/*        <div class="col-8">*/}
                {/*                <ul class="nav nav-tabs">*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" aria-current="page" href="#">Build</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link active" href="#">Pages</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#">Theme</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#">Apps</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#">Settings</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#" tabIndex="-1"*/}
                {/*                                   aria-disabled="true">*/}
                {/*                                        <i className="fas fa-lg fa-plus"></i>*/}
                {/*                                </a>*/}
                {/*                        </li>*/}
                {/*                </ul>*/}
                {/*                <br/>*/}
                {/*                <ul class="nav nav-pills">*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" aria-current="page" href="#">Topic 1</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link active" href="#">Topic 2</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#">Topic 3</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#">Topic 4</a>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                                <a className="nav-link" href="#" tabIndex="-1"*/}
                {/*                                   aria-disabled="true">*/}
                {/*                                        <i className="fas fa-plus-square fa-lg"></i>*/}
                {/*                                </a>*/}
                {/*                        </li>*/}
                {/*                </ul>*/}
                {/*                <br/>*/}
                {/*                Content intentionally left blank*/}
                {/*        </div>*/}
                {/*</div>*/}
            </div>
            {JSON.stringify(params)}
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <TopicPills/>
                    <br/>
                    <WidgetList/>
                </div>
            </div>
        </Provider>)
}

export default CourseEditor