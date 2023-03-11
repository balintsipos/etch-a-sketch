const drawingBoard = document.querySelector(".drawing-board");
let cellCount = 64*64; // default value
let isDrawing = false;

drawingBoard.addEventListener('mousedown', function(event) {
    event.preventDefault();
    isDrawing = true;
})

drawingBoard.addEventListener('mouseup', function(event) {
    isDrawing = false;
})

function fillGrid(count) {
    for (let i = 0; i < cellCount; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (event) => {
            if (isDrawing === true) {
                event.target.style.backgroundColor = 'black';
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

fillGrid();
addClearFunctionality();