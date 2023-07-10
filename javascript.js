const container = document.querySelector('.container');
const resetButton = document.querySelector('.clear-btn');

resetButton.addEventListener("click", resetGrid);

let numCells = 16;

container.style.cssText = `width: ${numCells*25}px`;

function createGrid(numCells) {
  const div = document.createElement('div');
  
  for (let a = 0; a < numCells; a++) {
    for (let b = 0; b < numCells; b++) {
      let cells = document.createElement('div');
      cells.classList.add('cells');
      cells.style.cssText = "background-color: white; border: 1px solid black; height: 25px; width: 25px";
      cells.addEventListener("mouseover", changeCellColor);
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