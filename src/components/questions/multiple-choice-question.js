import React, {useState} from 'react';

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [grade, setGrade] = useState(false)

    return(
        <div>
            <h4>
                {question.question}
                {
                    grade &&
                    yourAnswer == question.correct &&
                    <i className="fas fa-check" style={{color:"green"}}></i>
                }
                {
                    grade &&
                    yourAnswer != question.correct &&
                    <i className="fas fa-times" style={{color:"red"}}></i>
                }
                {/*{*/}
                {/*    yourAnswer ? (question.correct === yourAnswer ?*/}
                {/*        (<i className="fas fa-check fa-lg"></i>) : (<i className="fas fa-times fa-lg"></i>)) : null*/}

                {/*}*/}
                {/*{*/}
                {/*    question.correct === yourAnswer &&*/}
                {/*    <i className="fas fa-check"></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    question.correct !== yourAnswer &&*/}
                {/*    <i className="fas fa-times"></i>*/}
                {/*}*/}
            </h4>
            <ul className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                        <li
                            key={choice}
                            className={
                                `list-group-item
                    ${grade && question.correct === choice ? "list-group-item-success" : ``}
                    ${grade && question.correct !== choice && choice === yourAnswer ? "list-group-item-danger" : ``}
                    `}>
                            <input type="radio"
                                   name={question._id}
                                   onClick={() => setYourAnswer(choice)
                                   }
                            />
                            <label className="form-check-label ml-2" htmlFor="gridRadios2">
                                {choice}
                            </label>
                            {
                                grade && question.correct === choice &&
                                <i className={"fas fa-check float-right m-0"}></i>
                            }
                            {
                                grade && question.correct !== choice && choice === yourAnswer &&
                                <i className={"fas fa-times float-right"}></i>
                            }
                        </li>
                    )
                })
            }
            </ul>
            <br/>
            <p>Your Answer: {yourAnswer}</p>
            <button
                onClick={() => setGrade(true)}
                type="button"
                className="btn btn-success mb-4">
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion