let button = document.getElementById("button");
let body = document.body;

function pressButton() {
    button.innerHTML = "Button Pressed! Try Double Clicking!";
    body.style.backgroundColor = "lightblue";
}

function doubleClicked() {
    button.innerHTML = "Button Double Clicked!";
    body.style.backgroundColor = "red";
}

function mouseEnter() {
    button.innerHTML = "Press Me!";
    body.style.backgroundColor = "pink";
}

function mouseLeave() {
    button.innerHTML = "Hover Over Me!";
    body.style.backgroundColor = "white";
}