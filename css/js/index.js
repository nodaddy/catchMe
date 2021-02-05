 
// setInterval(()=>{
//code
//}, t);
// left and top css properties with absolute positiona

//random number generator || Math.random();   //returns a random number between 0 to 1
//call the function at specific intervals e.g 1000ms or 1 sec // setInterval ..takes 2 things as argumnets 
//1. the function we want to call again and again
//2 . time interval in milliseconds after which we have to call that function

//--------------------------------TODAY --------------------------------
//score and colorChange
//timer
//increase level => image disappears fast 
//a button
//a function that increases the level -> increment the variable which has been passed in the setInterval function
//for changing the position of the image


//Assignment.........................
//audio
//instead of this box, use a picture of a bird
//instead of the mouse pointer, use a custom 'target' symbol
//when you click/poke on the bird it should make a sound 'auchh'
//change the background to be a garder, landscape


//to track the SCORE 
let score = 0; 

//to track the TIME REMAINING
let timeRemaining = 10;

//to update the LEVEL 
let timeInterval = 1500;

//to show the level on the screen when the page loads
document.getElementById('level').innerHTML = "Level : " + timeInterval;

//to move the div to random co-ordinates on the screen
function moveDiv(){
    let x = Math.random()*1000;
    let y = Math.random()*500;
    document.getElementById('myDiv').style.left = x + "px";
    document.getElementById('myDiv').style.top = y + "px";
}

//to INCREASE THE LEVEL of the game by DECREASING the timeInterval after which the 'moveDiv' function is called
function levelUp(){ 
    timeInterval = timeInterval - 250; 
    if(timeInterval < 0){
        //grab the audio element and put its play* atrribute to off* ..stop the audio
        timeInterval = 100;
        document.getElementById('level').innerHTML = "level :" + timeInterval;
    } 
    document.getElementById('level').innerHTML = "level :" + timeInterval;
}

//to DECREASE THE LEVEL of the game by INCREASING the timeInterval after which the 'moveDiv' function is called
function levelDown(){ 
    timeInterval = timeInterval + 250; 
    document.getElementById('level').innerHTML = "level :" + timeInterval;
}

//to increase the score
function increaseScore(){
    score = score + 1;
    document.getElementById('myDiv').innerHTML = "score : " + score;
}

//to change the color of the div when player clicks on it
function divColorChange(){
    let myElement = document.getElementById('myDiv');
    myElement.style.backgroundColor == "green" ? 
    myElement.style.backgroundColor = "blue" :
    myElement.style.backgroundColor = "green";
}

//function to be called when the user clicks on the div
function onDivClick(){
   increaseScore();
   divColorChange();
}

//function to start the game, it shall be called when the user clicks 'play' button
function startMoving(){
document.getElementById('myButton').style.display = "none";
document.getElementById('level-up-button').style.display = "none";
document.getElementById('level-down-button').style.display = "none";

setInterval(moveDiv, timeInterval);

setInterval(()=>{
    timeRemaining = timeRemaining - 1;
    if(timeRemaining == -1){
        alert("GAME OVER");
        window.location.reload();
    }
    document.getElementById('timer').innerHTML = "Time Left : " + timeRemaining;
}, 1000)
}




//thank you : )