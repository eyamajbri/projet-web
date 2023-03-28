let faster=document.getElementById("faster")
let slower=document.getElementById("slower")
let speed_alert=document.querySelector("#speed-alert")
const resultconfig = document.querySelector('#resultconfig');
const playAgainBtn=document.querySelector('#play-again')
const result=document.querySelector("#result")
let h3=document.querySelector("h3")
let blockSize ;
let total_row ; //total row number
let total_col ; //total column number
let board;
let context;
let speed;
let snakeX ;
let snakeY ;
intervalId=null ;
// Set the total number of rows and columns
let speedX   //speed of snake in x coordinate.
let speedY  //speed of snake in Y coordinate.
 
let snakeBody ;
 
let foodX;
let foodY;
let gameOver ;
let span = document.getElementById("counter")
let count 
window.onload =start()
playAgainBtn.addEventListener('click', () => {
    console.log("dkhalt")
    start()
})

faster.addEventListener('click', () => {
    console.log('nzelt')
    console.log("speed loula mtaaa faster",speed)
    speed-=1000
    console.log(speed)
    if (speed<1000) {
        h3.innerHTML="this is the fastest speed"
        speed=1000
        console.log(speed)
    }else {
        h3.innerHTML=""
        clearInterval(intervalId)
        intervalId=setInterval(update,speed/10)
    }
})
slower.addEventListener('click', () => {
    console.log('nzelt')
    console.log("speed loula mtaaa slower",speed)

    speed+=1000
    console.log(speed)
    if (speed>5000) {
        h3.innerHTML="this is the slowest speed";
        speed=5000;
        console.log(speed);
    }else {
        h3.innerHTML=""
        clearInterval(intervalId);
        intervalId=setInterval(update,speed/10);
    }
})
function start() {
    h3.innerHTML="Press any arrow to start"
    count=0
    span.innerHTML = count
     blockSize = 25;
     total_row = 17; //total row number
     total_col = 17; //total column number
     snakeX = blockSize * 5;
     snakeY = blockSize * 5;
     speed=3000
      // Set the total number of rows and columns
     speedX = 0;  //speed of snake in x coordinate.
     speedY = 0;  //speed of snake in Y coordinate.
    snakeBody = [];
    gameOver = false;
    resultconfig.style.display = 'none';
        // Set board height and width
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");
 
    placeFood();
    document.addEventListener("keyup", changeDirection);
      //for movements
    // Set snake speed
    clearInterval(intervalId)
    intervalId=setInterval(update, speed / 10);
    console.log(speed)

}
 
function update() {
    if (gameOver) {
        return;
    }
    setBoard()
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        count+=1
    span.innerHTML = count
        placeFood();
    } 
    SnakeBodyGrowth()
    checkIfSnakeIsOutOfBounds()
    checkIfSaneAteItsOwnBody()
}
function setBoard(){
    // Background of a Game
    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);
 
    // Set food color and position
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}
function SnakeBodyGrowth(){
    
    for (let i = snakeBody.length - 1; i > 0; i--) {
        // it will store previous part of snake to the current part
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
 
    context.fillStyle = "white";
    snakeX += speedX * blockSize; //updating Snake position in X coordinate.
    snakeY += speedY * blockSize;  //updating Snake position in Y coordinate.
    console.log(snakeX,snakeY)
    console.log("total col",total_col * blockSize)
    console.log("total row",total_row * blockSize)
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
}
function checkIfSnakeIsOutOfBounds(){
    if (snakeX < 0
        || snakeX > (total_col-1) * blockSize
        || snakeY < 0
        || snakeY > (total_row-1) * blockSize) {
         
        // Out of bound condition
        gameOver = true;
        resultconfig.style.display = 'flex';   
        result.innerHTML="Game Over" 
    }
}
function checkIfSaneAteItsOwnBody(){
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
             
            // Snake eats own body
            gameOver = true;
            resultconfig.style.display = 'flex';    
            result.innerHTML="Game Over" 

        }
    }
}
// Movement of the Snake - We are using addEventListener
function changeDirection(e) {
    h3.innerHTML=""
    if (e.code == "ArrowUp" && speedY != 1) {
        // If up arrow key pressed with this condition...
        // snake will not move in the opposite direction
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        //If down arrow key pressed
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        //If left arrow key pressed
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        //If Right arrow key pressed
        speedX = 1;
        speedY = 0;
    }
}
 
// Randomly place food
function placeFood() {
 
    // in x coordinates.
    foodX = Math.floor(Math.random() * total_col) * blockSize;
     
    //in y coordinates.
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}