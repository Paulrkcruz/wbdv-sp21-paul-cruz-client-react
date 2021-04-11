import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [grade, setGrade] = useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    grade && question.correct === answer &&
                    <i className="fas fa-check" style={{color:"green"}}></i>
                }
                {
                    grade && question.correct !== answer &&
                    <i className="fas fa-times" style={{color:"red"}}></i>
                }
            </h4>
            {/*{question.correct}*/}
            {/*<br/>*/}
            {/*{JSON.stringify(answer)}*/}
            {/*<br/>*/}
            <ul className="list-group">
                <li className={`list-group-item
                ${grade && question.correct === "true" ? "list-group-item-success" : ""}
                ${grade && question.correct !== "true" && answer === "true" ? "list-group-item-danger" : ""}`}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer("true")}
                        name={question._id}/>True</label>
                    {
                        grade && question.correct === "true" &&
                        <i className={"fas fa-check float-right m-0"}></i>
                    }
                    {
                        grade && question.correct !== "true" && answer === "false" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>
                {/*<li className="list-group-item">*/}
                <li className={`list-group-item
                ${grade && question.correct === "false" ? "list-group-item-success" : ""}
                ${grade && question.correct !== "false" && answer === "true" ? "list-group-item-danger" : ""}
                            `}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer("false")}
                        name={question._id}/>False</label>
                    {
                        grade && question.correct === "false" &&
                        <i className={"fas fa-check float-right m-0"}></i>
                    }
                    {
                        grade && question.correct !== "false" && answer === "true" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>
            </ul>
            <br/>
            <p>Your Answer: {answer}</p>
            <button
                onClick={() => setGrade(true)}
                type="button"
                className="btn btn-success mb-4">
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion