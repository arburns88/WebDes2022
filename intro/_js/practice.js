let myName = "";

function init() {
    changeHeading();
    giveName();
    displayName();
}


function changeHeading(){
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2');
    myHeading.textContent = 'Hello world!';
}

function getInputValue() {
    return document.getElementById("inputId").value;
}

function displayName(){
    document.getElementById("display2").innerHTML = content;
}