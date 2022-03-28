// global variables
let canvas = null;
let ctx = null;

let WIDTH = 1024;
let HEIGHT = 768;
let BGCOLOR = "blue";
let TILESIZE = 32;
// array for all of our sprites to go into
let allSprites = [];
// array gameplan that we turn into 2d array
let gamePlan = `
......................
......................
......................
......................
...........#####......
......................
......................
####..################
####..################`;

// this is like a MOLD
class Square {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 3;
        allSprites.push(this);
    }
    create(x,y,w,h) {
        return new Square(x, y, w, h)
    }
    // update method. everything in here is constantly run
    update() {
        this.x += this.speed*Math.random()*5;
        this.y += this.speed*Math.random()*5;
        if (this.x > WIDTH || this.x < 0 || this.y < 0 || this.y > HEIGHT){
               this.speed*=-1; 
            }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// duplpicate of square that is shaped like a circle
class Circle {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 2;
    }
    update() {
        this.x += this.speed*Math.random()*5;
        this.y += this.speed*Math.random()*5;
        if (this.x > WIDTH || this.x < 0 || this.y < 0 || this.y > HEIGHT){
               this.speed*=-1; 
            }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI);
        ctx.stroke();;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


// turns gameplan array into 2d array
function makeGrid(plan, width) {
    let newGrid = [];
    let newRow = [];

    for (i of plan){
        if (i != "\n"){
            newRow.push(i);
        }
        if (newRow.length % width == 0 && newRow.length != 0) {
            newGrid.push(newRow);
            newRow = [];
        }
    }

    return newGrid;
}

// takes the 2d array and turns it into real sprites
function readLevel(grid) {
 let startActors = [];
    for (y in grid) {
        for (x in grid[y]) {

            let ch = grid[y][x];

            if (ch != "\n") {
                let type = levelChars[ch];
                if (typeof type == "string") {
                    startActors.push(type);
                } else {
                    let t = new type;
                    // creates squares according to TILESIZE
                    startActors.push(t.create(x*TILESIZE, y*TILESIZE, TILESIZE, TILESIZE))
                }
                console.log(startActors);
            }
        }

    }

}

// defines what the characters in the gameplan array are
const levelChars = {
    ".": "empty",
    "#": Square,
};

// logs the arrays into the console so we can check them
console.log(makeGrid(gamePlan, 22));
console.log(readLevel(makeGrid(gamePlan, 22)));

// initialization function
// creates a div; sets attributes; appends body; creates canvas; puts canvas inside div
function init() {
    let gameDiv = document.createElement("div");
    gameDiv.setAttribute("style", "border: 1px solid;"
    + "width:" + WIDTH + "px; "
    + "height:" + HEIGHT + "px; "
    + "background-color: " + BGCOLOR);
    document.body.appendChild(gameDiv);

    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    
    try {
        gameDiv.appendChild(canvas);
        console.log("game initialized");
    } catch (e){
        alert(e.message);
    }
    gameLoop();
}


// create new instances of classes under listed names
let spongeBob = new Square(10, 10, 30, 30, 'rgb(255, 255, 0)');
let patrick = new Square(10, 30, 65, 65, 'rgb(255, 150, 150)');
let squidward = new Square(70, 90, 20, 20, 'rgb(0, 200, 200)');
let sandy = new Circle(70, 200, 25, 40, 'rgb(150, 75, 0)');

// draws the sprites
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (i of allSprites){
        i.draw();
    }
}

// update function that loops in the gameloop. used for 
function update() {
    spongeBob.update();
    patrick.update();
    squidward.update();
    sandy.update();
}

// gameloop. this is constantly running
function gameLoop(){
    console.log('the game loop is alive!!!');
    update();
    draw();
    // this is what allows us to constantly refresh the game
    window.requestAnimationFrame(gameLoop);
}
