function createGrid(boxes){
for(let i = 0; i< boxes;i++){
    for(let j= 0;j < boxes;j++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.flexBasis = `calc(100% / ${boxes})`;
        container.appendChild(box);
    }
}
}

const container = document.querySelector('#container');
const newGrid = document.querySelector('#btn');

createGrid(16);

newGrid.addEventListener('click',()=>{
 let Grid =parseInt(prompt('Number of squares per side(Not more than 100 ) ','16'));

 if(Grid === null || Grid > 100 || Grid < 1) return;

 container.innerHTML='';
 createGrid(Grid);

})

container.addEventListener('mouseover',function(event){

    let target = event.target;;

    if(target.classList.contains('box')) target.classList.add('hover');
    else return;
})

