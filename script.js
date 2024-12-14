const worksBtn = document.getElementById("works-btn");
const toTopBtn = document.getElementById("to-top");
const toggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

const theme = localStorage.getItem("theme");

const darkMode = () => {
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
};
const lightMode = () => {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
};

if (theme === "dark") {
  document.body.classList.remove("dark");
  darkMode();
} else {
  document.body.classList.add("dark");
  lightMode();
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    lightMode();
  } else {
    localStorage.setItem("theme", "dark");
    darkMode();
  }
});

const scrollTo = (top) => {
  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
};
worksBtn.addEventListener("click", () => {
  scrollTo(window.innerHeight);
});

toTopBtn.addEventListener("click", () => {
  scrollTo(0);
});
