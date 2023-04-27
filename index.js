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
