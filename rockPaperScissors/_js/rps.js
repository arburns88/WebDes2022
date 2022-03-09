let userChoice;
let choices = ["rock", "paper", "scissors"];


console.log("this thing works!!!!");
let cpu = Math.floor(Math.random()*choices.length);
console.log("the cpu choice value was " + cpu)

function userRock(){
    console.log("this function is working...")
    userChoice = "rock";
    drawImg("_images/rock.jpg", "500", "900", "rock");
    playRps();
}
function userPaper(){
    userChoice = "paper";
    drawImg("_images/paper.jfif");
    drawPaper();
}
function userScissors(){
    userChoice = "scissors";
    drawImg("_images/scissors.jfif");
}

// what if this function could draw any image...
// function drawImg(pic, width, height, alt){
//     var x = document.createElement("IMG");
//     x.setAttribute("src", pic);
//     x.setAttribute("width", width);
//     x.setAttribute("height", height);
//     x.setAttribute("alt", alt);
//     document.body.appendChild(x);
// }

function computeWinner(){
    if (user == "rock" && cpu == "scissors" ||
        user == "paper" && cpu == "rock" ||
        user == "scissors" && cpu == "paper") {
        console.log("user wins the game...");
    }
    else if (cpu == "rock" && user == "scissors" ||
        cpu == "paper" && user == "rock" ||
        cpu == "scissors" && user == "paper") {
        console.log("user wins the game...");
    }
    else if (cpu == user){
        console.log("tie game...")
    }
}