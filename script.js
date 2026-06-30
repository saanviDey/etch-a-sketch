const container = document.getElementById('container');
const enterButton = document.querySelector('button');
const input = document.querySelector('input');
function createGrid(n) {
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${800/n}px`;
        square.style.height = `${800/n}px`;
        container.appendChild(square);
    }
    return;
}

enterButton.addEventListener('click', (event) => {
    event.preventDefault();
    const sizeValue = Number(input.value);
    if (!Number.isInteger(sizeValue) || isNaN(sizeValue) ||
        (sizeValue <= 0 || sizeValue > 100)) {
        alert("Please enter a valid number between 1 and 100.");
    }
    else {
        container.innerHTML = '';
        createGrid(sizeValue);
    }

});

function randomizeNumber() {
    return Math.floor(Math.random() * 256);
}

container.addEventListener('mouseover', changeColor);
function changeColor(e) {
    if (e.target.classList.contains('square')) {
        const r = randomizeNumber();
        const g = randomizeNumber();
        const b = randomizeNumber();

        e.target.style.background = `rgb(${r}, ${g}, ${b})`;
    }
}