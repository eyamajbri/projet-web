const games = {
  "Matching Pairs": [
    "../games/matchingPairs/matchingpairs.html",
    "./images/matchingPairs.png",
    "Matching Pairs"
  ],
  "Tic Tac Toe": [
    "../games/xo/index.html",
    "./images/TicTacToe.png",
    "Tic Tac Toe"
  ],
  "Sliding Puzzle": [
    "../games/puzzle/pzl.html",
    "./images/slidingpuzzle.png",
    "Puzzle"
  ],
  "Snake Game": [
    "../games/snake/snake.html",
    "./images/SnakeGame.png",
    "Snake"
  ],
  "Trivia Game": [
    "../games/trivia/trivia.html",
    "./images/trivia.png",
    "Trivia"
  ],
  "Hangman": [
    "../games/hangman/hangman.html",
    "./images/hangman.png",
    "Hangman"
  ],
  "Rock Paper Scissors": [
    "../games/rps/rps.html",
    "./images/rps.png",
    "Rock Paper Scissors"
  ],
  "Guess the Word": [
    "../games/guess/guess.html",
    "./images/Guess.png",
    "Guess"
  ]
};

function display(games) {
  const grid = document.querySelector(".grid");
  
  // Clear the grid by removing all child elements
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  
  Object.entries(games).forEach(([title, details]) => {
    const div = document.createElement("div");
    div.classList.add("gameContainer");
    const a = document.createElement("a");
    a.classList.add("game");
    a.href = details[0];
    const img = document.createElement("img");
    img.src = details[1];
    img.alt = details[2];
    const h2 = document.createElement("h2");
    h2.textContent = title;
    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(h2);
    grid.appendChild(div);
  });
}

window.onload = function() {
  display(games);
};

const searchbar = document.getElementById("searchbar");

function filterGames(games, filter) {
  const filteredGames = {};
  
  for (const title in games) {
    if (title.toLowerCase().startsWith(filter.toLowerCase())) {
      filteredGames[title] = games[title];
    }
  }
  
  return filteredGames;
}

searchbar.addEventListener("input", (e) => {
  const filteredGames = filterGames(games, e.target.value);
  display(filteredGames);
});
