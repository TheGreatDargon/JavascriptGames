function SetDisplay(number) {
    let display = document.getElementById("display");
    display.innerHTML = number;
}

function GetDisplay() {
    let display = document.getElementById("display");
    return display;
}

function Calculate(first, second, op) {
    first = Number(first);
    second = Number(second);
    try{
        switch(op){
            case "+":
                return first+second;
            case "-":
                return first-second;
            case "/":
                return first/second;
            case "*":
                return first*second;
            case "**":
                return first**second;
            case "sqrt":
                Math.SQRT2(first);
        }
    }
    catch (error) {
        if (error == "Division by zero error!"){
            return 0; // return 0 for now just to see if it was caught correctly
        }
    }
}

let buttons = document.querySelectorAll("button");
let currentValue = null;
let previousValue = null;
let op = null;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let input = e.target.childNodes[0].data;

        if(input == "C") {
            SetDisplay("0");
        }
        if (input == "AC") {
            let currentValue = null;
            let previousValue = null;
            let op = null;
            SetDisplay("0");
        }

        if (currentValue != null && previousValue != null && op != null && input == "=") {
            currentValue = Calculate(currentValue, previousValue, op);
            SetDisplay(currentValue);
            previousValue = null;
            op = null;
        }
        if (op != null && input.match("[1-9]")) {
            previousValue = e.target.childNodes[0].data;
            SetDisplay(currentValue);
        }
        else if (currentValue != null && input.match("[+\-\/*^√]")) {
            op = input;
            SetDisplay(op);
        }
        else if (input.match("[1-9]")) {
            currentValue = e.target.childNodes[0].data;
            SetDisplay(currentValue);
        }

    });
});


window.onload = () => {
    SetDisplay(0)
};