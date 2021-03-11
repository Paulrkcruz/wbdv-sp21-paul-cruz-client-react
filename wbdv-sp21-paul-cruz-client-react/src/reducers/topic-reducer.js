const initialState = {
    topics: [
        // {_id: "123", title: "Topic 11"},
        // {_id: "456", title: "Topic 22"},
        // {_id: "789", title: "Topic 33"}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type){
        case "DELETE_TOPIC":
        const state1 = {
            topics: state.topics.filter(topic => {
                if (topic._id === action.topicToDelete._id) {
                    return false
                } else {
                    return true
                }
            })
        }
        return state1
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if (t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer