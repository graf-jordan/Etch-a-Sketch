const cont = document.querySelector(".squareContainer");
let gridSize;
let gridDimensions;

//placeholder to get size for number of pixel boxes
function getSize(value) {
    const gridSize = value;
    return gridSize;
}

//parse grid dimensions
function chooseDimensions(val) {
    gridDimensions = getSize(val);
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
        etchElement.style.backgroundColor = "white";
    
        etchElement.addEventListener("mouseover", () => {
            etchElement.style.backgroundColor = "gray";
        });
        cont.appendChild(etchElement);
    }
}

let slider = document.querySelector(".slider");
console.log("value " + `${slider.value}`);
let testValue = slider.value;
console.log(testValue);
slider.innerHTML = slider.value;

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    chooseDimensions(testValue);
    makeGrid();
});
//create grid
chooseDimensions(testValue);
makeGrid();







