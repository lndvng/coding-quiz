const timeLeft = localStorage.getItem('timeLeft');
const finalScore = document.querySelector('#finalScore');
const username = document.querySelector('#username');
const entryForm = document.querySelector('#entryForm');
const displayScore = document.querySelector('#displayScore');
const score = document.querySelector('#score');
const scoreboard = document.querySelector('#scoreboard');

let highScore = [];

finalScore.textContent = timeLeft;

function saveInitial (event) {
    event.preventDefault();

    let initial = username.value;
    highScore.push ({
        initial, timeLeft
    })

    localStorage.setItem ('HS', JSON.stringify(highScore));

    score.style.display = 'none';
    scoreboard.style.display = 'block';
    displayAllScores();
}
 displayAllScores();
// saving high scores without replacing previous score
function displayAllScores () {
    if (localStorage.getItem('HS')) {
        highScore = JSON.parse(localStorage.getItem('HS'));
    }

    displayScore.textContent = '';
    for (i = 0; i < highScore.length; i++) {
        let li = document.createElement('li');
        li.textContent = highScore[i].initial+' - '+highScore[i].timeLeft;

        displayScore.appendChild(li);
    }

}

entryForm.addEventListener('submit', saveInitial);