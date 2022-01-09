const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGrey = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

// function to resize the grid
function resizeGrid() {
    btnSize.textContent = 'Change Grid Size';
    btnSize.addEventListener('click', () => {
        let user = prompt(`What size grid do you want to work with?`);
        if(user === null || user < 1) {
            reset()
            createDiv(16,16)
            blackColor()
            greyColor()
            rgbColor()
        } else {
            reset()
            createDiv(user, user)
            blackColor()
            greyColor()
            rgbColor()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
resizeGrid()
// function create divs
function createDiv(column, row) {
    
    for(let i = 0; i < (column * row); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid'
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDiv(16,16);

// creating gray button

function greyColor() {
    const boxes = container.querySelectorAll('.box');
    btnGrey.textContent = '50 Shades of Grey'
    btnGrey.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rand = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rand}, ${rand}, ${rand})`;
        }))
    })
    
    buttonsContainer.appendChild(btnGrey).classList.add('btn')
}
greyColor()

function blackColor() {
    const boxes = container.querySelectorAll('.box');
    btnBlack.textContent = 'Pitch Black'
    btnBlack.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    btnRGB.textContent = 'Skittles Mode'
    btnRGB.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            
            box.style.background = `rgb(${red},${blue},${green})`
            
        }))
    })
    
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

// function to reset grid
function reset() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove())
}