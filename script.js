const operators = ["+", "-", "*", "/"];

function setButtons() {
    const gridDiv = document.querySelector('.calculator-grid');
    const operatorsDiv = document.querySelector('.calculator-operators')
    for(i = 9; i>=0; i--){
        gridDiv.appendChild(createGridButton(i));
    }
    operators.map((element) => {
        operatorsDiv.appendChild(createOperatorButton(element));
    });
}

function createGridButton(text){
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", () => {
        let screen = document.querySelector('.calculator-screen');
        screen.textContent = button.textContent
    });
    return button;
}

function createOperatorButton(text){
    const button = document.createElement("button");
    button.textContent = text;
    return button;
}

setButtons();