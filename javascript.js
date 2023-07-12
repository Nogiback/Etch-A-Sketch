//Setting default grid size to 16 on page load
let defaultGrid=16;

//Getting selectors from HTML
const container = document.querySelector('.container');
const resetButton = document.querySelector('.clear-btn');
const setGridButton = document.querySelector('.grid-size-btn');

//Setting event listeners for buttons on page
setGridButton.addEventListener("click", getGridSize);
resetButton.addEventListener("click", resetGrid);

//Calling createGrid function with default size on page load
createGrid(defaultGrid);

//Prompt user for grid size 1 to 100 and call createGrid function if valid
function getGridSize() {
  let validInput =  false;
  container.textContent = "";

  while (validInput === false) {
    let gridSize = parseInt(prompt("Enter a grid size from 1 to 100"));

    if (gridSize >= 1 && gridSize <= 100) {
      validInput = true;
      createGrid(gridSize);
    } else {
      alert("Invalid entry. Please pick a grid size from 1 to 100");
      continue;
    }
  }
}

//Creating grid size based on user input using nested loops to iterate rows and columns
function createGrid(numCells) {

  for (let a = 0; a < numCells; a++) {
    for (let b = 0; b < numCells; b++) {
      const cells = document.createElement('div');
      cells.classList.add('cells');
      cells.addEventListener("mouseover", changeCellColor);
      //Resizing cells dynamically based on grid size
      cells.style.cssText = `width: ${(1/numCells)*100}%; height: ${(1/numCells)*100}%`;
      container.appendChild(cells);
    }
 }
}

//Changing cell color on mouseover input
function changeCellColor(event) {
  event.target.style.backgroundColor = "black";
}

//Resets all cells upon Reset button click
function resetGrid() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
}