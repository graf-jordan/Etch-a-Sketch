const cont = document.querySelector(".squareContainer");
console.log("Hello");

for (let i = 0; i < 256; i++) {
    let etchElement = document.createElement("div");
    etchElement.className = "etchSquare";
    etchElement.style.width = "2px";
    etchElement.style.height = "2px";
    etchElement.style.backgroundColor = "black";
    etchElement.addEventListener("mouseover", () => {
        etchElement.style.backgroundColor = "red";
    });

    cont.appendChild(etchElement);
}


  