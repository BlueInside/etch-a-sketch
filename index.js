//Create grid 16x16px
// use divs in container 16 divs in 16 rows
// use for loop to iterate and create divs
// we have to give them size otherwise they will be not visibleq
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }
}
// add hover effect so grid divs change color when mouse passes over
// select all divs queryselectorall? foreach element add eventlistener with hovering
//change div background using JS?
const squares = document.querySelectorAll(".column");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("color-me");
  });
});

//button on top of the screen that asks user number squares per side for new grid;
// how to restart page so it changes amount of squares when user enters input?
// make a function- that fires after click event cleans container and makes new one?
const btn = document.querySelector("body > div.center");
btn.addEventListener("click", () => {
  const squaresAmount = alert("how many squares?");
});
