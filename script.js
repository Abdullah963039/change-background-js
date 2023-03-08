const HEX_COLOR_MAX_LENGTH = 6;
const body = document.querySelector("body");
const button = document.querySelector("button");
const hexElement = document.getElementById("hex-color");

let hexColorSymbols = Array.from("0123456789ABCDEF");

button.addEventListener("click", () => {
  generateColor(hexColorSymbols);
});

if (localStorage.getItem("color")) {
  hexElement.innerText = localStorage.getItem("color");
  body.style.backgroundColor = localStorage.getItem("color");
}

function generateColor(array = []) {
  let color = "#";
  for (let i = 0; i < HEX_COLOR_MAX_LENGTH; i++) {
    let random = Math.floor(Math.random() * array.length);
    const element = array[random];
    color = color + element;
  }
  hexElement.innerText = color;
  body.style.backgroundColor = color;
  localStorage.setItem("color", color);
}
