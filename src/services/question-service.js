const QUIZZES_URL = "http://localhost:3001/api/quizzes"

const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz
}