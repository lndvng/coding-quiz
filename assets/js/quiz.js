const h2 = document.getElementsByTagName('h2');
const button = Array.from(document.getElementsByClassName('button'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Mixed Language",
        choice2: "Hyper Text Markup Language",
        choice3: "Hyper Text Multiple Language",
        choice4: "Hyper Tool Multi Language",
        answer: 2
    },
    {
        question: "What is the purpose of the HTML <a> element?",
        choice1: "To create a clickable button",
        choice2: "To add a line break in a text",
        choice3: "To display an image",
        choice4: "To define a hyperlink",
        answer: 4
    },
    {
        question: "What does CSS stand for?",
        choice1: "Computer Styled Sheets",
        choice2: "Creative Style Sheets",
        choice3: "Cascading Style Sheets",
        choice4: "Colorful Styling System",
        answer: 3
    },
    {
        question: "What is the purpose of a FlexBox?",
        choice1: "Creating 3d Animations",
        choice2: "Managing database connections",
        choice3: "Styling and positioning elements within a container",
        choice4: "Generating random numbers",
        answer: 3
    },
    {
        question: "What does the NaN value represent in Javascript?",
        choice1: "Not a Nework",
        choice2: "New and Null",
        choice3: "Not a Number",
        choice4: "None and No",
        answer: 3
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        h2.innerText = currentQuestion.question;

        button.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        })
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

button.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dateset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();