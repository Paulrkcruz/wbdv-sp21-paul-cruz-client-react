import widgetService from "../services/widget-service";


export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS = "FIND_WIDGETS"

export const creatWidgetForTopic = (dispatch, topicId) => {
    widgetService.creatWidgetForTopic(topicId, {title: "New Widget"})
        .then(widget => dispatch({
            type: CREATE_WIDGET,
            widget
        }))
}
export const deleteWidget = (dispatch, item) =>
    widgetService.deleteWidget(item._id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widgetToDelete: item
        }))

export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget._id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget
        }))

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS,
            widgets
        }))
}

const widgetActions = {
    creatWidgetForTopic, deleteWidget, updateWidget, findWidgetsForTopic
}

export default widgetActions;