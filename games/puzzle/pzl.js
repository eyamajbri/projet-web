let tiles = document.querySelectorAll('.tile');
let emptyTile = document.querySelector('#empty');
const shuffleBtn = document.querySelector('#shuffle-btn');
const restartBtn = document.querySelector('#restart');
const congratulationsMsg = document.querySelector('#congratulations');
const playAgainBtn = document.querySelector('#play-again');
playAgainBtn.addEventListener('click', () => {
  congratulationsMsg.style.display="none"
  span.innerHTML=0
  count=0
  shuffle()
  initConfig=currentValues.slice()
});
let tilesArray = Array.from(tiles);
let currentValues = tilesArray.map(tile => {
  return tile.innerText;
});
let initConfig
let span = document.getElementById("counter")
let count = 0
window.onload = function() {
  shuffle();
  initConfig=currentValues.slice()
}

shuffleBtn.addEventListener('click', () => {
  shuffle();
});

restartBtn.addEventListener('click', () => {
  restart();
});
function restart(){
  tilesArray.forEach((tile, index=0) => {
    tile.innerText = initConfig[index];
    index++
  });
  tiles = document.querySelectorAll('.tile');
  updateTileArray(tiles);
}


function updateTileArray(tiles){
  tilesArray = Array.from(tiles);
  console.log(tilesArray)
  currentValues = tilesArray.map(tile => {
    return tile.innerText;
  });
  console.log(currentValues)
  tiles.forEach(tile => {
    if (tile.innerText === '') {
      tile.id = 'empty';
    } else {
      tile.id = '';
    }
  }); 
  emptyTile = document.querySelector('#empty');
  console.log(tiles)
} 
function shuffle() {
  for (let i = tiles.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i].innerText, tiles[j].innerText] = [tiles[j].innerText, tiles[i].innerText];
  }
  updateTileArray(tiles)
}

function swapTiles(tile1, tile2) {
  if (!tile1 || !tile2) {
    console.error('Cannot swap null tiles.');
    return;
  }
  const tile1Index = parseInt(tile1.getAttribute('data-index'));
  const tile2Index = parseInt(tile2.getAttribute('data-index'));

  let tiletemp = tile1.innerText;
  tile1.innerText = tile2.innerText;
  tile2.innerText = tiletemp;

  tile1.setAttribute('data-index', tile2Index);
  tile2.setAttribute('data-index', tile1Index);
  updateTileArray(tiles)
}

tiles.forEach(tile => {
  tile.addEventListener('click', () => {

    const tileIndex = currentValues.findIndex(value => value === tile.innerHTML);
    const emptyTileIndex = currentValues.findIndex(value => value === '');
    tiles.forEach(tile => {
      if (tile.innerText === '') {
        tile.id = 'empty';
      }
    });  
    emptyTile = document.querySelector('#empty');
    if (isAdjacent(tileIndex, emptyTileIndex)) {
      swapTiles(tile, emptyTile);
      count ++
    span.innerHTML = count
      checkWin();
    }
  });
});

let adjacence={0:[1,3],1:[0,2,4],2:[1,5],3:[0,4,6],4:[1,3,5,7],5:[2,4,8],6:[3,7],7:[4,6,8],8:[5,7]}
function isAdjacent(tileIndex, emptyTileIndex) {
  const adjacentTiles = adjacence[emptyTileIndex];
  console.log(adjacentTiles)
  console.log(tileIndex)
  if (adjacentTiles.includes(tileIndex)) {
    return true;
  }
  return false;
}
function checkWin() {
    if (JSON.stringify(currentValues) === JSON.stringify(['1', '2', '3', '4', '5', '6', '7', '8', ''])) {
      congratulationsMsg.style.display = 'flex';    }
  }
  