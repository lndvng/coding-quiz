// defining global variables
const h2 = document.getElementsByTagName('h2');
const button = Array.from(document.getElementsByClassName('button'));
const answersEl = document.querySelector('.answers');
const startEl = document.querySelector('#start');
const questionEl = document.querySelector('#question');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const timerEl = document.querySelector('#timer');
let timeLeft = 75;

// create array for questions
let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Mixed Language",
        choice2: "Hyper Text Markup Language",
        choice3: "Hyper Text Multiple Language",
        choice4: "Hyper Tool Multi Language",
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the purpose of the HTML <a> element?",
        choice1: "To create a clickable button",
        choice2: "To add a line break in a text",
        choice3: "To display an image",
        choice4: "To define a hyperlink",
        answer: "To define a hyperlink"
    },
    {
        question: "What does CSS stand for?",
        choice1: "Computer Styled Sheets",
        choice2: "Creative Style Sheets",
        choice3: "Cascading Style Sheets",
        choice4: "Colorful Styling System",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the purpose of a FlexBox?",
        choice1: "Creating 3d Animations",
        choice2: "Managing database connections",
        choice3: "Styling and positioning elements within a container",
        choice4: "Generating random numbers",
        answer: "Styling and positioning elements within a container"
    },
    {
        question: "What does the NaN value represent in Javascript?",
        choice1: "Not a Nework",
        choice2: "New and Null",
        choice3: "Not a Number",
        choice4: "None and No",
        answer: "Not a Number"
    }
];

let timeInterval
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];

    if (questionEl) {
        displayQuestions();
    }
// timer
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
};

// start button brings user to quiz page
startQuiz();
    if (startEl) {
        startEl.addEventListener('click', function (){
            window.location.replace('./quiz.html')
        });
    }

function displayQuestions() {
    questionEl.textContent = questions[questionCounter].question;

    button[0].textContent = questions[questionCounter].choice1;
    button[1].textContent = questions[questionCounter].choice2;
    button[2].textContent = questions[questionCounter].choice3;
    button[3].textContent = questions[questionCounter].choice4;
}
console.log(displayQuestions);

// generates new question
function getNewQuestion(event) {

    let buttonText = event.target.textContent
    // if answer is correct, next question will generate. if answer is wrong, alert will pop up.
    if (buttonText === questions[questionCounter].answer) {
    } else {
        timeLeft = timeLeft - 10;
        alert('incorrect');
    }
    
    questionCounter++;
    if (questionEl && questionCounter < questions.length) {
        displayQuestions();
    }
    else {
        localStorage.setItem('timeLeft', timeLeft);
        window.location.replace('./score.html')
    }
};

answersEl.addEventListener('click', getNewQuestion);