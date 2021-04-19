const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json())

export const findQuizById = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())

export const submitQuiz = (quizId, questions) => {
    fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {'content-type': 'application/json'}})
        .then(response => response.json())
        .then(result => console.log(result))
}

export default {
    findAllQuizzes, findQuizById, submitQuiz
}