const container = document.querySelector(".container");

//Ask user for amount of squares
const btn = document.querySelector("body > div.center > button");
btn.addEventListener("click", () => {
  const squaresAmount = prompt("how many squares? (100 max)");
  createSquares(squaresAmount);
  //Change divs bg on hover
  const squares = document.querySelectorAll(".column");
  squares.forEach((square) => {
    square.addEventListener("mousemove", (e) => {
      //Color only if button pressed!
      if (e.buttons) square.classList.add("color-me");
    });
  });
});

function createSquares(squares) {
  // set limit for the user input to max 100 squares
  squares = squares > 100 ? 100 : squares;

  container.innerHTML = "";
  //Create grid squares x squares
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
