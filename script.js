"use strict";
//button selectors
const number = document.querySelectorAll(".number");
const btnSubtract = document.querySelector("#btnSubtract");
const btnAdd = document.querySelector("#btnPlus");
const btnPercent = document.querySelector("#btnPercent");
const btnDivide = document.querySelector("#btnDivide");
const btnMultiply = document.querySelector("#btnMultiply");
const negative = document.querySelector("#btnNegative");
const btnDecimal = document.querySelector("#btnDec");
const equals = document.querySelector("#btnEqual");
const btnClear = document.querySelector("#btnClear");
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
  if (b == 0) {
    return "ERROR";
  } else return a / b;
}
function percentage(a) {
  return a / 100;
}

function operate() {
  let b = +current.textContent;
  holding = false;
  return (total.textContent = operator(hold, b));
}
function remSelected() {
  document
    .querySelectorAll(".operators")
    .forEach((btn) => btn.classList.remove("selected"));
}
let operator = "";
let hold = "";
let holding = false;
let target;
let clearState = false;

function holdNum() {
  if (total.textContent != "") {
    hold = +total.textContent;
  } else hold = +current.textContent;
  holding = true;
}

function delNum() {
  let text = current.textContent;
  current.textContent = text.slice(0, -1);
}

function blink(e) {
  let target = e.target;
  target.style.backgroundColor = "#7acbf9";
  setTimeout(() => {
    target.style.backgroundColor = "#efefef";
  }, 10);
}
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("operators")) {
    } else blink(e);
  })
);
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

btnDecimal.addEventListener("click", () => {
  if (current.textContent.includes(".")) {
    return;
  } else current.textContent += ".";
});

del.addEventListener("click", () => {
  delNum();
});

negative.addEventListener("click", () => {
  let text = current.textContent;
  if (text.includes("-")) {
    current.textContent = text.slice(1);
  } else current.textContent = "-" + text;
});

btnPercent.addEventListener("click", () => {
  let working = Number(current.textContent);
  if (working == "") {
    working = +total.textContent;
    total.textContent = working / 100;
  } else total.textContent = working / 100;
  current.textContent = "";
});

btnAdd.addEventListener("click", () => {
  remSelected();
  btnAdd.classList.add("selected");
  operator = add;
  btnClear.textContent = "C";
  holdNum();
});

equals.addEventListener("click", () => {
  operate();
  remSelected();
  hold = "";
  current.textContent = "";
});

btnSubtract.addEventListener("click", () => {
  remSelected();
  btnSubtract.classList.add("selected");
  operator = subtract;
  btnClear.textContent = "C";
  holdNum();
});

btnMultiply.addEventListener("click", () => {
  remSelected();
  btnMultiply.classList.add("selected");
  operator = multiply;
  btnClear.textContent = "C";
  holdNum();
});
btnDivide.addEventListener("click", () => {
  remSelected();
  btnDivide.classList.add("selected");
  operator = divide;
  btnClear.textContent = "C";
  holdNum();
});

btnClear.addEventListener("click", () => {
  if (hold != "" && btnClear.textContent == "C") {
    current.textContent = "";
    btnClear.textContent = "AC";
  } else {
    if ((btnClear.textContent = "AC")) {
      hold = "";
      current.textContent = "";
      total.textContent = "";
      remSelected();
      btnClear.textContent = "C";
    }
  }
});

document.querySelector("body").addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key == "Backspace") {
    del.click();
  } else if (e.key <= 9) {
    if (holding == true) {
      current.textContent = "";
    }
    holding = false;
    current.textContent += +e.key;
  } else if (e.key == "Enter") {
    equals.click();
  } else if (e.key == "*") {
    btnMultiply.click();
  } else if (e.key == "+") {
    btnAdd.click();
  } else if (e.key == "-") {
    btnSubtract.click();
  } else if (e.key == "/") {
    btnDivide.click();
  } else if (e.key == "%") {
    btnPercent.click();
  } else if (e.key == ".") {
    btnDecimal.click();
  } else if (e.key == "c") {
    btnClear.click();
  } else return;
});
