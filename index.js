const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const hideText = document.querySelector('luck')


let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function hideLuck(){

}
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is Earths largest continent?',
    answers: [
      { text: 'Asia', correct: true },
      { text: 'North America', correct: false},
      { text: 'Europe' ,correct: false},
      { text: 'Antartica' ,correct: false}
    ]
  },
  {
    question: 'How many hearts does an octopus have?',
    answers: [
      { text: '3', correct: true },
      { text: '8', correct: false },
      { text: '1', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'How many legs does a spider have?',
    answers: [
      { text: '0', correct: false },
      { text: '8', correct: true },
      { text: '7', correct: false },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'What is the nearest planet to the sun?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Uranus', correct: false }
    ]
  },
  {
    question: 'How many teeth does an adult human have?',
    answers: [
      { text: '70', correct: false },
      { text: '32', correct: true },
      { text: '64', correct: false },
      { text: '26', correct: false }
    ]
  },
  {
    question: 'Who was the second president of the United States?',
    answers: [
      { text: 'George Washington', correct: false },
      { text: 'John Adams', correct: true },
      { text: 'James Madison', correct: false },
      { text: 'James Monroe', correct: false }
    ]
  },
  {
    question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
    answers: [
      { text: 'Australia', correct: false },
      { text: 'Africa', correct: false },
      { text: 'India', correct: true },
      { text: 'France', correct: false }
    ]
  },
  {
    question: 'Which Central American country has a name which translates to English as “The Saviour”?',
    answers: [
      { text: 'El Salvador', correct: true },
      { text: 'Mexico', correct: false },
      { text: 'Costa Rica', correct: false },
      { text: 'Guatemala', correct: false }
    ]
  },
  {
    question: 'The name of which African animal means "river horse"?',
    answers: [
      { text: 'River Horse', correct: false },
      { text: 'Hippo', correct: true },
      { text: 'Seahorse', correct: false },
      { text: 'Crocodiles', correct: false }
    ]
  },
  {
    question: 'What is the opposite of matter?',
    answers: [
      { text: 'Non-matter', correct: false },
      { text: 'Antimatter', correct: true },
      { text: 'Unmatter', correct: false },
      { text: 'No Matter', correct: false }
    ]
  },
  {
    question: 'In what type of matter are atoms most tightly packed?',
    answers: [
      { text: 'Liquid', correct: false },
      { text: 'Gas', correct: false },
      { text: 'Plasma', correct: false },
      { text: 'Solids', correct: true }
    ]
  }
]

function move() {
  const element = document.getElementById("myBar");   
  let width = 0;
  const id = setInterval(frame, 110);
  function frame() {
    if (width == 42) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}