const choices = document.querySelectorAll('#choices button');
const result = document.getElementById('result');

// Computer choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Play a round of the game
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return 'Tie game!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Update the result display
function updateResultDisplay(resultText) {
    result.textContent = resultText;
}

// Reset the result display
function resetResultDisplay() {
    result.textContent = 'Make your choice to start the game!';
}

// Event listener for each button
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerSelection = choice.id;
        const roundResult = playRound(playerSelection);
        updateResultDisplay(roundResult);
    });
});

// Reset button event listener
document.getElementById('reset').addEventListener('click', resetResultDisplay);
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Perform game logic here
  });
});
