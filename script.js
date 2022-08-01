"use strict";
//button selectors
const one = document.querySelector("#btn1");
const two = document.querySelector("#btn2");
const three = document.querySelector("#btn3");
const four = document.querySelector("#btn4");
const five = document.querySelector("#btn5");
const six = document.querySelector("#btn6");
const seven = document.querySelector("#btn7");
const eight = document.querySelector("#btn8");
const nine = document.querySelector("#btn9");
const zero = document.querySelector("#btn0");
const subtract = document.querySelector("#btn-");
const add = document.querySelector("#btn+");
const percent = document.querySelector("#btn%");
const divide = document.querySelector("#btn/");
const multiply = document.querySelector("#btnX");
const negative = document.querySelector("#btn+-");
const decimal = document.querySelector("#btn.");
const equals = document.querySelector("#btn=");
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
