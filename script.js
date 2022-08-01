"use strict";
//button selectors
const number = document.querySelectorAll(".number");
const subtract = document.querySelector("#btnSubtract");
const add = document.querySelector("#btnPlus");
const percent = document.querySelector("#btnPercent");
const divide = document.querySelector("#btnDivide");
const multiply = document.querySelector("#btnMultiply");
const negative = document.querySelector("#btnNegative");
const decimal = document.querySelector("#btnDec");
const equals = document.querySelector("#btnEqual");
const clear = document.querySelector("#btnClear");
const del = document.querySelector("#btnDel");

//display selectors
const current = document.querySelector("#current");
const total = document.querySelector("#total");

//math operator functions
function addFunction(a, b) {
  return a + b;
}
function multiplyFunction(a, b) {
  return a * b;
}
function subtractFunction(a, b) {
  return a - b;
}
function divideFunction(a, b) {
  return a / b;
}
function percentageFunction(a) {
  return a / 100;
}

number.forEach((num) =>
  num.addEventListener("click", (e) => {
    let target = e.target;
    current.textContent += target.textContent;
  })
);

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
