const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.oneclick = "=>";
  if (item.id == "clear") {
    display.innerText = "";
  } else if (item.id == "backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if ((display.innerText = "!=" && item.id == "equal")) {
    display.innerText = eval(display.innerText);
  } else if ((display.innerText = "!=" && item.id == "equal")) {
    display.innerText = "Empty!";
    setTimeout(() => (display.innerText = ""), 2000);
  } else {
    display.innerText += item.id;
  }
});

const themeToggleBnt = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleicon = document.querySelector(".toggle.icon");
let = isDark = true;
themeToggleBnt.oneclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBnt.classList.toggle("active");
  isDark = !isDark;
};
