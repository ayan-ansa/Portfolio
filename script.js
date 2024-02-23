const mode = document.querySelector("i");
const body = document.querySelector("body");
console.log(buttons);
let currColor = "light";
mode.addEventListener("click", () => {
  if (currColor === "light") {
    currColor = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currColor = "light";
    body.classList.add("light");
    body.classList.remove("dark");
 
  }
});

