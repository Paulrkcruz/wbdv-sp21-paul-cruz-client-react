import React, {useEffect} from "react";
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service"
import moduleActions from "../actions/module-actions";

const ModuleList = (
    {
        myModules=[],
        createModule = () => alert("Create Module 111"),
        deleteModule = (item) => alert("delete " + item._id),
        updateModule,
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            findModulesForCourse(courseId)
        }
        // alert(courseId)

    }, [])
    return (
        <div>
            {/*<h2>Modules {myModules.length}</h2>*/}
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li key={module._id} className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus-circle fa-2x float-right"
                       style={{color: "red"}}></i>
                </li>
            </ul>
        </div>)
}


const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
        deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
        updateModule: (module) => moduleActions.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)(ModuleList)