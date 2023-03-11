const drawingBoard = document.querySelector(".drawing-board");
const slider = document.querySelector('#slider')
const sliderInfo = document.querySelector('.sliderInfo')
let cellCount = 32; //default value
let isDrawing = false;

drawingBoard.addEventListener('mousedown', function(event) {
    event.preventDefault();
    isDrawing = true;
})

drawingBoard.addEventListener('mouseup', function(event) {
    isDrawing = false;
})

function fillGrid() {
    while(drawingBoard.firstChild){
        drawingBoard.removeChild(drawingBoard.lasttChild);
    }
    drawingBoard.setAttribute('style', `grid-template-columns: repeat(${cellCount}, 2fr); grid-template-rows: repeat(${cellCount}, 2fr);`);
    for (let i = 0; i < cellCount*cellCount; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (event) => {
            if (isDrawing === true) {
                event.target.style.backgroundColor = document.getElementById("colorBtn").value;
            }
        });
        drawingBoard.appendChild(div);
    }
}

function clearGrid() {
    const divs = document.querySelectorAll('.cell');
    divs.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}

function addClearFunctionality() {
    const clearBtn = document.querySelector('.clearBtn');
    clearBtn.addEventListener('click', clearGrid);
}

function addSliderFunctionality() {
    slider.addEventListener('input', (event) => {
        cellCount = slider.value;
        sliderInfo.innerText = `${cellCount} X ${cellCount}`
        clearGrid();
        fillGrid();
    });
}

function main () {
    fillGrid();
    addClearFunctionality();
    addSliderFunctionality();
}

main();