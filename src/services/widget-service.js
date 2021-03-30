

export const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())

export const creatWidgetForTopic = (tid, widget) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())
        // .then(response => response.json())
        // .then(actualWidget =>
        //     setWidgets(widgets => [...widgets, actualWidget]))


export const updateWidget = (id, widget) =>
    fetch(`http://localhost:8080/api/widgets/${id}`,{
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())
    //     .then(response => {
    //     setWidget({})
    //     setWidgets((widgets) => widgets.map(w => w.id !== id ? w : widget))
    // })

export const deleteWidget = (id) =>
    fetch(`http://localhost:8080/api/widgets/${id}`,{
        method: "DELETE"
    }).then(response => response.json())
    //     .then(() => {
    //     setWidgets((widgets) => widgets.filter(w => w.id !== id))
    // })

export default {
    findWidgetsForTopic, creatWidgetForTopic, updateWidget, deleteWidget
}
