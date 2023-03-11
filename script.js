const drawingBoard = document.querySelector(".drawing-board");
let cellCount = 64*64;
let isDrawing = false;

drawingBoard.addEventListener('mousedown', function(event) {
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
            event.preventDefault();
            if (isDrawing === true) {
                event.target.style.backgroundColor = 'black';
            }
        })
        drawingBoard.appendChild(div);
    }
}

fillGrid();