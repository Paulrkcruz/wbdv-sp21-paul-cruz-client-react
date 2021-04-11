import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";


const WidgetList = () => {
    const {topicId} = useParams()
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] =useState({})

    useEffect(() => {
        //TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const creatWidgetForTopic = () => {
        //TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({name: "Widget", type: "HEADING", widgetOrder: 1, text: "New Widget",
                url: "wedget.com", size: 2, width: 4, cssClass:"cssClass", style:"heading", value:"1"}),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json())
            .then(actualWidget =>
                setWidgets(widgets => [...widgets, actualWidget]))
    }

    const deleteWidget = (id) =>
        //TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/widgets/${id}`,{
            method: "DELETE"
        }).then(() => {
            setWidgets((widgets) => widgets.filter(w => w.id !== id))
        })

    const updateWidget = (id, widget) =>
        //TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/widgets/${id}`,{
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": 'application/json'
            }
        }).then(response => {
            setWidget({})
            setWidgets((widgets) => widgets.map(w => w.id !== id ? w : widget))
        })

    return(
        <div>
            <h2>
                Widget List {widgets.length} {widget.id}
                <i onClick={creatWidgetForTopic} className="fas fa-plus float-right"></i>
            </h2>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash fa-2x float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(_widget.id, widget)
                                    }} className="fas fa-check fa-2x float-right"></i>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog fa-2x float-right"></i>
                            }

                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.type === "LIST" &&
                                <ListWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList