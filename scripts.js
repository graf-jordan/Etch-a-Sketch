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
    gridDimensions = val;
    gridSize = 1000/gridDimensions;
    console.log(gridSize);
    console.log(gridDimensions);
}

//create dimensions of grid
function makeGrid() {
    while (cont.hasChildNodes()) {
        cont.removeChild(cont.children[0]);
    }
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

function update() {
    let x = document.querySelector(".slider").value;
    document.querySelector(".slideValue").innerText = x;
}



let sliderValue = document.querySelector(".slideValue");
let slider = document.querySelector(".slider");
slider.addEventListener("mouseover", () => {
});
let testValue = slider.value;

//reset button for new grid
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    chooseDimensions(slider.value);
    makeGrid();
});
//create grid
chooseDimensions(testValue);
makeGrid();







