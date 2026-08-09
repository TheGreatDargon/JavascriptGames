function SetDisplay(number) {
    display = document.getElementById("display");
    display.innerHTML = number;
}

function GetDisplay() {
    display = document.getElementById("display");
    return display;
}

buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        SetDisplay(e.target.childNodes[0].data);
    });
});


window.onload = () => {SetDisplay(0)};