let numCells;
const container = document.querySelector('.container');
const resetButton = document.querySelector('.clear-btn');
//const setGridButton = document.querySelector('.grid-size-btn');

//setGridButton.addEventListener("click", getGridSize);
resetButton.addEventListener("click", resetGrid);

// function getGridSize() {
//   let gridSize = parseInt(prompt("Enter a grid size from 1 to 100"));


  
// }

function createGrid(numCells) {

  for (let a = 0; a < numCells; a++) {
    for (let b = 0; b < numCells; b++) {
      const cells = document.createElement('div');
      cells.classList.add('cells');
      cells.addEventListener("mouseover", changeCellColor);
      cells.style.cssText = `width: ${(1/numCells)*100}%; height: ${(1/numCells)*100}%`;
      container.appendChild(cells);
    }
 }
}

function changeCellColor(event) {
  event.target.style.backgroundColor = "black";
}

function resetGrid() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
}


createGrid(numCells);