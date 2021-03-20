import topicService from "../services/topic-service";

export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const FIND_TOPICS = "FIND_TOPICS"

export const creatTopicForLesson = (dispatch, lessonId) => {
    topicService.creatTopicForLesson(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: CREATE_TOPIC,
            topic
        }))
}
export const deleteTopic = (dispatch, item) =>
    topicService.deleteTopic(item._id)
        .then(status => dispatch({
            type: DELETE_TOPIC,
            topicToDelete: item
        }))

export const updateTopic = (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic
        }))

export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS,
            topics
        }))
}

const topicActions = {
    creatTopicForLesson, deleteTopic, updateTopic, findTopicsForLesson
}

export default topicActions;