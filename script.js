const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const quizContainer = document.getElementById("quiz-container");
const resultScreen = document.getElementById("result-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progressFill");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1918", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false }
        ]
    }
];

startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  quizContainer.style.display = "block";
  startQuiz();
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next ➡️";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });

  updateProgress();
}

function resetState() {
  nextBtn.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
  if (correct) {
    button.style.background = "green";
    score++;
  } else {
    button.style.background = "red";
  }
  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  resultScreen.style.display = "block";
  scoreText.innerHTML = `You scored ${score} out of ${questions.length}`;
}

function updateProgress() {
  progressFill.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + "%";
}