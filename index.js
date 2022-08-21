const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
console.log('next')
shuffledQuestion = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
}

function selectAnswer(){

}
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
}

const questions = [{
    question: 'what is 2*2',
    answer: [
        {text: '4', correct: true},
        {text: '200', correct: false}
  ]
 }
]