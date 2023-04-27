//Create grid 16x16px
// use divs in container 16 divs in 16 rows
// use for loop to iterate and create divs
// we have to give them size otherwise they will be not visibleq
const container = document.querySelector(".container");

//button on top of the screen that asks user number squares per side for new grid;
// how to restart page so it changes amount of squares when user enters input?
// make a function- that fires after click event cleans container and makes new one?
const btn = document.querySelector("body > div.center > button");
btn.addEventListener("click", () => {
  const squaresAmount = prompt("how many squares?");
  createSquares(squaresAmount);
  // add hover effect so grid divs change color when mouse passes over
  // select all divs queryselectorall? foreach element add eventlistener with hovering
  //change div background using JS?
  const squares = document.querySelectorAll(".column");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("color-me");
    });
  });
});

function createSquares(squares) {
  container.innerHTML = "";
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < squares; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}
