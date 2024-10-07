const operators = ["+", "-", "x", "/", "="];
let calculatorScreen = "";
let operandA = 0;
let operandB = 0;
let operator = "";
let result = 0;

function updateScreen(){
    let screen = document.querySelector('.calculator-screen');
    screen.textContent = calculatorScreen;
}

function clearAll(){
    calculatorScreen = "";
    operandA = 0;
    operandB = 0;
    operator = "";
    result = 0;
    updateScreen();
}

function redo(){
    calculatorScreen = calculatorScreen.substring(0, calculatorScreen.length - 1);
    
    if(operator === ""){
        calculatorScreen.includes(".") ? operandA= parseFloat(calculatorScreen) : operandA = parseInt(calculatorScreen);
    }else {
        calculatorScreen.includes(".") ? operandB= parseFloat(calculatorScreen) : operandB = parseInt(calculatorScreen);
    }

    updateScreen();
}

function setButtons() {
    const gridDiv = document.querySelector('.calculator-grid');
    const operatorsDiv = document.querySelector('.calculator-operators');
    
    for(i = 9; i>=0; i--){
        gridDiv.appendChild(createGridButton(i));
    }
    gridDiv.appendChild(createGridButton('.'));
    operators.map((element) => {
        operatorsDiv.appendChild(createOperatorButton(element));
    });

    const clearButton = document.createElement("button");
    clearButton.textContent = "AC";
    clearButton.addEventListener("click", clearAll);
    const redoButton = document.createElement("button");
    redoButton.textContent = "DC";
    redoButton.addEventListener("click", redo);

    operatorsDiv.appendChild(redoButton);
    operatorsDiv.appendChild(clearButton);
}

function createGridButton(text){
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", (evt) => {
        let hasDot = calculatorScreen.includes('.');
        let buttonDot = evt.target.textContent === '.';

        if((buttonDot && !hasDot) || !buttonDot){
            calculatorScreen = calculatorScreen + button.textContent;
            if(operator === ""){
                calculatorScreen.includes(".") ? operandA= parseFloat(calculatorScreen) : operandA = parseInt(calculatorScreen);
            }else {
                calculatorScreen.includes(".") ? operandB= parseFloat(calculatorScreen) : operandB = parseInt(calculatorScreen);
            }
            updateScreen();
        }
    });
    return button;
}

function createOperatorButton(text){
    const button = document.createElement("button");
    button.textContent = text;
    if(text === "="){
        button.addEventListener("click", () => {
            calculate();
            calculatorScreen = "" + result;
            operandA = result;
            operator = "";

            updateScreen();

            let resultScreen = document.querySelector('.calculator-result');
            resultScreen.textContent = "";
            calculatorScreen = "";
        })
    }else{
        button.addEventListener("click", () => {
            calculatorScreen = "";
            operator = button.textContent;
            let resultScreen = document.querySelector('.calculator-result');
            resultScreen.textContent = operandA + " " + operator;
            
            updateScreen();
        });
    }
    return button;
}

function calculate(){
    switch(operator){
        case "+":
            result = operandA + operandB;
            break;
        case "-":
            result = operandA - operandB;
            break;
        case "x":
            result = operandA * operandB;
            break;
        case "/":
            result = operandA / operandB;
            break;
    }
}

setButtons();