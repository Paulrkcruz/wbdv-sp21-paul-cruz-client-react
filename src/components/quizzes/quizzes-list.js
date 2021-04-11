import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    //todo: implement this in the separate service file
    useEffect(() => {
        fetch("http://localhost:3001/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                key={quiz._id} className="list-group-item">
                                {quiz.title}
                                <input type="button"
                                       value="Start"
                                       className="float-right">
                                </input>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;