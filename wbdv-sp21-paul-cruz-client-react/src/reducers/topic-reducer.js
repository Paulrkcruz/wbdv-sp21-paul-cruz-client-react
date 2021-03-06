const initialState = {
    topics: []
};

export const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === action.topic._id ? action.topic : topic)
            }
        case "CLICK_ON_TOPIC":
            return {
                ...state,
                currentTopicId: action.topicId
            }
        default:
            return state
    }
}

export default TopicReducer;