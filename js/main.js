const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGrey = document.createElement('button')
const btnSkittles = document.createElement('button')
const btnRGB = document.createElement('button')
const btnResize = document.createElement('button')
const btnEraser = document.createElement('button')
//const btnReset = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

// function to resize the grid
function resizeGrid() {
    btnResize.textContent = 'Change Size';
    btnResize.addEventListener('click', () => {
        let user = prompt(`Put in a number between 1 and 64 to set size, but the grid will default to 16 if the number is too big, too small (0), or no answer is given.`);
        if(user === null || user < 1) {
            reset()
            createDiv(16,16)
            blackColor()
            greyColor()
            skittlesColor()
            rgbColor()
            eraser()
        } else {
            reset()
            createDiv(user, user)
            blackColor()
            greyColor()
            skittlesColor()
            rgbColor()
            eraser()
        }
    })
    buttonsContainer.appendChild(btnResize).classList.add('btn');
}
resizeGrid()

// function create divs
function createDiv(column, row) {
    
    for(let i = 0; i < (column * row); i++) {
        const div = document.createElement('div');
        //div.style.border = '1px solid'
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDiv(16, 16);

// function for black 
function blackColor() {
    const boxes = container.querySelectorAll('.box');
    btnBlack.textContent = 'Pitch Black';
    btnBlack.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
            box.style.borderRadius = '0';

        }))
    })
    
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

// creating gray button

function greyColor() {
    const boxes = container.querySelectorAll('.box');
    btnGrey.textContent = '50 Shades of Grey';
    btnGrey.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rand = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rand}, ${rand}, ${rand})`;
            box.style.borderRadius = '0';

        }))
    })
    
    buttonsContainer.appendChild(btnGrey).classList.add('btn')
}
greyColor()

// function for skittles mode
function skittlesColor() {
    const boxes = container.querySelectorAll('.box');
    btnSkittles.textContent = 'Skittles Mode'
    btnSkittles.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            
            box.style.background = `rgb(${red},${blue},${green})`
            box.style.borderRadius = '50px';
            
        }))
    })
    
    buttonsContainer.appendChild(btnSkittles).classList.add('btn')
}

skittlesColor()

// function for rainbow mode
function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    btnRGB.textContent = 'Rainbow'
    btnRGB.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            
            box.style.background = `rgb(${red},${blue},${green})`;
            box.style.borderRadius = '0';
           
        }))
    })
    
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

// function for eraser

function eraser() {
    const boxes = container.querySelectorAll('.box');
    btnEraser.textContent = 'Eraser'
    btnEraser.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
            box.style.borderRadius = '0';

        }))
    })
    
    buttonsContainer.appendChild(btnEraser).classList.add('btn')
}

eraser()

// function to reset grid after new grid input
function reset() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove())
}

// function to clear grid
/*
function reset() {
    const boxes = container.querySelectorAll('.box');
    btnReset.textContent = 'Shake It Up!'
    btnReset.addEventListener('click' , () => {
    boxes.forEach(box => box.remove())
})
    buttonsContainer.appendChild(btnReset).classList.add('btn');
}
reset() */