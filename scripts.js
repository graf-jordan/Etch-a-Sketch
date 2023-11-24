const cont = document.querySelector(".squareContainer");

function getSize() {
    const gridSize = window.prompt("What size grid would you like?");
    return gridSize;
}

const gridDimensions = getSize();
const gridSize = 1000/gridDimensions;
console.log(gridSize);
console.log(gridDimensions);

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