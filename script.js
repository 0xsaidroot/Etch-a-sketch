function createGrid(boxes) {
    for (let i = 0; i < boxes; i++) {
        for (let j = 0; j < boxes; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.flexBasis = `calc(100% / ${boxes})`;
            box.dataset.count = '1';
            box.dataset.hover = '0';
            container.appendChild(box);
        }
    }
}
function clear(container) {
    const childrenBox = container.children;
    if (!childrenBox) return;
    for (const child of childrenBox) {
        child.style.backgroundColor = 'white';
        child.style.border = '1px solid black';
        child.style.opacity = '1';
        child.dataset.count = '1';
        child.dataset.hover = '0';
    }
}

const container = document.querySelector('#container');
const buttonBox = document.querySelector('#buttonBox');
const slider = document.querySelector('#slider');
const text = document.querySelector('#text');
let gridSize = slider.value;
let blackColor = true;

text.textContent = `Grid Size : ${gridSize}x${gridSize}`;
createGrid(gridSize);

slider.addEventListener('input', (event) => {
    gridSize = event.target.value;
    text.textContent = `Grid Size : ${gridSize}x${gridSize}`;
    container.innerHTML = '';
    createGrid(gridSize);
})

buttonBox.addEventListener('click', (event) => {
    let target = event.target;

    // if (target.id === 'btn') {
    //     let Grid = parseInt(prompt('Number of squares per side(Not more than 100 ) ', '16'));
    //     if (isNaN(Grid) || Grid > 100 || Grid < 1) Grid = 16;
    //     container.innerHTML = '';
    //     createGrid(Grid);
    // }
    
     if (target.id === 'clear') {
        clear(container);
    } else if (target.id === 'black') {
        clear(container);
        blackColor = true;

    } else if (target.id === 'rainBow') {
        clear(container);
        blackColor = false;

    }
    else return;

})
container.addEventListener('mouseover', function (event) {

    let target = event.target;
    let count = parseInt(target.dataset.count) || 1;
    let hover = parseInt(target.dataset.hover) || 0;
    let L = (count > 10) ? 1 : count * 0.1;

    if (target.classList.contains('box')) {
        if (hover === 0) {
            target.style.backgroundColor = (blackColor) ? 'black' : `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
            hover++;
        }
        target.style.opacity = `${L}`;
        count++;
        target.dataset.hover = hover;
        target.dataset.count = count;
    } else return;
})

