createGrid()

document.querySelector('#size').addEventListener('input', createGrid);
document.querySelector('#rainbow').addEventListener('click', () => changeColor("rainbow"));
document.querySelector('#color').addEventListener('input', () => changeColor(`${document.querySelector("#color").value}`));
document.querySelector('#reset').addEventListener('click', reset);
document.querySelector('#erase').addEventListener('click', () => changeColor('white'));


function changeColor(color) {
    const divs = document.querySelectorAll("div");

    divs.forEach(div => div.addEventListener("mouseover", function () {
        if (color === "rainbow") {
            this.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        } else {
            this.style.backgroundColor = color;
        }
    }));
}

function reset() {
    const divs = document.querySelectorAll("div");
    divs.forEach(div => div.style.backgroundColor = "white");
}

function getSize() {
    return document.querySelector('#size').value;
}

function createGrid() {
    const size = getSize();
    document.querySelector('section.options span').textContent = `${size}x${size}`;
    let parentContainer = document.querySelector('section.container.sketch');
    document.querySelector('main').removeChild(parentContainer);
    parentContainer = document.createElement('section');
    parentContainer.classList.add('container', 'sketch');

    for (let i = 0; i < (size ** 2); i++) {
        const div = document.createElement('div');
        div.style.width = `${1 / size * 100}%`;
        div.style.height = `${1 / size * 100}%`;
        div.style.backgroundColor = "white";
        div.style.border = `1px solid darkgray`;
        parentContainer.appendChild(div);
    }
    document.querySelector('#color').value = '#000000';
    document.querySelector('main').insertBefore(parentContainer, document.querySelector("section.container.options"));
    changeColor("black");
}