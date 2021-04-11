const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json())

export const findQuizById = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())

export default {
    findAllQuizzes, findQuizById
}