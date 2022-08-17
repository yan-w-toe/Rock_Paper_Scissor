let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
container.textContent = 'Player 0 | Computer 0'

const announcement = document.querySelector('#announcement');

//announcement
function announce(player, computer){
    if (player == 5){
        announcement.textContent = 'Player wins the round'
    } else if (computer == 5){
        announcement.textContent = 'Computer wins the round'
    }
}

//computer choice
function getComputerChoice() {
    const message = Math.floor(Math.random() * 100);
    if (message < 50 ) {
        return 'rock';
    } else if ( message % 2 === 1) {
        return 'paper';
    } else if ( message % 2 === 0) {
        return 'scissors';
    }
}

//Play rounds
function playRound(player, computer) {
    if (player === computer) {
        container.textContent = 'This is a draw';
    } else if (player === 'rock' && computer === 'paper'){
        computerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    } else if (player === 'rock' && computer === 'scissors'){
        playerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    } else if (player === 'paper' && computer === 'rock'){
        playerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    } else if (player === 'paper' && computer === 'scissors'){
        computerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    } else if (player === 'scissors' && computer === 'rock'){
        computerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    } else if (player === 'scissors' && computer === 'paper'){
        playerScore += 1;
        container.textContent = `Player ${playerScore} | Computer ${computerScore}`;
        announce(playerScore, computerScore)
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})



