const initialState = {
    lessons: []
};

export const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === action.lesson._id ? action.lesson : lesson)
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case "CREATE_LESSON_FOR_MODULE":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "CLICK_ON_LESSON":
            return {
                ...state,
                currentLessonId: action.lessonId
            }
        default:
            return state
    }
}

export default LessonReducer;