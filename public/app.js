const incrementButton = document.querySelector(".increment-button");
const resetButton = document.querySelector(".reset-button");
const counterElement = document.querySelector(".counter");
let counter;

async function changeCounter(method) {
  await fetch("http://localhost:3000/api/counter", { method: method })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => (counter = response.counter));
  counterElement.textContent = counter;
}

changeCounter("GET");
incrementButton.addEventListener("click", () => changeCounter("POST"));
resetButton.addEventListener("click", () => {
  if (counter !== 0) {
    changeCounter("DELETE");
  }
});
