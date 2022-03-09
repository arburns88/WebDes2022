/*
    1. player choses rock paper or scissors
    2. computer choses
    3. computer checks for winner
*/

// not very efficient but it works


let playerRock = false;
let playerPaper = false;
let playerScissors = false;
let computerRock = false;
let computerPaper = false;
let computerScissors = false;


// function init(){
//     if (playerRock || playerPaper || playerScissors == true){
//         computerChoice();
//         calculateWinner();
//         console.log("a player choice was made");
//     }
// }

function rock(){
    playerRock = true;
    console.log("player chose rock");
    computerChoice();
    if (computerRock == true){
        document.getElementById("winner").innerHTML = "TIE GAME";
    }
    else if (computerPaper == true){
        document.getElementById("winner").innerHTML = "COMPUTER WINS";
    }
    else if (computerScissors == true){
        document.getElementById("winner").innerHTML = "PLAYER WINS";
    }
}

function paper(){
    playerPaper = true;
    console.log("player chose paper");
    computerChoice();
    if (computerRock == true){
        document.getElementById("winner").innerHTML = "PLAYER WINS";
    }
    else if (computerPaper == true){
        document.getElementById("winner").innerHTML = "TIE GAME";
    }
    else if (computerScissors == true){
        document.getElementById("winner").innerHTML = "COMPUTER WINS";
    }
}

function scissors(){
    playerScissors = true;
    console.log("player chose scissors");
    computerChoice();
    if (computerRock == true){
        document.getElementById("winner").innerHTML = "COMPUTER WINS";
    }
    else if (computerPaper == true){
        document.getElementById("winner").innerHTML = "PLAYER WINS";
    }
    else if (computerScissors == true){
        document.getElementById("winner").innerHTML = "TIE GAME";
    }
}

function computerChoice(){
    let cpu = Math.floor(Math.random()*3);
    console.log("rng:" + cpu);
    if (cpu == 0){
        computerRock = true;
        console.log("computer chose rock");
        document.getElementById("computerChoice").innerHTML = "rock";
    }
    else if(cpu == 1){
        computerPaper = true;
        console.log("computer chose paper");
        document.getElementById("computerChoice").innerHTML = "paper";
    }
    else if(cpu == 2){
        computerScissors = true;
        console.log("computer chose scissors");
        document.getElementById("computerChoice").innerHTML = "scissors";
    }
}