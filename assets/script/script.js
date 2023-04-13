
document.querySelectorAll('.animalimg').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
})

//functions itens
function dragStart(e) {
    e.currentTarget.classList.add('dragging');

}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

//functions box

function dragOver(e) {
    
        e.preventDefault();
        e.currentTarget.classList.add('hover');
 
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    

    let dragItem = document.querySelector('.animalimg.dragging');
    let correctBox = e.currentTarget.getAttribute('data-key');
    let correctAnimal = dragItem.getAttribute('data-name');

    if(correctAnimal === correctBox ){
        e.currentTarget.innerHTML = '';
        e.currentTarget.appendChild(dragItem);
    }    

    gameUp1()
}

//Game level

let sliders = document.querySelectorAll('.game').length;

let sliderControl = 0;

document.querySelector('.gameareawidth').style.width = `calc(100vw * ${sliders})`;

function uptadeMargin() {
    let sliderWidth = document.querySelector('.game').clientWidth;
    let newMargin = sliderControl * sliderWidth;
    document.querySelector('.gameareawidth').style.marginLeft = `-${newMargin}px`;
}

function gameUp1(){
    
    let box = document.querySelectorAll('.lv1 .box span');
    let box2 = document.querySelectorAll('.lv2 .box span');
    let box3 = document.querySelectorAll('.lv3 .box span');


    if(box.length === 0){
        sliderControl++;
        uptadeMargin();
        zerar1() 
    }
    if(box2.length === 0){
        sliderControl++;
        uptadeMargin();
        zerar2() 
    } 
    if(box3.length === 0){
        sliderControl++;
        uptadeMargin();
        zerar3() 
    }

}   

function zerar1() {
    let box = document.querySelector('.lv1 .box');
    box.innerHTML = '<span> </span>'
       
}

function zerar2() {
    let box = document.querySelector('.lv2 .box');
    box.innerHTML = '<span> </span>'
       
}

function zerar3() {
    let box = document.querySelector('.lv3 .box');
    box.innerHTML = '<span> </span>'
       
}
    


//Button

document.querySelector('button').addEventListener('click', () => {
    document.location.reload(true);
})