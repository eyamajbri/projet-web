const resultconfig = document.querySelector('#resultconfig');
const playAgainBtn=document.querySelector('#play-again')
const result=document.querySelector("#result")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const positions =[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19];
let deck
let matchingPairs
let count
let flippedCards
let cards
let cardDeckValue
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload=start()
playAgainBtn.addEventListener('click', () => {
  cards.forEach((card)=>{
    deck[card.getAttribute('data-index')].state = 'hidden-card';
    card.classList.remove('matched-card');
    card.classList.add('hidden-card');    
    card.removeEventListener('click', cardClick);    
  })
  start()
})
function cardClick(cardDeckValue, event) {
  let card = event.target
  cardDeckValue=deck[card.getAttribute('data-index')].value
  if (!card.classList || card.classList.contains('flipped-card') || card.classList.contains('matched-card')) {
    return;
  }
  
  if (flippedCards.length < 2 && !flippedCards.includes(card)) {
    flippedCards.push(card);
    
    card.classList.remove('hidden-card');
    card.classList.add('visible-card');
    console.log(cardDeckValue,"baad ma nenzlou")
    card.style.backgroundImage = `url('./images/${cardDeckValue}.jpg')`;
    console.log(`url('./images/${cardDeckValue}.jpg')`)
    card.style.backgroundSize="cover";
    
    if (flippedCards.length === 2) {
      const cardValue1 = deck[flippedCards[0].getAttribute('data-index')].value;
      const cardValue2 = deck[flippedCards[1].getAttribute('data-index')].value;
      
      if (cardValue1 === cardValue2) {
        matchingPairs[cardValue1].forEach(pos => {
          const cardElem = document.querySelector(`[data-index='${pos}']`);
          cardElem.classList.remove('visible-card');
          cardElem.classList.add('matched-card');
        });
        count += 2;
        flippedCards = [];
      } else {
        setTimeout(() => {
          flippedCards.forEach(card => {
            card.classList.remove('visible-card');
            card.classList.add('hidden-card');
            card.style.backgroundImage = `url('./images/pattern.jpg')`;
            card.style.backgroundSize="cover";
            
          });
          flippedCards = [];
        }, 1000);
      }
    }
  }
  if (count === 20) {
    resultconfig.style.display = 'flex';   
    result.innerHTML="Congratulations! you won!"    
     }
}
function start(){
  resultconfig.style.display = 'none';
  shuffle(numbers)
  deck={}
  positions.forEach(pos => {
    deck[pos] = { value: numbers[pos], state: 'hidden-card' };
  });
  matchingPairs = {};
  for (const [position, card] of Object.entries(deck)) {
    const value = card.value;
    
    if (!matchingPairs[value]) {
      matchingPairs[value] = [];
    }
    
    matchingPairs[value].push(parseInt(position));
  }
  count=0
  flippedCards = [];
  cards=document.querySelectorAll(".hidden-card")
  console.log(cards)
  cards.forEach(card => { //game logic
    card.style.backgroundImage = `url('./images/pattern.jpg')`;
    card.style.backgroundSize="cover";
     cardDeckValue = deck[card.getAttribute('data-index')].value;

    // card.innerHTML=cardDeckValue 
    console.log(cardDeckValue,"kbal ma nenzlou")
    
    card.addEventListener('click', cardClick.bind(card, cardDeckValue))
   });
}
