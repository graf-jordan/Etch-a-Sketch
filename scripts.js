const cont = document.querySelector(".squareContainer");
let gridSize;
let gridDimensions;

//placeholder to get size for number of pixel boxes
function getSize() {
    const gridSize = window.prompt("What size grid would you like?");
    return gridSize;
}

//parse grid dimensions
function chooseDimensions() {
    gridDimensions = getSize();
    gridSize = 1000/gridDimensions;
    console.log(gridSize);
    console.log(gridDimensions);
}

//create dimensions of grid
function makeGrid() {
    for (let i = 0; i < (gridDimensions*gridDimensions); i++) {
        let etchElement = document.createElement("div");
        etchElement.className = "etchElement";
        etchElement.style.width = `${gridSize}px`;
        etchElement.style.height = `${gridSize}px`;
    
        etchElement.addEventListener("mouseover", () => {
            etchElement.style.backgroundColor = "gray";
        });
        cont.appendChild(etchElement);
    }
}

//create grid
chooseDimensions();
makeGrid();



