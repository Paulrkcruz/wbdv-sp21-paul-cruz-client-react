import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, FIND_WIDGETS} from "../actions/widget-actions";


const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_WIDGET:
            const state1 = {
                widgets: state.widgets.filter(widget => {
                    if (widget._id === action.widgetToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }

            return state1

        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(w => {
                    if (w._id === action.widget._id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }

        case CREATE_WIDGET:
            const newState = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState

        case FIND_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            }

        default:
            return state
    }
}

export default widgetReducer