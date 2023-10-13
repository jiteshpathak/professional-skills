const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: 3,
    },
    {
        question: "What is 7 x 8?",
        options: [42, 56, 63, 72],
        correctAnswer: 1,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".option");
const resultElement = document.getElementById("result");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = currentQuestion.options[i];
        optionElements[i].addEventListener("click", () => checkAnswer(i));
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

displayQuestion();
