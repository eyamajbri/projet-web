const games = { "Hangman": [
  "../games/hangman/hangman.html",
  "./images/hangman.png",
  "Hangman","Hangman is a classic word-guessing game where the word is represented by dashes, each dash representing a letter in the word. The guessing player suggests letters one at a time, and if the letter is present in the word, it is revealed in its correct position(s). If the guessed letter is not in the word, a part of a hangman's gallows or stick figure is drawn. The guessing player has a limited number of incorrect guesses before the hangman is complete, resulting in a loss. The objective is to guess the word correctly before the hangman is fully drawn."
],
  "Matching Pairs": [
    "../games/matchingPairs/matchingpairs.html",
    "./images/matchingPairs.png",
    "Matching Pairs",
    "The game starts with all the cards face down and the player turns over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again. The player has to match all the cards in order to win the game."
  ],
  "Tic Tac Toe": [
    "../games/xo/index.html",
    "./images/TicTacToe.png",
    "Tic Tac Toe","Tic Tac Toe is a family classic. It’s simple, and you can play it anywhere with a sheet of paper and pen. The strategy is the same whether you are a naught or a cross. Match 3 in a row to win the game, and block your opponent from being able to do the same. There’s a basic level of strategy that suits all ages of player."
  ],
  "Sliding Puzzle": [
    "../games/puzzle/pzl.html",
    "./images/slidingpuzzle.png",
    "Puzzle","Sliding puzzle is a popular brain-teasing game where players rearrange pieces of an pattern by sliding them into empty spaces. The objective is to arrange the pieces in the correct order to recreate the original image or pattern. Players can only move one piece at a time into the adjacent empty space, creating a strategic challenge as they plan their moves to solve the puzzle."
  ],
  "Snake Game": [
    "../games/snake/snake.html",
    "./images/SnakeGame.png",
    "Snake","Snake is a classic arcade game where the player controls a snake that grows longer as it consumes food. The objective is to guide the snake to eat the food while avoiding collisions with the snake's own body or the boundaries of the game area.The goal is to achieve the highest possible score by eating as much food as possible before the snake collides with itself or the walls, ending the game."
  ],
  "Trivia Game": [
    "../games/trivia/trivia.html",
    "./images/trivia.png",
    "Trivia","Trivia game is an exciting and educational game where players test their knowledge across various subjects. Players are presented with a series of questions or challenges covering a wide range of topics, such as history, science, pop culture, sports, and more. It's a fun and competitive way to learn new facts, challenge friends, and showcase your knowledge in a friendly competition."
  ],
 
  "Rock Paper Scissors": [
    "../games/rps/rps.html",
    "./images/rps.png",
    "Rock Paper Scissors","Rock-paper-scissors is a classic hand game played between two players. Each player simultaneously selects one of three hand gestures: rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock. The objective is to choose a gesture that defeats the opponent's gesture."
  ],
  "Guess the Word": [
    "../games/guess/guess.html",
    "./images/Guess.png",
    "Guess","Guess the word is an entertaining game where the player selects is presented with hints or clues to guide them in guessing it correctly. The hints can be in the form of synonyms, antonyms, descriptions, or even charades. The objective is to deduce the word within a certain number of guesses or clues."
  ]
};

function display(games) {
  const grid = document.querySelector(".grid");
  
  // Clear the grid by removing all child elements
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  let S=0;
  Object.entries(games).forEach(([title, details]) => {
    
    const div = document.createElement("div");
    div.classList.add("gameContainer");
    const list= document.createElement("div");
    list.classList.add("lista");
    const a = document.createElement("a");
    a.classList.add("game");
    a.href = details[0];
    const img = document.createElement("img");
    img.src = details[1];
    img.alt = details[2];
    const h2 = document.createElement("h2");
    h2.textContent = title;
    a.appendChild(img);
    const txt=document.createElement("p");
    txt.classList.add("txt")
    txt.innerText=details[3]
    const desc=document.createElement("div")
    desc.classList.add("desc");
    desc.appendChild(h2);
    desc.appendChild(txt)
    txt.style.display="flex"
    txt.style.flexDirection="column"
    txt.style.textAlign="justify"
    if (S%2 == 0) {
      list.appendChild(a)
      list.appendChild(desc)
      desc.style.display="flex"
      desc.style.flexDirection="column"
      desc.style.alignItems="flex-start";
      txt.style.paddingLeft="0px";
      txt.style.paddingRight="50px"
      txt.style.alignItems="flex-start"
    
    } else {
      list.appendChild(desc)
      list.appendChild(a)
      div.style.display="flex"
      div.style.flexDirection="column"
      div.style.alignItems="flex-end"
      desc.style.display="flex"
      desc.style.flexDirection="column"
      desc.style.alignItems="flex-end";
      txt.style.textAlign="right"
      txt.style.overflowWrap="break-word";
      txt.style.paddingRight="0px";
      txt.style.paddingLeft="50px";
      txt.style.alignItems="flex-end"    }
    list.style.gap="50px";

    div.appendChild(list);
    grid.appendChild(div);
    S++
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
