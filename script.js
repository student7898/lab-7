let button = document.getElementById("button");

function pressButton() {
    button.innerHTML = "Button Pressed! Try Double Clicking!";
}

function doubleClicked() {
    button.innerHTML = "Button Double Clicked!";
}

function mouseEnter() {
    button.innerHTML = "Press Me!";
}

function mouseLeave() {
    button.innerHTML = "Hover Over Me!";
}