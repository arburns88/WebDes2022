/*
Rock, Paper, Scissors

To do:
    - show images of choices
    - add score
    - make game more interesting
    - w/l ratio
*/

// global variables
let cpu;
let user;
let choices = ["rock", "paper", "scissors"];
let height = 200;
let width = 200;

// gets the user input from the html oncick function for the buttons
function userChoice(choice) {
    user = choice;
    console.log("user chose " + user);
    if (choice = "rock"){
        drawImg("_images/rock.png", width, height, "player");
        console.log("rock was drawn");
    }
    if (choice = "paper"){
        drawImg("_images/paper.png", width, height, "player");
    }
    if (choice = "rock"){
        drawImg("_images/scissors.jfif", width, height, "player");
    }
    calculateWinner();
}

// random number generator that turns the randomly generated number into a spot in the array
// numbers generated change dynamically with size of array
function cpuChoice() {
    let randNum = Math.floor(Math.random() * 3);
    cpu = choices[randNum];
    console.log("cpu chose " + cpu);
    document.getElementById("cpuChose").innerHTML = cpu;
}

// decides the winner based on each of the choices made
function calculateWinner() {
    // i ran this in here because it allows the cpu choice to change every time a btton is pressed rather than when the page is refreshed
    cpuChoice();
    // draws the cpu's choice
    // removes the old images once a new choice is made
    removeChild("player");
    removeChild("computer");
    removeChild("outcome");
    console.log ("cpu chose " + cpu + " and user chose " + user);
    // set of logic that decides who wins or loses
    if ((user == "rock" && cpu == "scissors") || (user == "paper" && cpu == "rock") || (user == "scissors" && cpu == "paper")) {
        console.log("user wins the game...");
        document.getElementById("winner").innerHTML = "USER WINS";
        drawImg("_images/vicRoy.gif", width, height, "outcome");
        drawImg("_images/defaultDance.gif", 300, height, "outcome");
    } 
    else if ((cpu == "rock" && user == "scissors") || (cpu == "paper" && user == "rock") || (cpu == "scissors" && user == "paper")) {
        console.log("user loses the game...");
        document.getElementById("winner").innerHTML = "CPU WINS";
        drawImg("_images/loss.gif", width, height, "outcome");
    } 
    else if (cpu == user) {
        console.log("tie game...");
        document.getElementById("outcome").innerHTML = "TIE GAME";
    } 
    else {
        console.log("something went wrong");
    }
}

// from w3schools.com
// creates an image based on the parameters
function drawImg(pic, width, height, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    // x.setAttribute("alt", alt);
    // document.body.appendChild(x);
    document.getElementById(id).appendChild(x);
}

// from javascipttutorial.net
// while loop that deletes images while they they exist
function removeChild(id){
    let identity = document.getElementById(id);
    while (identity.firstChild){
        identity.removeChild(identity.firstChild);
    }
}