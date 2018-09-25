let count = 0;

const updateCount = () => {
  const countElem = document.querySelector('#count');
  countElem.innerHTML = count;
};

const incButton = document.querySelector('#increment');
const decButton = document.querySelector('#decrement');

incButton.addEventListener("click", () => {
  count += 1;
  updateCount();
});

decButton.addEventListener("click", () => {
  count -= 1;
  updateCount();
});
