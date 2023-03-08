const HEX_COLOR_MAX_LENGTH = 6;

const body = document.querySelector("body");
const hexElement = document.getElementById("hex-color");

const staticColorBtn = document.querySelector('[data-type="static"]');
const gradientColorBtn = document.querySelector('[data-type="gradient"]');

let hexColorSymbols = Array.from("0123456789ABCDEF");

if (localStorage.getItem("color")) {
  hexElement.innerText = localStorage.getItem("color");
  body.style.background = localStorage.getItem("color");
}

staticColorBtn.addEventListener("click", generateStaticColor);
gradientColorBtn.addEventListener("click", generateGradientColor);

hexElement.addEventListener("click", (e) => {
  navigator.clipboard.writeText(hexElement.innerText);
  hexElement.classList.add("copy");
  setTimeout(() => {
    hexElement.classList.remove("copy");
  }, 700);
});

function generateStaticColor() {
  let color = "#";
  for (let i = 0; i < HEX_COLOR_MAX_LENGTH; i++) {
    let random = Math.floor(Math.random() * hexColorSymbols.length);
    color += hexColorSymbols[random];
  }
  hexElement.innerText = color;
  body.style.background = color;
  localStorage.setItem("color", color);
}

function generateGradientColor() {
  let colorOne = "#";
  let colorTwo = "#";
  let randomDegree = Math.floor(Math.random() * 360);
  for (let i = 0; i < HEX_COLOR_MAX_LENGTH; i++) {
    colorOne +=
      hexColorSymbols[Math.floor(Math.random() * hexColorSymbols.length)];
    colorTwo +=
      hexColorSymbols[Math.floor(Math.random() * hexColorSymbols.length)];
  }
  let color = `linear-gradient(${randomDegree}deg, ${colorOne}, ${colorTwo})`;
  hexElement.innerText = color;
  body.style.background = color;
  localStorage.setItem("color", color);
}
