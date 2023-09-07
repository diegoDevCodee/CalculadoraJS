const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// recorro los botones y les asigno un evento onclick
buttons.forEach((item) => {
  item.onclick = () => {
    // si el boton es clear, borro el display
    if (item.id === "clear") {
      display.innerText = "";
      // si el boton es backspace, borro el ultimo caracter
    } else if (item.id === "backspace") {
      // convierto el texto del display en un string
      let str = display.innerText.toString();
      // corto el string desde el primer caracter hasta el ultimo
      display.innerText = str.substr(0, str.length - 1);
      // si el boton es igual, evaluo la operacion
    } else if (display.innerText != "" && item.id === "equal") {
      // evalua la operacion y la muestra en el display
      // explica eval: https://www.w3schools.com/jsref/jsref_eval.asp
      display.innerText = eval(display.innerText);
      // si el display esta vacio y el boton es igual, muestro un mensaje de error
    } else if (display.innerText == "" && item.id === "equal") {
      display.innerText = "Null";
      // borro el mensaje de error despues de 2 segundos
      // explica setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
      setTimeout(() => (display.innerText = ""), 1000);
      // si el boton es un numero o un operador, lo muestro en el display
    } else {
      display.innerText += item.id;
    }
  };
});

// haciendo el tema oscuro
// explica todo esto:

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  // guardo el tema en el localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
};


const themeMode = () => {
  if (localStorage.getItem("theme") === "dark") {
    calculator.classList.add("dark");
    themeToggleBtn.classList.add("active");
  } else {
    calculator.classList.remove("dark");
    themeToggleBtn.classList.remove("active");
  }
}

themeMode();

// si el tema esta guardado en el localStorage, lo cargo
// const theme = () => {
//   if (localStorage.getItem("theme") === "dark") {
//     calculator.classList.add("dark");
//     themeToggleBtn.classList.add("active");
//   }
//   // si no, cargo el tema por defecto
//    else {
//     calculator.classList.remove("dark");
//     themeToggleBtn.classList.remove("active");
//   }
// };


// theme();
