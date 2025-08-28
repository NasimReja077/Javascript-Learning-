// const DecreaseButton = document.getElementById("decrement"); // "" tis time dont use # or . '' tis time is using.

// const ResetButton = document.getElementById("reset");

// const IncrementButton = document.getElementById("increment");

// const UpdateValue = document.getElementById("title");

// let count = 0;

// IncrementButton.onclick = function () {
//      count++;
//      UpdateValue.textContent = count;
// };

// DecreaseButton.onclick = function () {
//      count--;
//      UpdateValue.textContent = count;
// };


// ResetButton.onclick = function () {
//      count = 0;
//      UpdateValue.textContent = count;
// };



// using Event 
const DecreaseButton = document.querySelector('#decrement');
const ResetButton = document.querySelector('#reset');
const IncrementButton = document.querySelector('#increment');
const UpdateValue = document.querySelector('#title');
let curValue = 0;


IncrementButton.addEventListener('click', () => {
  curValue++;
  UpdateValue.textContent = curValue;
});

DecreaseButton.addEventListener('click', () => {
  curValue--;
  UpdateValue.textContent = curValue;
});

ResetButton.addEventListener('click', () => {
  curValue = 0;
  UpdateValue.textContent = curValue;
});


// https://www.codingnepalweb.com/button-increment-decrement-number/