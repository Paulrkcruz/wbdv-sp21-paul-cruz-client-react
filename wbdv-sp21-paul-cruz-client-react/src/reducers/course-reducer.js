const initialState = {
    courses: [],
    course: {
    }
}

export const CourseReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                course: action.course
            }
        default:
            return state
    }
}
export default CourseReducer;