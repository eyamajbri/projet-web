const wordsToFind = ['CHAMPION', 'ACTIVITY', 'FACT', 'CSS', 'HTML'];

const gridLetters = [  ['C', 'H', 'A', 'M', 'P', 'I', 'O', 'N', 'L', 'C', 'O', 'A'],
  ['T', 'B', 'S', 'L', 'N', 'O', 'S', 'D', 'J', 'O', 'D', 'E'],
  ['J', 'F', 'R', 'D', 'Y', 'T', 'I', 'V', 'I', 'T', 'C', 'A'],
  ['O', 'S', 'A', 'E', 'H', 'Y', 'A', 'L', 'A', 'L', 'F', 'M'],
  ['R', 'E', 'A', 'C', 'A', 'L', 'A', 'C', 'D', 'T', 'V', 'T'],
  ['T', 'Y', 'T', 'R', 'T', 'N', 'M', 'J', 'C', 'M', 'N', 'I'],
  ['F', 'D', 'I', 'I', 'T', 'H', 'T', 'F', 'P', 'N', 'T', 'O'],
  ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'E', 'F', 'L'],
  ['L', 'E', 'M', 'O', 'E', 'R', 'G', 'E', 'E', 'E', 'O', 'M'],
  ['P', 'R', 'E', 'S', 'E', 'S', 'T', 'A', 'T', 'I', 'O', 'T'],
  ['G', 'N', 'I', 'T', 'I', 'C', 'S', 'T', 'O', 'M', 'O', 'H'],
  ['A', 'O', 'M', 'E', 'J', 'R', 'D', 'C', 'G', 'H', 'T', 'M'],
  ['A', 'L', 'L', 'T', 'N', 'T', 'M', 'T', 'N', 'T', 'F', 'I']
];

const wordSearch = document.getElementById('word-search');
const wordList = document.getElementById('word-list');
const resetBtn = document.getElementById('reset-btn');

// Créer la grille de lettres
for (let i = 0; i < gridLetters.length; i++) {
  for (let j = 0; j < gridLetters[i].length; j++) {
    const letter = document.createElement('div');
    letter.classList.add('letter');
    letter.dataset.row = i;
    letter.dataset.col = j;
    letter.textContent = gridLetters[i][j];
    wordSearch.appendChild(letter);
  }
}
// Créer la liste de mots
for (let i = 0; i < wordsToFind.length; i++) {
    const word = document.createElement('li');
    word.textContent = wordsToFind[i];
    wordList.appendChild(word);
  }
  
  // Ajouter un écouteur d'événements sur chaque lettre
  const letters = document.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.addEventListener('click', () => {
      // Marquer la lettre comme trouvée
      letter.classList.add('found');
      
      // Vérifier si un mot est complété
      const foundWords = document.querySelectorAll('.found');
      const foundWordStrings = [];
      for (let i = 0; i < foundWords.length; i++) {
        const row = foundWords[i].dataset.row;
        const col = foundWords[i].dataset.col;
        
        // Vérifier si le mot est complet en cherchant des lettres adjacentes
        const word = [];
        for (let j = 0; j < wordsToFind.length; j++) {
          if (wordsToFind[j].includes(foundWords[i].textContent)) {
            const wordLetters = document.querySelectorAll(`.letter[data-row="${row}"][data-col="${col}"]`);
            const wordString = Array.from(wordLetters).map(letter => letter.textContent).join('');
            if (wordsToFind[j] === wordString) {
              foundWordStrings.push(wordString);
            }
        }
      }
    }
    // Mettre à jour la liste de mots trouvés
    const wordItems = document.querySelectorAll('#word-list li');
    for (let i = 0; i < wordItems.length; i++) {
      if (foundWordStrings.includes(wordItems[i].textContent)) {
        wordItems[i].classList.add('found');
      }
    }
  });
});

// Réinitialiser le jeu
resetBtn.addEventListener('click', () => {
  const foundLetters = document.querySelectorAll('.found');
  for (let i = 0; i < foundLetters.length; i++) {
    foundLetters[i].classList.remove('found');
  }

  const foundWords = document.querySelectorAll('.word-list .found');
  for (let i = 0; i < foundWords.length; i++) {
    foundWords[i].classList.remove('found');
  }
});