const mainContainer = document.querySelector('.container');

let mainContainerStyle = `
min-width: 640px;
min-height: 640px;
max-width: 640px;
max-height: 640px;
display: flex;
flex-wrap: wrap;
aspect-raio: 1/1;
`;

// justify-content: center;
// align-items: stretch;
// grid-template-row: 1fr;
// grid-template-column: 1fr;

let input = parseInt(prompt('How many squares you want in a div?'))
console.log('input: ', input);
let totalSquares = (input * input);
console.log('totals squares: ', totalSquares);
let gridSquaresPercent = 100/(input);
console.log('grid squares percent: ', gridSquaresPercent)
let gridSquaresStyle = `
background-color: skyblue;
aspect-ratio: 1/1;
color: black;
flex: 1 1 ${gridSquaresPercent}%;
`
// border: 1px solid black;
// width: ${gridSquaresPercent}%;
// height: ${gridSquaresPercent}%;
// min-width: 10px;
// min-heigth: 10px;
// width: 33%; // flex: 1 1 33%; is same as this;
// height: 33%; // flex: 1 1 33%; is same as this;
// flex-grow: 1;

mainContainer.setAttribute('style', mainContainerStyle);

for (let i = 0; i < totalSquares; i++) {
    const gridDiv = document.createElement('div');
    // gridDiv.textContent = i;
    gridDiv.id = i;
    gridDiv.setAttribute('style', gridSquaresStyle);
    mainContainer.append(gridDiv);
}

console.log(mainContainer);
