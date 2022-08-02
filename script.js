"use strict";
//button selectors
const number = document.querySelectorAll(".number");
const btnSubtract = document.querySelector("#btnSubtract");
const btnAdd = document.querySelector("#btnPlus");
const btnPercent = document.querySelector("#btnPercent");
const btnDivide = document.querySelector("#btnDivide");
const btnMultiply = document.querySelector("#btnMultiply");
const negative = document.querySelector("#btnNegative");
const decimal = document.querySelector("#btnDec");
const equals = document.querySelector("#btnEqual");
const clear = document.querySelector("#btnClear");
const del = document.querySelector("#btnDel");

//display selectors
const current = document.querySelector("#current");
const total = document.querySelector("#total");

//math operator functions
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function percentage(a) {
  return a / 100;
}

function operate() {
  let b = +current.textContent;
  holding = false;
  return +(total.textContent = operator(hold, b));
}

let operator = "";
let hold = "";
let holding = false;

function holdNum() {
  if (total.textContent != "") {
    hold = +total.textContent;
  } else hold = +current.textContent;
}

//button functions
number.forEach((num) =>
  num.addEventListener("click", (e) => {
    if (holding == true) {
      current.textContent = "";
    }
    holding = false;
    let target = e.target;
    current.textContent += +target.textContent;
  })
);

/*
If operator has been selected
  clear current.textContent
  then  add text
*/

clear.addEventListener("click", () => {
  current.textContent = "";
});

decimal.addEventListener("click", () => {
  if (current.textContent.includes(".")) {
    return;
  } else current.textContent += ".";
});

del.addEventListener("click", () => {
  let text = current.textContent;
  current.textContent = text.slice(0, -1);
});

negative.addEventListener("click", () => {
  let text = current.textContent;
  if (text.includes("-")) {
    current.textContent = text.slice(1);
  } else current.textContent = "-" + text;
});

btnPercent.addEventListener("click", () => {
  let working = Number(current.textContent);
  total.textContent = working / 100;
  current.textContent = "";
});

btnAdd.addEventListener("click", () => {
  operator = add;
  holding = true;
  holdNum();
});

equals.addEventListener("click", () => {
  console.log(operate());
  hold = "";
  current.textContent = "";
});
