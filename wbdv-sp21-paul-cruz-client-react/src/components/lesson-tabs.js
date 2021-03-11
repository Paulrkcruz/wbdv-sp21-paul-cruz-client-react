import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService, {deleteLesson, updateLesson} from "../services/lesson-service"
import moduleService from "../services/module-service";

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
    const {courseId, moduleId, lessonId} = useParams();
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
                                to={`/courses/:layout/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
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
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                // lessons: lessons
                lessons
            }))
    },
    creatLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService.creatLessonForModule(moduleId, {title: "NEW LESSON"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            })),
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),

})

export default connect(stpm, dtpm)(LessonTabs)