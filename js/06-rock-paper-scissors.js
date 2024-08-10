// 0 < rock <= 1 / 3 < paper <= 2 / 3 < scissor < 1

updateScore();

const moveList = ['rock', 'paper', 'scissors'];

moveList.forEach(move => {
    document.querySelector(`.js-${move}`).addEventListener('click', () => {
        playGame(move);
    });
});

document.querySelector('.js-reset-score').addEventListener('click', () => {
    const isConfirmed = confirm("Are you sure to reset score?");
            
    if (isConfirmed) {
        resetScore();
    }
});

const autoPlayElement = document.querySelector('.js-auto-play');

autoPlayElement.addEventListener('click', () => {
    autoPlay();
});

let intervalId;
let isAutoPlaying = false;

function autoPlay() {
    const playMovesFunction = () => playGame(getAutoMoves());

    if (!isAutoPlaying) {
        intervalId = setInterval(playMovesFunction, 2000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

    autoPlayElement.innerHTML = isAutoPlaying ? 'Stop Auto Playing' : 'Auto Play';
}

function playGame(playerMoves) {
    const score = getFromLocal();
    const computerMoves = getAutoMoves();
    let winner = 'Computer';

    if (playerMoves === 'rock') {
        if (computerMoves === 'paper') {
            score.loses++;
        } else if (computerMoves === 'scissors') {
            score.wins++;
            winner = 'You';
        } else {
            score.ties++;
            winner = 'Tie';
        }
    } else if (playerMoves === 'paper') {
        if (computerMoves === 'rock') {
            score.wins++;
            winner = 'You';
        } else if (computerMoves === 'scissors') {
            score.loses++;
        } else {
            score.ties++;
            winner = 'Tie';
        }
    } else {
        if (computerMoves === 'rock') {
            score.loses++;
        } else if (computerMoves === 'paper') {
            score.wins++;
            winner = 'You';
        } else {
            score.ties++;
            winner = 'You';
        }
    }

    getWinner(playerMoves, computerMoves, winner);

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
}

function resetScore() {
    localStorage.removeItem('score');

    document.querySelector('.js-winner').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
    document.querySelector('.js-score').innerHTML = 'Wins: 0, Losses: 0, Ties: 0';
}

function updateScore() {
    score = getFromLocal();
    const scoreElement = document.querySelector('.js-score');
    scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function getAutoMoves() {
    let computerMoves = 'scissors';
    const randomValue = Math.random();

    console.log(randomValue);

    if (randomValue <= 1 / 3) {
        computerMoves = 'rock';
    } else if (randomValue <= 2 / 3) {
        computerMoves = 'paper'
    }
    
    return computerMoves;
}

function getWinner(playerMoves, computerMoves, winner) {
    const winnerElement = document.querySelector('.js-winner');
    
    if (winner === 'Tie') {
        winnerElement.innerHTML = winner;
    } else {
        winnerElement.innerHTML = winner + ' win';
    }

    const movesElement = document.querySelector('.js-moves');

    movesElement.innerHTML = `You <img src="../images/${playerMoves}-emoji.png" class="move-icon"> 
        : Computer <img src="../images/${computerMoves}-emoji.png" class="move-icon">`;
}

function getFromLocal() {
    return JSON.parse(localStorage.getItem('score')) || {wins: 0, loses: 0, ties: 0};
}