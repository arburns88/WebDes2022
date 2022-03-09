/*
Rock, Paper, Scissors

To do:
    - make game more interesting
    - w/l ratio
*/

// global variables
let cpu;
let user;
let choices = ["rock", "paper", "scissors"];
let height = 200;
let width = 200;
let score = 0;
let cpuScore = 0;

// gets the user input from the html oncick function for the buttons
// then runs the other functions that make the game work
function userChoice(choice) {
    user = choice;
    console.log("user chose " + user);
    cpuChoice();
    drawChoices();
    calculateWinner();
}

// random number generator that turns the randomly generated number into a spot in the array
// numbers generated change dynamically with size of array
function cpuChoice() {
    let randNum = Math.floor(Math.random() * 3);
    cpu = choices[randNum];
    console.log("cpu chose " + cpu);
    // document.getElementById("cpuChose").innerHTML = cpu;
}

// function that draws the choices of the player and cpu
function drawChoices() {
    // removes any images that previously existed before drawing new ones
    removeChild("player");
    removeChild("cpu");

    // draws the text telling which image is whose choice
    document.getElementById("player").innerHTML = "PLAYER CHOSE: " + user + "<br>";
    document.getElementById("cpu").innerHTML = "COMPUTER CHOSE: " + cpu + " <br>";

    // series of if statements that draws images of cpu and user choices
    if (user == "rock"){
        drawImg("_images/rock.png", width, height, "player");
        console.log("rock was drawn");
    }
    if (user == "paper"){
        drawImg("_images/paper.png", width, height, "player");
        console.log("paper was drawn");
    }
    if (user == "scissors"){
        drawImg("_images/scissors.png", width, height, "player");
        console.log("scissors was drawn");
    }
    
    // draws the cpu's choice
    if (cpu == "rock"){
        drawImg("_images/rock.png", width, height, "cpu");
        console.log("rock was drawn");
    }
    if (cpu == "paper"){
        drawImg("_images/paper.png", width, height, "cpu");
        console.log("paper was drawn");
    }
    if (cpu == "scissors"){
        drawImg("_images/scissors.png", width, height, "cpu");
        console.log("scissors was drawn");
    }
}

// decides the winner based on each of the choices made
function calculateWinner() {
    // removes the old images once a new choice is made
    removeChild("outcome");

    // prints to console the games logic
    console.log ("cpu chose " + cpu + " and user chose " + user);

    // set of if statements that decides who wins
    if ((user == "rock" && cpu == "scissors") || (user == "paper" && cpu == "rock") || (user == "scissors" && cpu == "paper")) {
        console.log("user wins the game...");
        document.getElementById("winner").innerHTML = "PLAYER WINS";
        drawImg("_images/vicRoy.gif", width, height, "outcome");
        drawImg("_images/defaultDance.gif", 300, height, "outcome");
        score += 1;
    } 
    else if ((cpu == "rock" && user == "scissors") || (cpu == "paper" && user == "rock") || (cpu == "scissors" && user == "paper")) {
        console.log("user loses the game...");
        document.getElementById("winner").innerHTML = "CPU WINS";
        drawImg("_images/loss.gif", width, height, "outcome");
        drawImg("_images/hehehaha.gif", width, height, "outcome");
        cpuScore += 1;
    } 
    else if (cpu == user) {
        console.log("tie game...");
        document.getElementById("winner").innerHTML = "TIE GAME";
        drawImg("_images/barb.gif", width, height, "outcome");
    } 
    else {
        console.log("something went wrong");
        drawImg("_images/confusedHog.gif", width, height, "outcome");
    }

    document.getElementById("score").innerHTML = "player: " + score + "<br>" + "computer: " + cpuScore;
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