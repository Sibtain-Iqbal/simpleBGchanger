const randomColor = function () {
  const hex = "123456789ABCDEEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    
  }
  return color;
};


let allColors;

const changeBgColor = function () {
  if (!allColors) {
    allColors = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 200);
  }
};

const stopColor = () => {
  clearInterval(allColors);
  allColors = null;
};

document.querySelector("#start").addEventListener("click", changeBgColor);
document.querySelector("#stop").addEventListener("click", stopColor);

