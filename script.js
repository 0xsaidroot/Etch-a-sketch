function createGrid(boxes) {
    for (let i = 0; i < boxes; i++) {
        for (let j = 0; j < boxes; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.flexBasis = `calc(100% / ${boxes})`;
            box.dataset.count = '1';
            container.appendChild(box);
        }
    }
}

const container = document.querySelector('#container');
const newGrid = document.querySelector('#btn');
const clearGrid = document.querySelector('#clear');

createGrid(16);

newGrid.addEventListener('click', () => {
    let Grid = parseInt(prompt('Number of squares per side(Not more than 100 ) ', '16'));

    if (Grid === null || Grid === NaN || Grid > 100 || Grid < 1) createGrid(Grid);

    container.innerHTML = '';
    createGrid(Grid);

})
clearGrid.addEventListener('click', () => {
    const childrenBox = container.children;

    if (!childrenBox) return;

    for (const child of childrenBox) {
        child.style.backgroundColor = 'white';
    }
})

container.addEventListener('mouseover', function (event) {

    let target = event.target;

    let count = parseInt(target.dataset.count) || 1;

    let L = (count > 10) ? 1 : count * 0.1;

    if (target.classList.contains('box')) {
        target.style.backgroundColor = `rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)})`
        target.style.opacity = `${L}`;
        count++;
        target.dataset.count = count;
    }
    else return;
})

