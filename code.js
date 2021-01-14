const grid = document.getElementById('grid-container');
const gridWidth = grid.offsetWidth; 

const image1 = "url(https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg)"
const image2 = "url(https://pbs.twimg.com/profile_images/1020696791019290624/DT9Dzp8d_400x400.jpg)"
const image3 = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyJlhK6TNI35LthqmUN1WaBvKkKzxo892qA&usqp=CAU)"

const easy = 10;
const medium = 20;
const hard = 30;

let currentGridSize = 10;

//Helper function for createGrid
function paintSquare(e) {
    e.target.setAttribute('class', 'painted');
}

function createGrid (width) {
    let numberOfGridSquares = width ** 2;
    let squareSize = (100/width).toString() + "%";

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    for (let i = 0; i < numberOfGridSquares; i++) {

        let div = document.createElement('div');
        div.setAttribute('class', 'square');
        console.log(div.getAttribute('class'));
        div.style.height = squareSize;
        div.style.width = squareSize;
        div.addEventListener('mouseenter', paintSquare, { once: true })
        grid.appendChild(div);
    }

}
createGrid(10);

function createGridEasy() {
    createGrid(easy);
    currentGridSize = easy;
}

function createGridMedium() {
    createGrid(medium);
    currentGridSize = medium;
}

function createGridHard() {
    createGrid(hard);
    currentGridSize = hard;
}

const easyButton = document.getElementById('easy');
easyButton.addEventListener('click', createGridEasy);

const medButton = document.getElementById('medium');
medButton.addEventListener('click', createGridMedium);

const hardButton = document.getElementById('hard');
hardButton.addEventListener('click', createGridHard);



const animal1 = document.getElementById("animal1");
animal1.addEventListener('click', () => {
    createGrid(currentGridSize);
    grid.style.backgroundImage = image1;
});

const animal2 = document.getElementById("animal2");
animal2.addEventListener('click', () => {
    createGrid(currentGridSize);
    grid.style.backgroundImage = image2;
});

const animal3 = document.getElementById("animal3");
animal3.addEventListener('click', () => {
    createGrid(currentGridSize);
    grid.style.backgroundImage = image3;
});

