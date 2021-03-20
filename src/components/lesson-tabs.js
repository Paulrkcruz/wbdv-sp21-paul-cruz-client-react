import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService, {deleteLesson, updateLesson} from "../services/lesson-service"
import moduleService from "../services/module-service";
import lessonActions from "../actions/lesson-actions";

const LessonTabs = (
    {
        lessons = [
            // {_id: "123", title: "Lesson A"},
            // {_id: "123", title: "Lesson B"},
            // {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        creatLessonForModule,
        updateLesson,
        deleteLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
        // findLessonsForModule(moduleId)
    }, [moduleId])
    return (
        <div>
            <h2>
                {/*Lessons {lessons.length}*/}

            </h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li key={lesson._id} className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
                            {/*<li className="nav-item">*/}
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Lesson 1</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Lesson 2</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link active" href="#">Lesson 3</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Lesson 4</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Lesson 5</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <i onClick={() => creatLessonForModule(moduleId)} className="fas fa-plus-circle fa-2x" style={{color: "red"}}></i>*/}
                {/*</li>*/}
                <li>
                    <i onClick={() => creatLessonForModule(moduleId)} className="fas fa-plus-circle fa-2x float-right" style={{color: "green"}}></i>
                </li>
            </ul>
        </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId),
    creatLessonForModule: (moduleId) => lessonActions.creatLessonForModule(dispatch, moduleId),
    deleteLesson: (item) => lessonActions.deleteLesson(dispatch, item),
    updateLesson: (lesson) => lessonActions.updateLesson(dispatch, lesson),

})

export default connect(stpm, dtpm)(LessonTabs)