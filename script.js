const body = document.querySelector('body');
const mainContainer = document.querySelector('.container');
const button = document.createElement('button');
let pass = 10;
const mOver = function () {
    if (pass < 1) {
        pass = 10;
    }
    let b = ((pass * 10));
    let div = this;
    /***
     * Random RGB colors on hover!
    let r = Math.round(Math.random() * 150);
    let g = Math.round(Math.random() * 170);
    let b = Math.round(Math.random() * 190);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    */
    div.style.backgroundColor = `rgb(${b}, ${b}, ${b})`;
    pass--;
}

const action = function () {
    input = parseInt(prompt('How many squares you want in a div?'));
    Remove();
    Start(input);
}

function Start(input) {
    let totalSquares = (input * input);
    let gridSquaresPercent = 100/(input);
    let mainContainerStyle = `
        min-width: 360px;
        min-height: 360px;
        max-width: 360px;
        max-height: 360px;
        display: flex;
        flex-wrap: wrap;
        aspect-raio: 1/1;
    `;    
    let gridSquaresStyle = `
        box-sizing: border-box;
        background-color: white;
        aspect-ratio: 1/1;
        border: 1px solid black;
        color: black;
        flex: 1 1 ${gridSquaresPercent}%;
    `;    
    let buttonStyle = `
        border-radius: 6px;
        padding: 5px 10px;
    `;
    mainContainer.setAttribute('style', mainContainerStyle);
    button.textContent = "Size";
    button.setAttribute('style', buttonStyle);
    button.addEventListener('click', action);
    for (let i = 0; i < totalSquares; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.id = i;
        gridDiv.setAttribute('style', gridSquaresStyle);
        gridDiv.addEventListener('mouseover', mOver);
        mainContainer.append(gridDiv);
    }
}

function Remove() {
    if (document.querySelectorAll('.container>div')){
        document.querySelectorAll('.container>div').forEach(div => {
            div.remove();
        })
    }
}

Start(12);

body.insertBefore(button, mainContainer);
