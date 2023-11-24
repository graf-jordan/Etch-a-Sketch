const cont = document.querySelector(".squareContainer");

for (let i = 0; i < 256; i++) {
    let etchElement = document.createElement("div");
    etchElement.className = "etchElement";
    etchElement.style.width = "6%";
    etchElement.style.height = "6%";

    etchElement.addEventListener("mouseover", () => {
        etchElement.style.backgroundColor = "red";
    });

    cont.appendChild(etchElement);
}


  