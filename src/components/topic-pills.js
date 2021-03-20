import React, {useEffect} from 'react'
import {connect} from "react-redux";
import topicService from "../services/topic-service";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service";
import topicActions from "../actions/topic-actions";

const TopicPills = (
    {
        topics = [
            // {_id: "123", title: "Topic 1"},
            // {_id: "456", title: "Topic 2"},
            // {_id: "789", title: "Topic 3"}
        ],
        creatTopicForLesson,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
        // findLessonsForModule(moduleId)
    }, [lessonId])
    return (
        <div>
            {/*<h2>Topics</h2>*/}
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        // <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}>
                        <li key={topic._id} className="nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" aria-current="page" href="#">Topic 1</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link active" href="#">Topic 2</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Topic 3</a>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Topic 4</a>*/}
                {/*</li>*/}
                <li className="nav-item">
                    <a className="nav-link" href="#" tabIndex="-1"
                       aria-disabled="true">
                        <i onClick={() => creatTopicForLesson(lessonId)} className="fas fa-plus-square fa-2x"></i>
                    </a>
                </li>
            </ul>
        </div>)
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => {
    return {
        creatTopicForLesson: (lessonId) => topicActions.creatTopicForLesson(dispatch, lessonId),
        deleteTopic: (item) => topicActions.deleteTopic(dispatch, item),
        updateTopic: (topic) => topicActions.updateTopic(dispatch, topic),
        findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId)
    }
}

export default connect(stpm, dtpm) (TopicPills)