const cont = document.querySelector(".squareContainer");
console.log("Hello");

for (let i = 0; i < 256; i++) {
    let etchElement = document.createElement("div");
    etchElement.className = "etchElement";
    etchElement.style.width = "62.5px";
    etchElement.style.height = "62.5px";

    etchElement.addEventListener("mouseover", () => {
        etchElement.style.backgroundColor = "gray";
    });

    cont.appendChild(etchElement);
}


  