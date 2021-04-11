import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import Question from "../questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        //todo: move this to a service file
        fetch(`http://localhost:3001/api/quizzes/${quizId}/questions`)
            .then(reponse => reponse.json())
            .then(questions => setQuestions(questions))
    }, [])
    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li key={question._id}>
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz